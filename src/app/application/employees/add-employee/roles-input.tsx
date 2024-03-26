import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";

export default function SelectDemo({ data }: { data: any }) {
  const rolesData = [
    { id: 1, role: "Administrator" },
    { id: 2, role: "Manager" },
    { id: 3, role: "Staff" },
    { id: 4, role: "Cashier" },
    { id: 5, role: "Supervisor" },
  ];

  return (
    <Select onValueChange={data.onChange}>
      <FormControl>
        <SelectTrigger className="w-full bg-lightComponentBg border-slate-600/50 rounded-lg ">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
      </FormControl>
      <SelectContent className="rounded-lg">
        <SelectGroup>
          {rolesData.map((role) => (
            <SelectItem key={role.id} value={role.role}>
              {role.role}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
