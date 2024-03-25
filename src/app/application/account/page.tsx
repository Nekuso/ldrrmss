import React from "react";
import { TabsDemo } from "./tabss";

const Account: React.FC = () => {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit bg-white p-4 rounded-2xl flex flex-col justify-center items-center">
        <TabsDemo />
      </div>
    </div>
  );
};

export default Account;
