import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const calamities = [
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

export function CalamityDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a calamity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Calamities</SelectLabel>
          {calamities.map((calamity) => (
            <SelectItem key={calamity.value} value={calamity.value}>
              {calamity.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
