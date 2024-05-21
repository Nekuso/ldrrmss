// LocationSearch.tsx
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { Controller } from "react-hook-form";
import { TileLayer, MapContainer, Marker, Polyline } from "react-leaflet";
import { icon, Icon } from "leaflet";
import { Input } from "@/components/ui/input";
import { Button } from "antd";

export const LocationSearch = ({ control }: { control: any }) => {
  const [startPosition, setStartPosition] = useState<[number, number] | null>(
    null
  );
  const [endPosition, setEndPosition] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][] | null>(null);

  const customMarkerIcon: Icon = icon({
    iconUrl: "path-to-your-red-icon.png",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const fetchRoute = async (from: [number, number], to: [number, number]) => {
    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=<your_api_key>&start=${from[1]},${from[0]}&end=${to[1]},${to[0]}&instructions=true`
    );
    const data = await response.json();
    if (data.features && data.features[0] && data.features[0].geometry) {
      const route = data.features[0].geometry.coordinates.map(
        ([lon, lat]: [number, number]) => [lon, lat]
      );
      const instructions = data.features[0].properties.segments[0].steps.map(
        (step: any) => step.instruction
      );
      return { route, instructions };
    }
    return null;
  };

  const fetchLocation = async (location: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );
    const searchResults = await response.json();
    if (searchResults && searchResults[0]) {
      const { lat, lon } = searchResults[0];
      return [parseFloat(lat), parseFloat(lon)] as [number, number];
    }
    return null;
  };

  const [instructions, setInstructions] = useState<string[]>([]); // Declare the instructions state variable

  const handleGoClick = async () => {
    if (startPosition && endPosition) {
      const routeData = await fetchRoute(startPosition, endPosition);
      if (routeData) {
        const { route, instructions } = routeData;
        const newRoute: [number, number][] = route.map(
          ([lat, lon]: [number, number]) => [lat, lon]
        );
        setRoute(newRoute);
        setInstructions(instructions); // set the instructions
      }
    }
  };

  return (
    <>
      <div>
        <ul>
          {instructions.map(
            (
              instruction: string,
              index: number // Specify the types for the instruction and index parameters
            ) => (
              <li key={index}>{instruction}</li>
            )
          )}
        </ul>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <Controller
          name="start_location"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Enter Start Location"
              defaultValue={field.value || ""}
              onChange={async (e) => {
                field.onChange(e.target.value);
                const newPosition = await fetchLocation(e.target.value);
                setStartPosition(newPosition);
              }}
            />
          )}
        />
        <Controller
          name="start_coordinates"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Start Coordinates"
              value={startPosition ? startPosition.join(", ") : ""}
              readOnly
            />
          )}
        />
        <Controller
          name="end_location"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Enter End Location"
              defaultValue={field.value || ""}
              onChange={async (e) => {
                field.onChange(e.target.value);
                const newPosition = await fetchLocation(e.target.value);
                setEndPosition(newPosition);
              }}
            />
          )}
        />
        <Controller
          name="end_coordinates"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="End Coordinates"
              value={endPosition ? endPosition.join(", ") : ""}
              readOnly
            />
          )}
        />
        <Button onClick={handleGoClick}>Go</Button>
      </div>
      <div
        className="mt-4 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <MapContainer
          center={[45, 10]}
          zoom={4}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {startPosition && (
            <Marker position={startPosition} icon={customMarkerIcon} />
          )}
          {endPosition && (
            <Marker position={endPosition} icon={customMarkerIcon} />
          )}
          {route && <Polyline positions={route} />}
        </MapContainer>
      </div>
    </>
  );
};
