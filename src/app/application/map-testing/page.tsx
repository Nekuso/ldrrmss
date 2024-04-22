import { useQuery } from "blitz";

const Page = () => {
  const [startLocation, setStartLocation] = useQuery("", { suspense: false });
  const [endLocation, setEndLocation] = useQuery("", { suspense: false });

  const handleSearch = () => {
    const start = startLocation || "";
    const end = endLocation || "";

    // Perform routing using OpenRouteService or other routing service
    // Example: Send request to OpenRouteService API and process the response
    // Replace with actual implementation using fetch or Axios

    // For demonstration purposes, here we'll simply log the route
    console.log("Routing from:", start, "to:", end);

    // Clear input fields after search
    setStartLocation("");
    setEndLocation("");
  };

  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-[80vh] bg-white bg-opacity-85 p-4 rounded-2xl">
        <iframe
          title="OpenStreetMap"
          width="100%"
          height="100%"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=123.1615,9.381,123.208,9.4448&layer=mapnik`}
        ></iframe>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter start location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter end location"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search Route</button>
      </div>
    </div>
  );
};

export default Page;
