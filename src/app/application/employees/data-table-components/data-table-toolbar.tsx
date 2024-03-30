"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { calamityStatuses, calamityTypes, roles } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { GoPlusCircle } from "react-icons/go";
import { Addemployeebutton } from "../add-employee/add-employee-button";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="w-full flex justify-between place-items-center">
        <div className="flex flex-1 place-items-center space-x-2">
          <Input
            placeholder="Find Employee"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={calamityStatuses}
            />
          )}
          {table.getColumn("role") && (
            <DataTableFacetedFilter
              column={table.getColumn("role")}
              title="Roles"
              options={roles}
            />
          )}

          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        <Addemployeebutton />
      </div>
    </div>
  );
}
