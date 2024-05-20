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

  const fetchRoute = async (from: [number, number], to: [number, number]) => {
    // Fetch the route from the API and set it
    // This is a placeholder, replace with your actual implementation
    return [
      [from[0], from[1]],
      [to[0], to[1]],
    ];
  };

  const handleGoClick = async () => {
    if (startPosition && endPosition) {
      const newRoute: [number, number][] = (
        await fetchRoute(startPosition, endPosition)
      ).map(([lat, lon]) => [lat, lon]);
      setRoute(newRoute);
    }
  };

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
