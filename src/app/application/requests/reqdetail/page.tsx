import React from "react";
import { DialogDemoRequest } from "./compliances";
import { Button } from "@/components/ui/button";

const Reqdetails: React.FC = () => {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit bg-white p-4 rounded-2xl flex flex-row justify-center">
        <div className="w-[25%] col-span-4 sm:col-span-3 flex flex-col items-center">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d08ceb1-9f64-4b08-8d07-7eb0e1f357d5/d21zjkx-16c2f982-d552-49bf-9739-5618a4180959.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkMDhjZWIxLTlmNjQtNGIwOC04ZDA3LTdlYjBlMWYzNTdkNVwvZDIxempreC0xNmMyZjk4Mi1kNTUyLTQ5YmYtOTczOS01NjE4YTQxODA5NTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TpMHVsKbF01uBFBqeBc_tsl5nVPIWNscJrATaoNK4Z0"
            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          ></img>
          <h1 className="text-xl font-bold">Flap Jack</h1>

          <div className="my-6 border-t border-gray-300">
            <h1 className="text-gray-700 uppercase font-bold tracking-wider mb-2">
              User information
            </h1>

            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Email :
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>Candyisland20@gmail.com</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Phone Number:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>09659764338</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Date of birth:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>March, 18th, 2002</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Address:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>Amlan, ambot asa</i>
            </p>

            <span className="border border-gray-300 w-full col-span-4 sm:col-span-3 flex flex-col mb-1"></span>

            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Request Number:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>RN-0001</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Request Type:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>Flood</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Request Sent:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>March, 16th, 2024</i>
            </p>
            <h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">
              Status:
            </h2>
            <p className="mb-2 text-sm text-[12px]">
              <i>Undetermined</i>
            </p>
            <div className="flex justify-center items-center">
              <DialogDemoRequest />
            </div>
          </div>
        </div>

        <div className="w-[94%] justify-center">
          <div className="h-[49%] w-full flex justify-center mb-2">
            <iframe
              className="w-full h-full border border-slate-200 mr-2"
              src="https://www.openstreetmap.org/export/embed.html?bbox=123.2024%2C9.4458%2C123.2224%2C9.4658&amp;layer=mapnik&amp;marker=9.4558%2C123.2124"
              aria-hidden="false"
            ></iframe>

            <img
              src="https://media.sciencephoto.com/c0/42/67/06/c0426706-800px-wm.jpg"
              alt="Description of the image"
              className="w-full h-full  borderborder-slate-200"
            />
          </div>

          <div className="h-[49%] w-full flex justify-center">
            <div className="w-full h-full border border-slate-200 mr-2">
              <h1 className="text-gray-700 uppercase font-bold tracking-wider mb-3 text-center">
                User provided information
              </h1>
              <p className="text-sm text-[12px] font-bold ml-2">
                <i>Affected individuals: 12</i>
              </p>
              <p className="mb-4 text-sm text-[12px] font-bold ml-2">
                <i>Time of incident: 3:00 AM</i>
              </p>
              <p className="text-sm text-[12px] font-bold ml-2">
                <i>User Statement:</i>
              </p>
              <p className="mb-2 text-sm text-[12px] ml-2">
                <i>
                  We urgently seek assistance due to the flood, we are having a
                  hard time taking shelter.
                </i>
              </p>
            </div>

            <div className="w-full h-full border border-slate-200 flex justify-center items-center">
              <Button>Supply Amount</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reqdetails;
