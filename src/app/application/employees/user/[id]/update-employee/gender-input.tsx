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
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Gay">Gay</SelectItem>
          <SelectItem value="Tomboy">Tomboy</SelectItem>
          <SelectItem value="Transgender">Transgender</SelectItem>
          <SelectItem value="I hate non-straight">
            I hate non-straight
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}