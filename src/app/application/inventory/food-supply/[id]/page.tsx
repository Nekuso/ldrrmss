/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Loading from "./skeleton";
import Food_supplyContent from "./product-content";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { useFoodSupplies } from "@/hooks/useFoodSupplies";
import { useUOMS } from "@/hooks/useUOMS";
import FoodSupplyNotFound from "./not-found";

export default function Food_supply({ params }: { params: any }) {
  const { getFood_supply, currentFood_supplyData } = useFoodSupplies();
  const { getUOMS, allUOMSData } = useUOMS();
  const [error, setError] = useState(false);

  useEffect(() => {
    const initialFetch = async () => {
      const result = await getFood_supply(params.id, 2000);
      if (result) setError(result);
      getUOMS();
    };

    initialFetch();
  }, []);

  useEffect(() => {
    if (!error) {
      const supabase = createSupabaseBrowserClient();
      const subscribedChannel = supabase
        .channel("food_supply-follow-up")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "food_supplies" },
          (payload: any) => {
            getFood_supply(params.id, 0);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscribedChannel);
      };
    }
  }, []);

  return (
    <div className="w-full flex justify-center place-items-center">
      {error ? (
        <FoodSupplyNotFound />
      ) : currentFood_supplyData.length === 0 ? (
        <Loading />
      ) : (
        <Food_supplyContent
          params={params}
          food_supply={currentFood_supplyData}
          uoms={allUOMSData}
        />
      )}
    </div>
  );
}
