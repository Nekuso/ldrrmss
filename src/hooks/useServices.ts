import { createClient } from "@supabase/supabase-js";
import { create } from "domain";
import { get } from "http";
import { useState } from "react";

export const useVehicles: any = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const [vehiclesData, setVehiclesData] = useState<any>([]);
  const [currentVehicleData, setCurrentVehicleData] = useState<any>([]);

  const createVehicle = async (props: any, waitDuration?: any) => {
    const result = await supabase.from("vehicles").insert({
      name: props.name,
      description: props.description,
      image_url: props.image_url,
      duration: props.duration,
      status: props.status,
    });

    await new Promise((resolve) => setTimeout(resolve, waitDuration));

    return result;
  };
  const getVehicles = async () => {
    const result = await supabase
      .from("vehicles")
      .select(
        `
        id,
        name,
        description,
        image_url,
        status,
        created_at
    `
      )
      .order("created_at", { ascending: false });

    const { data, error } = result;
    if (error) {
      return error;
    }
    return setVehiclesData(data);
  };
  const getVehicle = async (id: string, duration?: number) => {
    const { data, error } = await supabase
      .from("vehicles")
      .select(
        `
        id,
        name,
        description,
        image_url,
        status,
        created_at
      `
      )
      .eq("id", id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    if (data?.length === 0) return true;
    return setCurrentVehicleData(data);
  };
  const updateVehicle = async (props: any, waitDuration?: number) => {
    const result = await supabase
      .from("vehicles")
      .update({
        name: props.name,
        description: props.description,
        image_url: props.image_url,
        status: props.status,
      })
      .eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, waitDuration));
    return result;
  };
  const updateVehicleStatus = async (props: any, duration?: number) => {
    const result = await supabase
      .from("vehicles")
      .update({
        status: props.status,
      })
      .eq("id", props.id);
    console.log(result);

    await new Promise((resolve) => setTimeout(resolve, duration));

    return JSON.stringify(result);
  };

  const deleteVehicle = async (props: any, duration: number = 2000) => {
    const result = await supabase.from("vehicles").delete().eq("id", props.id);

    await new Promise((resolve) => setTimeout(resolve, duration));
    return result;
  };

  return {
    // states
    vehiclesData,
    currentVehicleData,

    // methods
    createVehicle,
    getVehicle,
    getVehicles,
    updateVehicle,
    updateVehicleStatus,
    deleteVehicle,
  };
};
