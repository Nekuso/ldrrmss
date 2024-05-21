// LocationSearch.tsx
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { Controller } from "react-hook-form";
import { TileLayer, MapContainer, Marker, Polyline } from "react-leaflet";
import { icon, Icon } from "leaflet";
import { Input } from "@/components/ui/input";
import { Button } from "antd";
import { LatLngBoundsLiteral, LatLngTuple } from "leaflet";

export const LocationSearch = ({ control }: { control: any }) => {
  const [isSatellite, setIsSatellite] = useState(false); // Add this line
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

  const [instructions, setInstructions] = useState<string[]>([]);

  const fetchRoute = async (from: [number, number], to: [number, number]) => {
    console.log("Fetching route from:", from, "to:", to);
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62489d58851d849f4aaabf3b5400c49deaf2&start=${from[1]},${from[0]}&end=${to[1]},${to[0]}`
      );
      const data = await response.json();
      console.log("Response from OpenRouteService API:", data);
      if (
        !data.features ||
        !data.features[0] ||
        !data.features[0].geometry ||
        !data.features[0].geometry.coordinates
      ) {
        console.error(
          "Unexpected response format from OpenRouteService API:",
          data
        );
        return { coordinates: [], instructions: [] };
      }
      const coordinates: [number, number][] =
        data.features[0].geometry.coordinates.map(
          ([lon, lat]: [number, number]) => [lat, lon]
        );
      const instructions: string[] =
        data.features[0].properties.segments[0].steps.map(
          (step: any) => step.instruction
        );
      return { coordinates, instructions };
    } catch (error) {
      console.error("Error fetching route from OpenRouteService API:", error);
      return { coordinates: [], instructions: [] };
    }
  };

  const handleGoClick = async () => {
    if (startPosition && endPosition) {
      const routeData = await fetchRoute(startPosition, endPosition);
      if (routeData) {
        setRoute(routeData.coordinates);
        setInstructions(routeData.instructions);
        zoomToRoute(routeData.coordinates);
      }
    }
  };
  {
    route && <Polyline positions={route} color="red" />;
  }
  const zoomToRoute = (route: [number, number][]) => {
    const map = useMap();
    const bounds: LatLngBoundsLiteral = route.map(
      ([lat, lon]) => [lat, lon] as LatLngTuple
    );
    map.fitBounds(bounds);
  };

  // New component
  const Route = ({ route }: { route: [number, number][] | null }) => {
    const map = useMap();

    useEffect(() => {
      if (route && route.length > 0) {
        const latitudes = route.map(([lat, _]) => lat);
        const longitudes = route.map(([_, lon]) => lon);
        const bounds: LatLngBoundsLiteral = [
          [Math.min(...latitudes), Math.min(...longitudes)],
          [Math.max(...latitudes), Math.max(...longitudes)],
        ];
        map.fitBounds(bounds);
      }
    }, [route, map]);

    console.log(route); // Add this line

    return route ? <Polyline positions={route} color="red" /> : null;
  };

  const [currentPosition, setCurrentPosition] = useState<
    [number, number] | null
  >(null);

  const [useDeviceLocation, setUseDeviceLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation && useDeviceLocation) {
      navigator.geolocation.watchPosition((position) => {
        setCurrentPosition([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [useDeviceLocation]);

  useEffect(() => {
    const start = useDeviceLocation ? currentPosition : startPosition;
    if (start && endPosition) {
      fetchRoute(start, endPosition).then((routeData) => {
        if (routeData) {
          setRoute(routeData.coordinates);
          setInstructions(routeData.instructions);
          zoomToRoute(routeData.coordinates);
        }
      });
    }
  }, [useDeviceLocation, currentPosition, startPosition, endPosition]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
      </div>
      <div className=" flex-row gap-4 mt-4 grid grid-cols-1 md:grid-cols-5">
        <Button
          className="items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 text-xs font-bold rounded-lg min-w-[105px] flex justify-center place-items-center gap-2 bg-primary/90 hover:bg-primary primary-glow transition-all duration-300"
          onClick={handleGoClick}
        >
          Go
        </Button>
        <button
          type="button"
          className="items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 text-xs font-bold rounded-lg min-w-[105px] flex justify-center place-items-center gap-2 bg-primary/90 hover:bg-primary primary-glow transition-all duration-300"
          onClick={() => setUseDeviceLocation(!useDeviceLocation)}
        >
          {useDeviceLocation
            ? "Use manual start location"
            : "Use device location as start"}
        </button>
        <button
          type="button"
          className="items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 text-xs font-bold rounded-lg min-w-[105px] flex justify-center place-items-center gap-2 bg-primary/90 hover:bg-primary primary-glow transition-all duration-300"
          onClick={() => setIsSatellite(!isSatellite)}
        >
          Toggle Satellite
        </button>
      </div>
      <div
        className="mt-4 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="instructions">
          {instructions.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </div>
        <MapContainer
          center={startPosition || [9.4401, 123.187]}
          zoom={13}
          style={{ height: "40vh", width: "100%" }}
        >
          {isSatellite ? (
            <>
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}" />
            </>
          ) : (
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          )}
          {startPosition && (
            <Marker position={startPosition} icon={fromMarkerIcon} />
          )}
          {endPosition && <Marker position={endPosition} icon={toMarkerIcon} />}
          <Route route={route} />
        </MapContainer>
      </div>
    </>
  );
};
