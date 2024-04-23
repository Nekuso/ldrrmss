import { DataTable as EquipmentsDataTable } from "./inventory-table/parts-table/data-table";
import { DataTable as Food_suppliesDataTable } from "./inventory-table/products-table/data-table";
import { DataTable as VehiclesDataTable } from "./inventory-table/services-table/data-table";

import { initialState as initiateEquipmentsState } from "./inventory-table/parts-table/columns";
import { initialState as initiateFood_suppliesState } from "./inventory-table/products-table/columns";
import { initialState as initiateVehiclesState } from "./inventory-table/services-table/columns";

import {
  allEquipmentsDisplay,
  allFood_suppliesDisplay,
  allVehiclesDisplay,
} from "@/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiGearSixBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
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
      className="w-full flex max-w-[1840px] flex-col justify-center place-items-center gap-4"
    >
      <div className="w-full">
        <TabsList className="h-fit bg-darkComponentBg border border-lightBorder rounded-lg gap-2">
          <TabsTrigger
            value="food_supplies"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/60
            data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <BsBoxSeam />
            Food_supplies
          </TabsTrigger>
          <TabsTrigger
            value="equipments"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/80
            data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <PiGearSixBold />
            Equipments
          </TabsTrigger>
          <TabsTrigger
            value="vehicles"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/80
            data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <FaHandsHelping />
            Vehicles
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Food_supplies" className="w-full h-full ">
        {/* Products Tab */}
        <Food_suppliesDataTable
          columns={initiateFood_suppliesState()}
          data={dataFood_supplies}
        />
      </TabsContent>
      <TabsContent value="Equipments" className="w-full h-full ">
        {/* Parts Tab */}
        <EquipmentsDataTable
          columns={initiateEquipmentsState()}
          data={dataEquipments}
        />
      </TabsContent>
      <TabsContent value="Vehicles" className="w-full h-full">
        <VehiclesDataTable
          columns={initiateVehiclesState()}
          data={dataVehicles}
        />
      </TabsContent>
    </Tabs>
  );
}
