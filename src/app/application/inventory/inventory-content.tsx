import { DataTable as EquipmentsDataTable } from "./inventory-table/equipments-table/data-table";
import { DataTable as Food_suppliesDataTable } from "./inventory-table/food-supplies-table/data-table";
import { DataTable as VehiclesDataTable } from "./inventory-table/vehicles-table/data-table";

import { initialState as initiateEquipmentsState } from "./inventory-table/equipments-table/columns";
import { initialState as initiateFood_suppliesState } from "./inventory-table/food-supplies-table/columns";
import { initialState as initiateVehiclesState } from "./inventory-table/vehicles-table/columns";

import {
  allEquipmentsDisplay,
  allFood_suppliesDisplay,
  allVehiclesDisplay,
} from "@/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiGearSixBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import {
  FaAmbulance,
  FaHandsHelping,
  FaToolbox,
  FaTools,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function InventoryContent({
  dataEquipments,
  dataFood_supplies,
  dataVehicles,
}: {
  dataEquipments: allEquipmentsDisplay[];
  dataFood_supplies: allFood_suppliesDisplay[];
  dataVehicles: allVehiclesDisplay[];
}) {
  // const branchesSlice = useSelector((state: any) => state.branches);
  // const uomsSlice = useSelector((state: any) => state.uoms);
  // const brandsSlice = useSelector((state: any) => state.brands);

  return (
    <Tabs
      defaultValue="food_supplies"
      className="w-full flex max-w-[1840px] flex-col justify-center place-items-center gap-4 "
    >
      <div className="w-full">
        <TabsList className="h-fit bg-darkComponentBg border border-gray-800 rounded-lg gap-2 bg-white">
          <TabsTrigger
            value="food_supplies"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/60
            data-[state=active]:text-black rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <BsBoxSeam />
            Food_supplies
          </TabsTrigger>
          <TabsTrigger
            value="equipments"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/80
            data-[state=active]:text-black rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <FaToolbox />
            Equipments
          </TabsTrigger>
          <TabsTrigger
            value="vehicles"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/80
            data-[state=active]:text-black rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <FaAmbulance />
            Vehicles
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="food_supplies" className="w-full h-full ">
        {/* Products Tab */}
        <Food_suppliesDataTable
          columns={initiateFood_suppliesState()}
          data={dataFood_supplies}
        />
      </TabsContent>
      <TabsContent value="equipments" className="w-full h-full ">
        {/* Parts Tab */}
        <EquipmentsDataTable
          columns={initiateEquipmentsState()}
          data={dataEquipments}
        />
      </TabsContent>
      <TabsContent value="vehicles" className="w-full h-full">
        <VehiclesDataTable
          columns={initiateVehiclesState()}
          data={dataVehicles}
        />
      </TabsContent>
    </Tabs>
  );
}
