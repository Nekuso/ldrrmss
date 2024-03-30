import { columns } from "./data-table-components/columns";
import { DataTable } from "./data-table-components/data-table";
import employeeData from "./data/data.json";

export default function Page() {
  return <DataTable data={employeeData} columns={columns} />;
}
