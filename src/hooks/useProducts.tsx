import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export const useFood_supplies: any = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const [food_suppliesData, setFood_suppliesData] = useState<any>([]);
  const [currentFood_supplyData, setCurrentFood_supplyData] = useState<any>([]);

  const createFood_supply = async (props: any, duration?: any) => {
    const result = await supabase.from("food_supplies").insert({
      name: props.name,
      description: props.description,
      image_url: props.image_url,
      stock_quantity: props.stock_quantity,
      uom_id: props.uom_id,
      price: props.price,
      inventory_id: props.inventory_id,
      barcode: props.barcode,
      status: props.status,
    });

    await new Promise((resolve) => setTimeout(resolve, duration));

    return result;
  };
  const getFood_supplies = async () => {
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
    return setFood_suppliesData(data);
  };
  const getFood_supply = async (id: string, duration?: number) => {
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
    return setCurrentFood_supplyData(data);
  };
  const updateFood_supplly = async (props: any, duration?: number) => {
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
  const updateFood_supplyStatus = async (props: any, duration?: number) => {
    const result = await supabase
      .from("food_supplies")
      .update({
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));

    return JSON.stringify(result);
  };
  const deleteFood_supply = async (props: any, duration: number = 2000) => {
    const result = await supabase
      .from("food_supplies")
      .delete()
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };

  return {
    // states
    food_suppliesData,
    currentFood_supplyData,

    // methods
    createFood_supply,
    getFood_supply,
    getFood_supplies,
    updateFood_supplly,
    updateFood_supplyStatus,
    deleteFood_supply,
  };
};
