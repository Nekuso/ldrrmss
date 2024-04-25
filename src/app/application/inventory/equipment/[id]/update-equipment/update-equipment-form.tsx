import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { Textarea } from "@/components/ui/textarea";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { toast as sonner } from "sonner";
import ImageInput from "./image-input";
import { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useEquipments } from "@/hooks/useEquipments";

export const equipmentSchema = z.object({
  id: z.number(),
  name: z.string().min(1, {
    message: "Equipment name is required",
  }),
  description: z.string().min(1, {
    message: "Equipment description is required",
  }),
  image_url: z.string().default("something"),
  barcode: z.string().min(1, {
    message: "Equipment barcode is required",
  }),
  stock_quantity: z.coerce.number().min(1, {
    message: "Equipment quantity must be at least 1",
  }),
  status: z
    .string()
    .min(1, {
      message: "Equipment status is required",
    })
    .default("Available"),
});

export default function EquipmentForm({ setDialogOpen, equipment }: any) {
  const [isPending, startTransition] = useTransition();
  const { updateEquipment } = useEquipments();
  const form = useForm<z.infer<typeof equipmentSchema>>({
    resolver: zodResolver(equipmentSchema),
    defaultValues: {
      id: equipment.id,
      name: equipment.name,
      description: equipment.description,
      image_url: equipment.image_url,
      barcode: equipment.barcode,
      stock_quantity: equipment.stock_quantity,
      status: equipment.status,
    },
  });

  async function onSubmit(data: any) {
    startTransition(async () => {
      const result = await updateEquipment(data, 3000);

      const { error } = result;
      if (error?.message) {
        toast({
          variant: "destructive",
          title: "⚠️Error",
          description: error.message,
        });
        return;
      }

      sonner("UPDATED", {
        description: `equipment Updated!`,
      });
      setDialogOpen(false);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="w-full flex flex-col">
          <div className="w-full h-full flex flex-col gap-2">
            <div className="w-full flex justify-center place-items-center gap-4">
              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem className="h-fit">
                    <FormControl>
                      <ImageInput data={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Name</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-lg  border-slate-600/50"
                            {...field}
                            type="text"
                            placeholder="Equipment name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full flex gap-4">
                  {/* <div className="w-full ">
                    <FormField
                      control={form.control}
                      name="barcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Barcode</FormLabel>
                          <FormControl>
                            <Input
                              className="rounded-lg  border-slate-600/50"
                              {...field}
                              type="text"
                              placeholder="Enter Barcode"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div> */}
                  <div className="w-full flex flex-col">
                    <FormField
                      control={form.control}
                      name="stock_quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Quantity</FormLabel>
                          <div className="w-full flex justify-between place-items-center gap-2">
                            <div
                              className=" p-3 rounded-lg cursor-pointer group hover:bg-primary transition-all duration-300 text-center select-none border border-slate-600/50"
                              onClick={() => {
                                form.setValue(
                                  "stock_quantity",
                                  form.getValues("stock_quantity") - 10
                                );
                              }}
                            >
                              <FiMinus className="group-hover:text-white" />
                            </div>
                            <FormControl>
                              <Input
                                className="rounded-lg w-12 border-slate-600/50 text-center text-sm"
                                {...field}
                                type="number"
                                placeholder="0"
                              />
                            </FormControl>
                            <div
                              className=" p-3 rounded-lg cursor-pointer group hover:bg-primary transition-all duration-300 text-center select-none border border-slate-600/50"
                              onClick={() => {
                                form.setValue(
                                  "stock_quantity",
                                  form.getValues("stock_quantity") + 10
                                );
                              }}
                            >
                              <IoMdAdd className="group-hover:text-white" />
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Description</FormLabel>
                    <Textarea
                      className=" border-slate-600/50 w-full h-full resize-none"
                      placeholder="Description"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="text-xs font-bold rounded-lg min-w-[105px] flex justify-center place-items-center gap-2 bg-primary/90 hover:bg-primary primary-glow transition-all duration-300"
            type="submit"
          >
            <span className={cn({ hidden: isPending })}>Create Equipment</span>
            <AiOutlineLoading3Quarters
              className={cn(" animate-spin", { hidden: !isPending })}
            />
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
