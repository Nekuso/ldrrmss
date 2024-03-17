import React from 'react';
import { MainNav } from "@/app/application/dashboard/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogDemo1 } from './pops';

const Createrequest: React.FC = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-black font-bold ml-4 mb-2 ">Creating Request</h1>
      <div className="w-[94%] h-[94%] rounded-xl border border-white bg-white shadow-2xl">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>

        <div className="w-[100%] h-[95%] flex flex-row justify-center mt-3">
          <div className="h-[94%] w-[25%] m-1 border border-gray-300 rounded-xl shadow-lg col-span-4 sm:col-span-3 p-10 flex flex-col justify-center items-center">
            <Input className=" border border-gray-500" type="email" placeholder="Search Name/Email/Phone No." />
          </div>

          <div className="h-[94%] w-[94%] m-1 rounded-xl shadow-lg border border-gray-300 justify-center">
            <div className="h-[49%] w-full flex justify-center">

              <div className="border border-gray-300 h-[98%] w-full m-1 mt-2 ml-2 flex">
                <iframe className="top-0 left-0 w-full h-full" title="map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=123.2024%2C9.4458%2C123.2224%2C9.4658&amp;layer=mapnik&amp;marker=9.4558%2C123.2124"
                  aria-hidden="false">
                </iframe>
              </div>

              <div className="border border-gray-300 h-[98%] w-full m-1 mt-2 ml-2 flex justify-center items-center">
                <Button>Upload Image (Optional)</Button>
              </div>
            </div>

            <div className="h-[49%] w-full flex justify-center">
              <div className="border border-gray-300 h-[98%] w-full m-1 mt-2 ml-2 flex justify-center items-center">

                <DialogDemo1/>

              </div>
              <div className="border border-gray-300 h-[98%] w-full m-1 mt-2 ml-2 flex justify-center items-center">
                <Button>Supply Amount</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createrequest;
