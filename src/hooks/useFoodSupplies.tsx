import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export const useFoodSupplies: any = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const [allFoodSupplies, setAllFoodSupplies] = useState<any>([]);
  const [currentFoodSupplyData, setCurrentFoodSupplyData] = useState<any>([]);

  const createFoodSupply = async (props: any, duration?: any) => {
    const result = await supabase.from("food_supplies").insert({
      name: props.name,
      description: props.description,
      image_url: props.image_url,
      stock_quantity: props.stock_quantity,
      price: props.price,
      barcode: props.barcode,
      status: props.status,
    });

    await new Promise((resolve) => setTimeout(resolve, duration));

    return result;
  };
  const getFoodSupplies = async () => {
    const result = await supabase
      .from("food_supplies")
      .select(
        `
          id,
          name,
          description,
          image_url,
          stock_quantity,
          barcode,
          status,
          created_at
        `
      )
      .order("created_at", { ascending: false });

    const { data, error } = result;
    if (error) {
      return error;
    }
    return setAllFoodSupplies(data);
  };
  const getFoodSupply = async (id: string, duration?: number) => {
    const { data, error } = await supabase
      .from("food_supplies")
      .select(
        `
        id,
        name,
        description,
        image_url,
        stock_quantity,
        barcode,
        status,
        created_at
      `
      )
      .eq("id", id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    if (data?.length === 0) return true;
    return setCurrentFoodSupplyData(data);
  };
  const updateFoodSupply = async (props: any, duration?: number) => {
    const result = await supabase
      .from("food_supplies")
      .update({
        name: props.name,
        description: props.description,
        image_url: props.image_url,
        barcode: props.barcode,
        stock_quantity: props.stock_quantity,
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };
  const updateFoodSupplyStatus = async (props: any, duration?: number) => {
    const result = await supabase
      .from("food_supplies")
      .update({
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));

    return JSON.stringify(result);
  };
  const deleteFoodSupply = async (props: any, duration: number = 2000) => {
    const result = await supabase
      .from("food_supplies")
      .delete()
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };

  return {
    // states
    allFoodSupplies,
    currentFoodSupplyData,

    // methods
    createFoodSupply,
    getFoodSupply,
    getFoodSupplies,
    updateFoodSupply,
    updateFoodSupplyStatus,
    deleteFoodSupply,
  };
};
