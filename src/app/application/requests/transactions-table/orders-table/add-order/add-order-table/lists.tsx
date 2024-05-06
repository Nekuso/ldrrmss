import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiGearSixBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { DataTable as FoodSuppliesOptionsDataTable } from "./products-options/data-table";
import { DataTable as EquipmentsOptionsDataTable } from "./parts-options/data-table";
import { initiateColumns as initiateFoodSuppliesColumns } from "./products-options/columns";
import { initiateColumns as initiateEquipmentsColumns } from "./parts-options/columns";
import { useSelector, useDispatch } from "react-redux";
import { FaToolbox } from "react-icons/fa";

export default function RequestCartOptions({}: {}) {
  const foodsuppliesOption = useSelector(
    (state: any) => state.requestCartOptionSlice.foodsuppliesData
  );
  const equipmentsOption = useSelector(
    (state: any) => state.requestCartOptionSlice.equipmentsData
  );

  const foodsuppliesCart = useSelector(
    (state: any) => state.requestCart.foodsuppliesCart
  );
  const equipmentsCart = useSelector(
    (state: any) => state.requestCart.equipmentsCart
  );

  const dispatch = useDispatch();

  return (
    <Tabs
      defaultValue="equipments"
      className="w-full h-full flex max-w-[1840px] flex-col justify-center place-items-center gap-2"
    >
      <div className="w-full flex justify-between">
        <TabsList className="h-fit bg-darkBg border border-lightBorder rounded-lg gap-2">
          <TabsTrigger
            value="equipments"
            className="data-[state=active]:bg- data-[state=inactive]:hover:bg-/80
            data-[state=inactive]:hover:text-slate-500
            data-[state=active]:text-white data-[state=active]:bg-primary rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <FaToolbox />
            Equipments
          </TabsTrigger>
          <TabsTrigger
            value="food_supplies"
            className="data-[state=active]:bg- data-[state=inactive]:hover:bg-/80
            data-[state=inactive]:hover:text-slate-500
            data-[state=active]:text-white data-[state=active]:bg-primary rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <BsBoxSeam />
            Food Supply
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        value="food_supplies"
        className="w-full h-full bg-darkBg border border-lightBorder rounded-xl max-h-[500px] min-h-[500px] 2xl:max-h-[600px] 2xl:min-h-[600px]"
      >
        <FoodSuppliesOptionsDataTable
          columns={initiateFoodSuppliesColumns(dispatch, foodsuppliesCart)}
          data={foodsuppliesOption}
        />
      </TabsContent>
      <TabsContent
        value="equipments"
        className="w-full h-full bg-darkBg border border-lightBorder rounded-xl max-h-[500px] min-h-[500px] 2xl:max-h-[600px] 2xl:min-h-[600px]"
      >
        <EquipmentsOptionsDataTable
          columns={initiateEquipmentsColumns(dispatch, equipmentsCart)}
          data={equipmentsOption}
        />
      </TabsContent>
    </Tabs>
  );
}
