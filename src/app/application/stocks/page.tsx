import { Metadata } from "next";
import { z } from "zod";

import { DataTable } from "./data-table-components/data-table";
import { columns } from "./data-table-components/columns";
import tasks from "./data/tasks.json";
import requests from "./data/requests.json";

export const metadata: Metadata = {
  title: "Stocks",
  description: "Example dashboard app built using the components.",
};

export default function StocksPage() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8 bg-transparent">
      Stocks ni bai
    </div>
  );
}
