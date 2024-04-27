/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import Loading from "./skeleton";
import TransactionsContent from "./transactions-content";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { toast as sonner } from "sonner";
import { toast } from "@/components/ui/use-toast";
import { useOrders } from "@/hooks/useOrders";
import { HomeIcon } from "lucide-react";
import { setBranchesData } from "@/redux/slices/branchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEquipments } from "@/hooks/useEquipments";
import { useFoodSupplies } from "@/hooks/useFoodSupplies";
import {
  setEquipmentsData,
  setFoodSuppliesData,
} from "@/redux/slices/orderCartOptionSlice";

export default function Transactions() {
  const dispatch = useDispatch();

  const { getOrders, ordersData } = useOrders();
  // const { getBranches, allBranchesData } = useBranches();
  // const { getProducts, productsData } = useProducts();
  const { getEquipments, equipmentsData } = useEquipments();
  const { getFoodSupplies, foodsuppliesData } = useFoodSupplies();
  // const branchesData = allBranchesData.map((branch: any) => ({
  //   id: branch?.id,
  //   value: branch?.branch_name,
  //   label: branch?.branch_name,
  //   icon: HomeIcon,
  // }));

  const foodsuppliesCart = useSelector(
    (state: any) => state.orderCart.foodsuppliesCart
  );
  const equipmentsCart = useSelector(
    (state: any) => state.orderCart.equipmentsCart
  );

  // dispatch(setBranchesData(branchesData));

  dispatch(setFoodSuppliesData({ foodsuppliesData, foodsuppliesCart }));
  dispatch(setEquipmentsData({ equipmentsData, equipmentsCart }));

  // fetch all products
  useEffect(() => {
    const { error } = getOrders();

    if (error?.message) {
      toast({
        variant: "destructive",
        title: "⚠️ Error",
        description: error.message,
      });
    }
    // getBranches();
    getFoodSupplies();
    getEquipments();
  }, []);

  // listen for changes in the database
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const subscribedChannel1 = supabase
      .channel("orders-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "orders" },
        (payload: any) => {
          getOrders();
        }
      )
      .subscribe();
    const subscribedChannel2 = supabase
      .channel("products-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload: any) => {
          getFoodSupplies();
          getOrders();
        }
      )
      .subscribe();
    const subscribedChannel3 = supabase
      .channel("parts-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "parts" },
        (payload: any) => {
          getEquipments();
          getOrders();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(subscribedChannel1);
      supabase.removeChannel(subscribedChannel2);
      supabase.removeChannel(subscribedChannel3);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-3.5 no-scrollbar ">
      {ordersData.length === 0 ? (
        <Loading />
      ) : (
        <TransactionsContent dataOrders={ordersData} />
      )}
    </div>
  );
}
