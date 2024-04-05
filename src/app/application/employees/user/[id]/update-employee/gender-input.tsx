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
    <Select onValueChange={data.onChange}>
      <SelectTrigger
        id="gender"
        name="gender"
        className="w-full bg-lightComponentBg border-slate-600/50 rounded-lg "
        {...data}
      >
        <SelectValue
          className="text-white"
          placeholder={data ? data.value : "Select a Gender"}
        />
      </SelectTrigger>
      <SelectContent className="rounded-lg border-slate-600/50 text-black">
        <SelectGroup>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="gay">Gay</SelectItem>
          <SelectItem value="tomboy">Tomboy</SelectItem>
          <SelectItem value="trans">Trans</SelectItem>
          <SelectItem value="Good">I hate non-straight</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
