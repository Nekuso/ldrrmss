import React from "react";
import EquipmentsPage from "./equipments/page";
import FoodSupplyPage from "./food_supply/page";
import VechilesPage from "./vehicles/page";
import { TabsDemo } from "./tabs-switcher";

export default function Page() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-[90%] h-fit bg-white bg-opacity-85 p-4 rounded-2xl">
        <TabsDemo />
      </div>
    </div>
  );
}
