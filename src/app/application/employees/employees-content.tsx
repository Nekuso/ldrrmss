import { columns } from "./data-table-components/columns";
import { DataTable } from "./data-table-components/data-table";

export default function Page({ dataEmployees, allRoles }: any) {
  return <DataTable data={dataEmployees} columns={columns} />;
}
