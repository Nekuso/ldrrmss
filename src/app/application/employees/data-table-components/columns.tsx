"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { EmployeesDisplay } from "@/types/index";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const calamityTypes = [
  {
    value: "Earthquake",
    label: "Earthquake",
  },
  {
    value: "Flood",
    label: "Flood",
  },
  {
    value: "Fire",
    label: "Fire",
  },
  {
    value: "Tornado",
    label: "Tornado",
  },
  {
    value: "Hurricane",
    label: "Hurricane",
  },
  {
    value: "Volcano Eruption",
    label: "Volcano Eruption",
  },
  {
    value: "Blizzard",
    label: "Blizzard",
  },
  {
    value: "Drought",
    label: "Drought",
  },
  {
    value: "Wildfire",
    label: "Wildfire",
  },
  {
    value: "Tsunami",
    label: "Tsunami",
  },
  {
    value: "Cyclone",
    label: "Cyclone",
  },
];

export const calamityStatuses = [
  {
    value: "Available",
    label: "Ongoing",
  },
  {
    value: "In Progress",
    label: "In Progress",
  },
  {
    value: "Unavailable",
    label: "Unavailable",
  },
];

export const roles = [
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Employee",
    label: "Employee",
  },
  {
    value: "Supervisor",
    label: "Supervisor",
  },
  {
    value: "Administrator",
    label: "Administrator",
  },
  {
    value: "Rescuer",
    label: "Rescuer",
  },
];

export const columns: ColumnDef<EmployeesDisplay>[] = [
  {
    id: "name",
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="flex place-items-center gap-4 z-0">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              {item.first_name} {item.last_name}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    id: "contact_number",
    accessorKey: "contact_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact Number" />
    ),
    cell: ({ row }) => {
      const item = row.original;
      return item.contact_number;
    },
  },
  // {
  //   id: "calamity_type",
  //   accessorKey: "calamity_type",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Full Name" />
  //   ),
  //   cell: ({ row }) => {
  //     const calamity_type = calamityTypes.find(
  //       (label) => label.value === row.getValue("calamity_type")
  //     );

  //     if (!calamity_type) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex space-x-2">
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue("calamity_type")}
  //         </span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = calamityStatuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[150px] items-center">
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "role",
    accessorFn: (row) => row.roles.role,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = roles.find((role) => role.value === row.original.roles.role);

      if (!role) {
        return null;
      }

      return (
        <div className="flex w-[150px] items-center">
          <span>{role.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[150px] truncate">
            {row.getValue("address")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="ml-4">
          <Link
            className=" text-slate-400 hover:text-black "
            href={`/application/employees/user/${id}`}
          >
            <FaEye className="mr-2 " />
          </Link>
        </div>
      );
    },
  },
];
