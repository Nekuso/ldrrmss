import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import BranchInput from "./branch-input";
import PaymentInput from "./payment-input";
import StatusInput from "./status-input";

import { DataTable as FoodSuppliesCart } from "./add-order-cart/products-cart/data-table";
import { DataTable as EquipmentsCart } from "./add-order-cart/parts-cart/data-table";
import { DataTable as VehiclesCart } from "./add-order-cart/vehicles-cart/data-table";

import { initiateColumns as initiateFoodSupplyCartColumns } from "./add-order-cart/products-cart/columns";
import { initiateColumns as initiateEquipmentsCartColumns } from "./add-order-cart/parts-cart/columns";
import { initiateColumns as initiateVehiclesCartColumns } from "./add-order-cart/vehicles-cart/columns";

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
import { use, useEffect, useState, useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useRequests } from "@/hooks/useOrders";
import { useSelector } from "react-redux";
import RequestCartOptions from "./add-order-table/lists";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/slices/orderCartSlice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import DiscountInput from "./discount-input";
import { TbCurrencyPeso } from "react-icons/tb";
import { useRouter } from "next/navigation";
import result from "postcss/lib/result";

export default function RequestForm({ setDialogOpen }: any) {
  const [isPending, startTransition] = useTransition();
  const { createRequest } = useRequests();
  const dispatch = useDispatch();
  const router = useRouter();

  const requestCart = useSelector((state: any) => state.requestCart);
  const requestCartOptions = useSelector(
    (state: any) => state.RequestCartOptionslice
  );

  const [minTotalPrice, setMinTotalPrice] = useState(0);

  const RequestSchema: any = z.object({
    requester_first_name: z.string().nullable(),
    requester_last_name: z.string().nullable(),
    requester_email: z.string().nullable(),
    requester_contact_number: z.coerce.number().nullable(),
    status: z.string(),
    payment_method: z
      .string()
      .min(1, { message: "Payment method is required" }),
    inventory_id: z
      .string()
      .min(1, { message: "Branch is required" })
      .transform((arg) => new Number(arg)),
    employee_id: z.string(),
    discount: z.string().transform((arg) => new Number(arg)),
    tax: z.coerce.number(),
    subtotal: z.coerce.number(),
    total_price: z.coerce.number(),
    amount_paid: z.coerce.number().min(minTotalPrice, {
      message: "Amount paid should be equal or greater than total price",
    }),

    use_equipments: z.array(
      z.object({
        equipment_id: z.coerce.number(),
        inventory_id: z.coerce.number(),
        name: z.string(),
        description: z.string(),
        image: z.string(),
        barcode: z.string(),
        brand_name: z.string(),
        quantity: z.coerce.number(),
        price: z.coerce.number(),
      })
    ),
    use_foodsupplies: z.array(
      z.object({
        foodsupplies_id: z.coerce.number(),
        inventory_id: z.coerce.number(),
        name: z.string(),
        description: z.string(),
        image: z.string(),
        barcode: z.string(),
        uom_name: z.string(),
        quantity: z.coerce.number(),
        price: z.coerce.number(),
      })
    ),
    use_vehicles: z.array(
      z.object({
        vehicles_id: z.coerce.number(),
        inventory_id: z.coerce.number(),
        name: z.string(),
        description: z.string(),
        image: z.string(),
        barcode: z.string(),
        uom_name: z.string(),
        quantity: z.coerce.number(),
        price: z.coerce.number(),
      })
    ),
  });
  const form = useForm<z.infer<typeof RequestSchema>>({
    resolver: zodResolver(RequestSchema),
    defaultValues: {
      requester_first_name: "",
      requester_last_name: "",
      requester_email: "",
      requester_contact_number: 0,
      employee_id: "",
      payment_method: "",
      subtotal: 0,
      total_price: 0,
      discount: "0",
      tax: 0,
    },
  });

  form.setValue("use_equipments", requestCart.equipmentsCart);
  form.setValue("use_foodsupplies", requestCart.foodsuppliesCart);
  form.setValue("use_vehicles", requestCart.vehiclesCart);
  form.setValue(
    "subtotal",
    (
      requestCart.equipmentsCart.reduce(
        (acc: any, equipment: any) =>
          acc + equipment.price * equipment.quantity,
        0
      ) +
      requestCart.foodsuppliesCart.reduce(
        (acc: any, foodsupply: any) =>
          acc + foodsupply.price * foodsupply.quantity,
        0
      ) +
      requestCart.vehiclesCart.reduce(
        (acc: any, vehicle: any) => acc + vehicle.price * vehicle.quantity,
        0
      )
    ).toFixed(3)
  );
  form.setValue(
    "total_price",
    (
      (requestCart.vehiclesCart.reduce(
        (acc: any, vehicles: any) => acc + vehicles.price * vehicles.quantity,
        0
      ) +
        requestCart.foodsuppliesCart.reduce(
          (acc: any, foodsupplies: any) =>
            acc + foodsupplies.price * foodsupplies.quantity,
          0
        ) +
        requestCart.equipmentsCart.reduce(
          (acc: any, equipment: any) =>
            acc + equipment.price * equipment.quantity,
          0
        )) *
      ((100 - Number(form.getValues("discount"))) / 100)
    )
      .toFixed(3)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const discountData = form.getValues("discount");

  useEffect(() => {
    setMinTotalPrice(
      Number(
        (
          requestCart.vehiclesCart.reduce(
            (acc: any, vehicle: any) => acc + vehicle.price * vehicle.quantity,
            0
          ) +
          (requestCart.foodsuppliesCart.reduce(
            (acc: any, foodsupply: any) =>
              acc + foodsupply.price * foodsupply.quantity,
            0
          ) +
            requestCart.equipmentsCart.reduce(
              (acc: any, equipment: any) =>
                acc + equipment.price * equipment.quantity,
              0
            )) *
            ((100 - Number(form.getValues("discount"))) / 100)
        ).toFixed(3)
      )
    );
  }, [
    requestCart.foodsuppliesCart,
    requestCart.equipmentsCart,
    requestCart.vehiclesCart,
    discountData,
    minTotalPrice,
    form,
  ]);

  async function onSubmit(data: any) {
    startTransition(async () => {
      const result = await createRequest(data, 500);

      const { error } = result;
      if (error?.message) {
        toast({
          variant: "destructive",
          title: "⚠️Error",
          description: error.message,
        });
        return;
      }

      setDialogOpen(false);
      sonner("✨Success", {
        description: `Request Successful!`,
        action: {
          label: "Print",
          onClick: () =>
            router.push(
              `/application/transactions/request/${result.data[0].id}`
            ),
        },
      });
      new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
        dispatch(resetCart());
      });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="w-full flex justify-between gap-4">
          <div className="w-[60%] 2xl:w-[50%] h-full rounded-lg overflow-hidden">
            <RequestCartOptions />
          </div>
          <ScrollArea className="w-full h-[553px] 2xl:h-[657px] flex flex-col justify-between bg-darkBg rounded-lg border border-lightBorder p-0 px-4 gap-0 relative">
            <div className="w-full h-full flex flex-col gap-6 justify-between relative">
              <Accordion
                type="multiple"
                className="w-full rounded-none relative"
                defaultValue={["item-0", "item-1", "item-2", "item-3"]}
              >
                <AccordionItem value="item-0">
                  <AccordionTrigger className="font-bold bg-darkBg sticky top-0">
                    requester
                  </AccordionTrigger>
                  <AccordionContent className="bg-darkComponentBg rounded-xl">
                    <div className="w-full flex flex-col gap-4 px-2">
                      <div className="w-full flex gap-4">
                        <div className="w-[75%] flex flex-col">
                          <FormField
                            control={form.control}
                            name="requester_first_name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  First Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="rounded-lg bg-lightComponentBg border-slate-600/50"
                                    {...field}
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-[75%] flex flex-col">
                          <FormField
                            control={form.control}
                            name="requester_last_name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Last Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="rounded-lg bg-lightComponentBg border-slate-600/50"
                                    {...field}
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <FormField
                            control={form.control}
                            name="requester_contact_number"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Contact Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="rounded-lg bg-lightComponentBg border-slate-600/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    {...field}
                                    accept="number"
                                    type="number"
                                    placeholder="#"
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="w-full flex gap-4">
                        <div className="w-[75%] flex flex-col ">
                          <FormField
                            control={form.control}
                            name="requester_email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    className="rounded-lg bg-lightComponentBg border-slate-600/50"
                                    {...field}
                                    type="text"
                                    placeholder="example@gmail.com"
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <FormField
                            control={form.control}
                            name="requester_email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">Email</FormLabel>
                                <BranchInput data={field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
                        </div>
                        <div className="w-full flex flex-col ">
                          {/* <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Status
                                </FormLabel>
                                <StatusInput data={field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
                        </div>
                        <div className="w-[75%] flex flex-col ">
                          {/* <FormField
                            control={form.control}
                            name="payment_method"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Payment
                                </FormLabel>
                                <PaymentInput data={field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          /> */}
                        </div>
                      </div>
                      {/* <div className="w-full flex gap-4">
                        <div className="w-[75%] flex flex-col">
                          <FormField
                            control={form.control}
                            name="requester_email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">Email</FormLabel>
                                <FormControl>
                                  <Input
                                    className="rounded-lg bg-lightComponentBg border-slate-600/50"
                                    {...field}
                                    type="text"
                                    placeholder="example@gmail.com"
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-[75%] flex flex-col ">
                          <FormField
                            control={form.control}
                            name="amount_paid"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Amount Paid
                                </FormLabel>
                                <div className="w-full flex place-items-center rounded-lg bg-lightComponentBg ">
                                  <div className="h-full px-3 bg-darkBg rounded-tl-lg rounded-bl-lg">
                                    <TbCurrencyPeso className="h-full w-5 text-center" />
                                  </div>
                                  <FormControl>
                                    <Input
                                      className="rounded-lg bg-lightComponentBg border-slate-600/50"
                                      {...field}
                                      type="number"
                                      placeholder="Amount"
                                      value={field.value || ""}
                                    />
                                  </FormControl>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full flex flex-col ">
                          <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs">
                                  Discount
                                </FormLabel>
                                <DiscountInput data={field} />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div> */}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold bg-darkBg sticky top-0">
                    Equipments Summary
                  </AccordionTrigger>
                  <AccordionContent className="bg-darkComponentBg rounded-xl">
                    <EquipmentsCart
                      columns={
                        requestCartOptions && requestCartOptions.equipmentsData
                          ? initiateEquipmentsCartColumns(
                              dispatch,
                              requestCartOptions.equipmentsData
                            )
                          : []
                      }
                      data={requestCart.equipmentsCart}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bold bg-darkBg sticky top-0">
                    Food Supply Summary
                  </AccordionTrigger>
                  <AccordionContent className="bg-darkComponentBg rounded-xl">
                    <FoodSuppliesCart
                      columns={
                        requestCartOptions &&
                        requestCartOptions.foodsuppliesData
                          ? initiateFoodSupplyCartColumns(
                              dispatch,
                              requestCartOptions.foodsuppliesData
                            )
                          : []
                      }
                      data={requestCart.foodsuppliesCart}
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bold bg-darkBg sticky top-0">
                    Vehicles Summary
                  </AccordionTrigger>
                  <AccordionContent className="bg-darkComponentBg rounded-xl">
                    <VehiclesCart
                      columns={
                        requestCartOptions && requestCartOptions.vehiclesData
                          ? initiateVehiclesCartColumns(
                              dispatch,
                              requestCartOptions.vehiclesData
                            )
                          : []
                      }
                      data={requestCart.vehiclesCart}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="w-full flex-col relative">
                <div className="w-full py-2 flex gap-8 position sticky bottom-[-4px] bg-darkBg m-0 text-sm">
                  <span className="w-full text-end text-slate-400">
                    Subtotal
                  </span>
                  <span className="w-[20%] text-end">{`₱ ${(
                    requestCart.foodsuppliesCart.reduce(
                      (acc: any, foodsupply: any) =>
                        acc + foodsupply.price * foodsupply.quantity,
                      0
                    ) +
                    requestCart.vehiclesCart.reduce(
                      (acc: any, vehicle: any) =>
                        acc + vehicle.price * vehicle.quantity,
                      0
                    ) +
                    requestCart.equipmentsCart.reduce(
                      (acc: any, equipment: any) =>
                        acc + equipment.price * equipment.quantity,
                      0
                    )
                  )
                    .toFixed(
                      // sum all the food_supplies and equipments
                      3
                    )
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>

                <div className="w-full py-2 flex gap-8 position sticky bottom-[-4px] bg-darkBg m-0 text-sm">
                  <span className="w-full text-end text-slate-400">Tax</span>
                  <span className="w-[20%] text-end">₱ 0.00</span>
                </div>
                <div className="w-full py-2 flex gap-8 position sticky bottom-[-4px] bg-darkBg m-0 text-sm">
                  <span className="w-full text-end text-slate-400">VAT</span>
                  <span className="w-[20%] text-end">₱ 0.00</span>
                </div>
                <div className="w-full py-2 flex gap-8 position sticky bottom-[-4px] bg-darkBg m-0 text-sm">
                  <span className="w-full text-end text-slate-400">
                    Discount{" "}
                    {Number(form.watch("discount")) > 0 &&
                      `(${form.getValues("discount")}%)`}
                  </span>
                  <span className="w-[20%] text-end">
                    {`- ₱ ${(
                      requestCart.foodsuppliesCart.reduce(
                        (acc: any, foodsupply: any) =>
                          acc + foodsupply.price * foodsupply.quantity,
                        0
                      ) +
                      (requestCart.vehiclesCart.reduce(
                        (acc: any, vehicle: any) =>
                          acc + vehicle.price * vehicle.quantity,
                        0
                      ) +
                        requestCart.equipmentsCart.reduce(
                          (acc: any, equipment: any) =>
                            acc + equipment.price * equipment.quantity,
                          0
                        )) *
                        (Number(form.getValues("discount")) / 100)
                    )
                      .toFixed(3)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                  </span>
                </div>
                <div className="w-full py-6 flex gap-8 position sticky bottom-[-4px] bg-darkBg m-0 text-lg font-bold">
                  <span className="w-full text-end">Total</span>
                  <span className="w-[20%] text-end">{`₱ ${(
                    requestCart.foodsuppliesCart.reduce(
                      (acc: any, foodsupply: any) =>
                        acc + foodsupply.price * foodsupply.quantity,
                      0
                    ) +
                    requestCart.vehiclesCart.reduce(
                      (acc: any, vehicle: any) =>
                        acc + vehicle.price * vehicle.quantity,
                      0
                    ) +
                    requestCart.equipmentsCart.reduce(
                      (acc: any, equipment: any) =>
                        acc + equipment.price * equipment.quantity,
                      0
                    )
                  )
                    .toFixed(
                      // sum all the food_supplies and equipments
                      3
                    )
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        <DialogFooter>
          <Button
            className="text-xs font-bold rounded-lg min-w-[105px] flex justify-center place-items-center gap-2 bg-primary/90 hover:bg-primary primary-glow transition-all duration-300"
            type="submit"
            disabled={
              requestCart.vehiclesCart.length === 0 &&
              requestCart.equipmentsCart.length === 0 &&
              requestCart.foodsuppliesCart.length === 0
                ? true
                : false
            }
          >
            <span className={cn({ hidden: isPending })}>Create Order</span>
            <AiOutlineLoading3Quarters
              className={cn(" animate-spin", { hidden: !isPending })}
            />
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
