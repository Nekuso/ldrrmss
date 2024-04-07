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
      <div className="w-full flex flex-col relative">
        <div className="form-item">
          <label className="form-label text-xs font-medium">
            Search Account
          </label>
          <div className="relative">
            <Input
              placeholder="Search account ..."
              className="flex h-10 w-full border px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg bg-lightComponentBg border-slate-600/50"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="form-message"></div>
        </div>
      </div>
    </>
  );
}
