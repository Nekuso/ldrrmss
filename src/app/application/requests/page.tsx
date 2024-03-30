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
      <DataTable data={requests} columns={columns} />
  );
}
