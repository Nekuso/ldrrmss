import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectDemo({ data }: { data: any }) {
  return (
    <Select>
      <SelectTrigger
        id="gender"
        name="gender"
        className="w-full  border-slate-600/50 rounded-lg "
        {...data}
      >
        <SelectValue className="" placeholder="Select a Gender" />
      </SelectTrigger>
      <SelectContent className="rounded-lg ">
        <SelectGroup>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Gay">Gay</SelectItem>
          <SelectItem value="Tomboy">Tomboy</SelectItem>
          <SelectItem value="Trans">Transgender</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
