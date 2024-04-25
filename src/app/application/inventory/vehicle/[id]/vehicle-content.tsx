import UpdateVehicleButton from "./update-vehicle/update-vehicle-dialog";
import DeleteVehicleButton from "./delete-vehicle/delete-vehicle-dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { Barcode } from "lucide-react";

export default function VehicleContent({ vehicle }: any) {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex max-w-[1840px] justify-center place-items-center">
      <div className="w-[1000px] 2xl:w-[1200px] h-[600px] 2xl:h-[680px] flex justify-center rounded-xl gap-4">
        <div className="w-[750px] 2xl:w-[950px] h-full p-6 bg-darkComponentBg flex flex-col justify-between gap-2 2xl:gap-4 rounded-xl shadow-lg border border-lightBorder relative bg-white">
          <span className="relative flex shrink-0 overflow-hidden w-full h-[80%] z-0 rounded-md">
            <span className="flex h-full w-full items-center justify-center bg-darkBg rounded-md">
              No Image
            </span>
          </span>
          {/* <div className="w-full max-w-full flex place-items-center gap-4">
            <Barcode
              value={
                vehicle[0].plate_number
                  ? vehicle[0].plate_number
                  : "No plate number"
              }
              displayValue={vehicle[0].plate_number ? false : true}
              background="transparent"
              lineColor="white"
              width={2.8}
              height={50}
              margin={0}
            />
            <div className="w-full flex justify-between">
              {vehicle[0].plate_number.split("").map((item: any, i: any) => {
                return (
                  <h2 key={i} className="text-lg 2xl:text-2xl font-bold">
                    {item}
                  </h2>
                );
              })}
            </div>
          </div>{" "} */}
        </div>
        <div className="w-full h-full p-8 bg-darkComponentBg flex flex-col gap-5 2xl:gap-7 rounded-xl shadow-lg border border-lightBorder bg-white">
          <div className="w-ful flex flex-col">
            <h2 className="flex text-lg 2xl:text-2xl font-bold place-items-center gap-3">
              {vehicle[0].name}
              <div
                className={cn(
                  "text-xs rounded-full py-1 px-2 border font-normal flex place-items-center gap-1 cursor-pointer",
                  vehicle[0].status === "Available"
                    ? "text-green-500 bg-green-500 bg-opacity-20 border-green-500"
                    : vehicle[0].status === "Unavailable"
                    ? "text-red-500 bg-red-500 bg-opacity-20 border-red-500"
                    : "text-red-500 bg-red-500 bg-opacity-20 border-red-500"
                )}
              >
                {vehicle[0].status}
              </div>
            </h2>
            <p className="text-sm 2xl:text-md text-slate-400 font-bold">
              Type: vehicle
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-2 2xl:gap-4">
            <div className="w-full flex gap-4">
              <div className="w-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600 flex justify-center place-items-center w-fit gap-1">
                  Plate_number
                </span>
                <div className="w-full flex justify-between place-items-center min-w-0  bg-lightBorder rounded-lg">
                  <p className="text-md 2xl:text-lg text-black gap-2 max-w-[260px] p-3 truncate">
                    {vehicle[0].plate_number}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600 flex justify-center place-items-center w-fit gap-1">
                  Created At
                </span>
                <div className="w-full flex justify-between place-items-center min-w-0 bg-lightBorder rounded-lg">
                  <p className="text-md 2xl:text-lg text-black gap-2 p-3 max-w-[260px] truncate">
                    {vehicle[0].created_at}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex gap-7">
              <div className="w-full h-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600 flex justify-center place-items-center w-fit gap-1">
                  Description
                </span>
                <div className="w-full h-full min-w-0 bg-gray-200 rounded-lg p-3">
                  <p className="text-md 2xl:text-lg text-black line-clamp-4">
                    {vehicle[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 justify-end">
            <DeleteVehicleButton vehicleData={vehicle[0]} />
            <UpdateVehicleButton vehicleData={vehicle[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
