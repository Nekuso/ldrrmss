import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Stockbutton() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Type of supply" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Rescue Team Supplies</SelectLabel>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="kits">Kits</SelectItem>
          <SelectItem value="medicines">Medicines</SelectItem>
          <SelectItem value="tools">Tools</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
