import { Button } from "@/components/ui/button";
import React from "react";
export default function Page() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit rounded-2xl">
        <div className="w-full h-full flex max-w-[1840px] max-h-[900px] justify-center place-items-center gap-7">
          <div className="w-full h-full flex gap-7 rounded-xl">
            <div className="w-full h-full flex flex-col gap-2 justify-around bg-white bg-darkComponentBg rounded-2xl shadow-lg border border-lightBorder overflow-hidden p-6">
              <div className="font-bold py-1">
                <h1>General Information</h1>
              </div>
              <div className="w-full flex flex-row gap-7">
                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    First name
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      Terrence
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Last name
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      Dante
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Birthday
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      25/02/2001
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-7">
                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Contact number
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      +63-9659084228
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Email
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      dante@gmail.com
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Gender
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      Homophobic
                    </p>
                  </div>
                </div>
              </div>
              <div className="font-bold py-4">
                <h1>Worker Information</h1>
              </div>
              <div className="w-full flex flex-row gap-7">
                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Address
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      Talay, Dumaguete City, 6200
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Work position
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      Admin
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-xs 2xl:text-md font-semibold text-gray-400 flex justify-center place-items-center w-fit gap-1">
                    Added at
                  </span>
                  <div className="w-full min-w-0 bg-gray-700 rounded-lg">
                    <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
                      01/01/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="justify-center text-center w-full space-x-1 space-y-4">
                <Button>Update</Button>
                <Button>Delete</Button>
              </div>
            </div>
            <div className="w-[35%] 2xl:w-[30%] h-full flex flex-col gap-7">
              <div className="w-full h-full flex flex-col gap-2 justify-around bg-white place-items-center bg-darkComponentBg rounded-2xl shadow-lg border border-lightBorder overflow-hidden p-6">
                Profile
              </div>
              <div className="w-full h-full flex flex-col gap-2 justify-around bg-white place-items-center bg-darkComponentBg rounded-2xl shadow-lg border border-lightBorder overflow-hidden p-6">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
