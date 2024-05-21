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

  const fromMarkerIcon: Icon = icon({
    iconUrl: "/Mapmarker-red.png",
    iconSize: [45, 48],
    iconAnchor: [13, 47],
    popupAnchor: [-3, -76],
  });
  const toMarkerIcon: Icon = icon({
    iconUrl: "/Mapmarker-green.png",
    iconSize: [65, 55],
    iconAnchor: [13, 47],
    popupAnchor: [-3, -76],
  });

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
  const fetchRoute = async (from: [number, number], to: [number, number]) => {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&steps=true`
      );
      const data = await response.json();
      if (
        !data.routes ||
        !data.routes[0] ||
        !data.routes[0].geometry ||
        !data.routes[0].geometry.coordinates
      ) {
        console.error("Unexpected response format from OSRM API:", data);
        return { coordinates: [], instructions: [] };
      }
      const coordinates: [number, number][] =
        data.routes[0].geometry.coordinates;
      const instructions: string[] = data.routes[0].legs.flatMap((leg: any) =>
        leg.steps.map((step: any) => step.maneuver.instruction)
      );
      return { coordinates, instructions };
    } catch (error) {
      console.error("Error fetching route from OSRM API:", error);
      return { coordinates: [], instructions: [] };
    }
  };

  const handleGoClick = async () => {
    if (startPosition && endPosition) {
      const routeData = await fetchRoute(startPosition, endPosition);
      if (routeData) {
        const newRoute: [number, number][] = routeData.coordinates.map(
          ([lon, lat]: [number, number]) => [lat, lon]
        );
        setRoute(newRoute); // Remove the square brackets around newRoute
        setInstructions(routeData.instructions); // Save the instructions to state
      }
    }
  };
  {
    route && <Polyline positions={route} color="red" />;
  }

  return (
    <>
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
          center={startPosition || [45, 10]}
          zoom={13}
          style={{ height: "40vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {startPosition && (
            <Marker position={startPosition} icon={fromMarkerIcon} />
          )}
          {endPosition && <Marker position={endPosition} icon={toMarkerIcon} />}
          {route && <Polyline positions={route} />}
        </MapContainer>
      </div>
    </>
  );
};
