// LocationSearch.tsx
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Controller } from "react-hook-form";
import { TileLayer, MapContainer } from "react-leaflet";
import { Input } from "@/components/ui/input";
// LocationSearch.tsx

export const LocationSearch = ({ control }: { control: any }) => {
  return (
    <>
      <Controller
        name="location_search"
        control={control}
        render={({ field }) => (
          <Input
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
                    map.flyTo([parseFloat(lat), parseFloat(lon)], 13);
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
