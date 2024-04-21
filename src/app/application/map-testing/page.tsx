import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center: [number, number];
  zoom: number;
  style: React.CSSProperties;
}

export default function Page() {
  const position: [number, number] = [9.4196, 123.1845];
  const zoom = 12;

  const mapProps: MapProps = {
    center: position,
    zoom: zoom,
    style: { width: "100%", height: "100%" },
  };

  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-[80vh] bg-white bg-opacity-85 p-4 rounded-2xl">
        <MapContainer {...mapProps}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
}
