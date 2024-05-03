import { DataTable as RequestVehiclesDataTable } from "./transactions-table/service-orders-table/data-table";
import { DataTable as RequestsDataTable } from "./transactions-table/orders-table/data-table";

import { initialState as initiateRequestsState } from "./transactions-table/orders-table/columns";
import { initialState as initiateEquipmentsState } from "./transactions-table/service-orders-table/columns";

import { allPurchaseRequestsDisplay } from "@/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiGearSixBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function TransactionsContent({
  dataRequests,
}: {
  dataRequests: allPurchaseRequestsDisplay[];
}) {
  const branchesSlice = useSelector((state: any) => state.branches);

  function initiateVehiclesState(
    branchesSlice: any
  ): import("@tanstack/table-core").ColumnDef<never, unknown>[] {
    throw new Error("Function not implemented.");
  }

  return (
    <Tabs
      defaultValue="requests"
      className="w-full flex max-w-[1840px] flex-col justify-center place-items-center gap-4"
    >
      <div className="w-full flex justify-between">
        <TabsList className="h-fit bg-darkComponentBg border border-lightBorder rounded-lg gap-2">
          <TabsTrigger
            value="requests"
            className="data-[state=active]:bg-applicationPrimary data-[state=inactive]:hover:bg-applicationPrimary/80
            data-[state=inactive]:hover:text-white/60
            data-[state=active]:text-white rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <BsBoxSeam />
            Requests
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="requests" className="w-full h-full ">
        {/* Regular Orders Tab */}
        <RequestsDataTable
          columns={initiateRequestsState(branchesSlice)}
          data={dataRequests}
        />
      </TabsContent>
    </Tabs>
  );
}
