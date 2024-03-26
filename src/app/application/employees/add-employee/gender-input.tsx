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
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="gay">Gay</SelectItem>
          <SelectItem value="femboy">FemBoy</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
