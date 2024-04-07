import { Metadata } from "next";
import { z } from "zod";

import { DataTable } from "./data-table-components/data-table";
import { columns } from "./data-table-components/columns";
import requests from "./data/requests.json";

export const metadata: Metadata = {
  title: "Requests",
  description: "Example dashboard app built using the components.",
};

export default function RequestPage() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit bg-white p-4 rounded-2xl">
        <DataTable data={requests} columns={columns} />
      </div>
    </div>
  );
}
