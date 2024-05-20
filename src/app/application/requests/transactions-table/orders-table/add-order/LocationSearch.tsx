// LocationSearch.tsx
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { Controller } from "react-hook-form";
import { TileLayer, MapContainer, Marker } from "react-leaflet";
import { icon, Icon } from "leaflet";
import { Input } from "@/components/ui/input";

export const LocationSearch = ({ control }: { control: any }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  const customMarkerIcon: Icon = icon({
    iconUrl: "path-to-your-red-icon.png", // replace with the path to your red icon
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <>
      <label
        htmlFor="location_search"
        className="block text-sm font-medium text-gray-700 mb-2" // Add margin-bottom
      >
        Location Search
      </label>
      <Controller
        name="location_search"
        control={control}
        render={({ field }) => (
          <Input
            id="location_search"
            className="rounded-lg border-slate-600/50 w-3/4 mx-auto my-2" // Adjust width to 75% and add margin
            {...field}
            type="text"
            placeholder="Enter Location"
            defaultValue={field.value || ""}
            onChange={async (e) => {
              field.onChange(e.target.value);
            }}
          />
        )}
      />
      <MapContainer
        center={[45, 10]}
        zoom={4}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markerPosition && (
          <Marker position={markerPosition} icon={customMarkerIcon} />
        )}
        <Controller
          name="location_search"
          control={control}
          render={({ field }) => {
            const map = useMap();
            useEffect(() => {
              const fetchLocation = async () => {
                const location = field.value;
                if (location) {
                  const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
                  );
                  const searchResults = await response.json();
                  if (searchResults && searchResults[0]) {
                    const { lat, lon } = searchResults[0];
                    const newPosition: [number, number] | null = [
                      parseFloat(lat),
                      parseFloat(lon),
                    ];
                    map.flyTo(newPosition, 13);
                    setMarkerPosition(newPosition);
                  }
                }
              };
              fetchLocation();
            }, [field.value]);
            return <></>; // Change null to <></>
          }}
        />
      </MapContainer>
    </>
  );
};
