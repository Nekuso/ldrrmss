import { Input } from "@/components/ui/input";
import { table } from "console";

export function Createrequestform() {
  return (
    <>
      <div className="w-full flex gap-4">
        <div className="w-full flex flex-col">
          <div className="form-item">
            <label className="form-label text-xs font-medium">First Name</label>
            <input
              className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg bg-lightComponentBg border-slate-600/50"
              placeholder="Enter First Name"
            ></input>
            <div className="form-message"></div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="form-item">
            <label className="form-label text-xs font-medium">Last Name</label>
            <input
              className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg bg-lightComponentBg border-slate-600/50"
              placeholder="Enter Last Name"
            ></input>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="form-item">
          <label className="form-label text-xs font-medium">
            Search Account
          </label>
          <Input
            placeholder="Search account ..."
            className="flex h-10 w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg bg-lightComponentBg border-slate-600/50"
          />
          <div className="form-message"></div>
        </div>
      </div>
    </>
  );
}
