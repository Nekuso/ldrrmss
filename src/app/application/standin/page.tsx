import React from "react";
export default function Page() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit bg-white p-4 rounded-2xl">
        <div className="w-full h-full flex max-w-[1840px] max-h-[900px] justify-center place-items-center gap-7">
          <div className="w-full h-full flex flex-col gap-7 rounded-xl">
            <div className="w-full h-full flex flex-col gap-2 justify-around place-items-center bg-darkComponentBg rounded-xl shadow-lg border border-lightBorder overflow-hidden p-6"></div>
          </div>
          <div className="w-[35%] 2xl:w-[30%] h-full flex flex-col gap-7">
            <div className="w-full h-full flex flex-col gap-2 justify-around place-items-center bg-darkComponentBg rounded-xl shadow-lg border border-lightBorder overflow-hidden p-6"></div>
            <div className="w-full h-full flex flex-col gap-2 justify-around place-items-center bg-darkComponentBg rounded-xl shadow-lg border border-lightBorder overflow-hidden p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
