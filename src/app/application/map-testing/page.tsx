import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-[80vh] bg-white bg-opacity-85 p-4 rounded-2xl">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=123.1615,9.381,123.208,9.4448&layer=mapnik`}
        ></iframe>
      </div>
      <div>
        <input type="text" placeholder="Search for a location" />
        <button>Search</button>
      </div>
    </div>
  );
}
