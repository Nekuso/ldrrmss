import React from "react";
import { Search } from "@/components/application/search";
import { UserNav } from "@/components/application/user-nav";
import { MainNav } from "@/components/application/main-nav";
import { DialogDemo } from "./announcementadd";
import { AlertDemo } from "./alert";

const Announcement: React.FC = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-black font-bold ml-4 mb-2 ">Announcement</h1>
      <div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">
        <div className="hidden flex-col md:flex w-full">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
        </div>

        <div className="m-1 space-y-2">
          <DialogDemo />
          <AlertDemo />
          <AlertDemo />
          <AlertDemo />
          <AlertDemo />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
