import React from 'react';
import { Search } from "@/app/application/dashboard/components/search"
import { UserNav } from "@/app/application/dashboard/components/user-nav"
import { MainNav } from "@/app/application/dashboard/components/main-nav"
import { TabsDemo } from './tabss';

const Account: React.FC = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-black font-bold ml-4 mb-2">Profile</h1>
      <div className="w-[94%] h-[94%] rounded-xl border border-white bg-white shadow-2xl flex flex-col">
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

        <div className="flex justify-center items-center h-full">
          <TabsDemo/>
        </div>

      </div>
    </div>
  );
}

export default Account;
