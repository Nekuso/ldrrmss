/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { format } from "date-fns";
import UpdateRequestStatusButton from "./update-order-status/update-order-status-dialog";
import Barcode from "react-barcode";
import { toast } from "sonner";
import { MdOutlineReceiptLong } from "react-icons/md";

import { DataTable as FoodSupplyRequests } from "./order-tables/product-orders/data-table";
import { DataTable as EquipmentRequest } from "./order-tables/part-orders/data-table";
import { DataTable as VehicleRequest } from "./order-tables/vehicle-orders/data-table";
import { initiateColumns as initiateFoodSupplyRequestsColumns } from "./order-tables/product-orders/columns";
import { initiateColumns as initiateEquipmentRequestsColumns } from "./order-tables/part-orders/columns";
import { initiateColumns as initiateVehiclesRequestsColumns } from "./order-tables/vehicle-orders/columns";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import recieptLogo from "@/images/receipt-logo.svg";
import { FiBox } from "react-icons/fi";
import { SiTemporal } from "react-icons/si";
import { BsBoxes } from "react-icons/bs";
import { cn } from "@/lib/utils";

export default function RequestContent({ request }: any) {
  // const contentToPrint = useRef(null);
  // const handlePrint = useReactToPrint({
  //   documentTitle: "Print This Document",
  //   onBeforePrint: () => {
  //     toast("🔔 Notification", {
  //       description: "Printing...",
  //     });
  //   },
  //   onAfterPrint: () => console.log("after printing..."),
  //   removeAfterPrint: true,
  // });

  // useEffect(() => {
  //   handlePrint(null, () => contentToPrint.current);
  // }, []);

  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex max-w-[1840px] justify-center place-items-start gap-4 ">
      <ScrollArea className="w-[650px] 2xl:w-[55%] h-[720px] 2xl:h-[838px] px-8 pt-4 pb-8  bg-darkComponentBg rounded-xl border border-lightBorder shadow-lg gap-0 relative bg-white">
        <Accordion
          type="multiple"
          className="w-full rounded-none relative"
          defaultValue={["item-2", "item-3", "item-4"]}
        >
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold sticky top-0">
              Use FoodSupply
            </AccordionTrigger>
            <AccordionContent className="rounded-xl">
              {request && request.length > 0 && (
                <FoodSupplyRequests
                  columns={initiateFoodSupplyRequestsColumns()}
                  data={request[0].use_foodsupplies}
                />
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold sticky top-0">
              Use Equipment
            </AccordionTrigger>
            <AccordionContent className="bg-darkComponentBg rounded-xl">
              {request && request.length > 0 && (
                <EquipmentRequest
                  columns={initiateEquipmentRequestsColumns()}
                  data={request[0].use_equipments}
                />
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold sticky top-0">
              Use Vehicles
            </AccordionTrigger>
            <AccordionContent className="bg-darkComponentBg rounded-xl">
              {request && request.length > 0 && (
                <VehicleRequest
                  columns={initiateVehiclesRequestsColumns()}
                  data={request[0].use_vehicles}
                />
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
      <div className="w-[30%] 2xl:w-[25%] min-h-[600px] 2xl:min-h-[680px] flex flex-col gap-4 ">
        <div className="w-full h-full 2xl:min-h-[680px] p-8 bg-darkComponentBg flex flex-col gap-5 2xl:gap-7 rounded-xl shadow-lg border border-lightBorder bg-white">
          <div className="flex flex-col justify-between gap-2">
            <div className="w-full flex justify-between">
              <h2 className="text-xl font-bold">Request Details</h2>
              {request && request.length > 0 && (
                <UpdateRequestStatusButton requestData={request[0]} />
              )}
            </div>
            {request && request.length > 0 && (
              <p className="text-xs 2xl:text-sm text-gray-600">
                Request ID: {request[0].id}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-xs 2xl:text-sm text-gray-600">
                requester Name
              </p>
              {request && request.length > 0 && (
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {request[0].requester_first_name}{" "}
                  {request[0].requester_last_name}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-xs 2xl:text-sm text-gray-600">
                Contact Number
              </p>
              {request && request.length > 0 && (
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {request[0].requester_contact_number}
                </p>
              )}
            </div>
            {request && request.length > 0 && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">Email</p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {request[0].requester_email}
                </p>
              </div>
            )}

            {request && request.length > 0 && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">Status</p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {request[0].status}
                </p>
              </div>
            )}

            {request && request.length > 0 && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">Staff</p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {request[0].employees.first_name}
                </p>
              </div>
            )}

            {request && request.length > 0 && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">Created At</p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {format(new Date(request[0].created_at), "PPPP")}
                </p>
              </div>
            )}
          </div>
          <Separator className="bg-slate-400" />
          <div className="flex flex-col gap-3">
            {request && request.length > 0 && request[0].use_foodsupplies && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">
                  foodsupplies Total
                </p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {" "}
                  {request[0].use_foodsupplies
                    .reduce((acc: any, item: any) => acc + item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
            )}

            {request && request.length > 0 && request[0].use_equipments && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">
                  equipments Total
                </p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  {" "}
                  {request[0].use_equipments
                    .reduce((acc: any, item: any) => acc + item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
            )}

            {request && request.length > 0 && request[0].discount && (
              <div className="flex justify-between">
                <p className="text-xs 2xl:text-sm text-gray-600">
                  Discount ({request[0].discount}%)
                </p>
                <p className="text-xs 2xl:text-sm text-slate-50">
                  -{" "}
                  {(
                    (request[0].use_foodsupplies.reduce(
                      (acc: any, item: any) => acc + item.quantity,
                      0
                    ) +
                      request[0].use_equipments.reduce(
                        (acc: any, item: any) => acc + item.quantity,
                        0
                      )) *
                    (request[0].discount / 100)
                  ).toFixed(2)}
                </p>
              </div>
            )}
          </div>

          <Separator className="bg-slate-400 " />
          <div className="flex flex-col gap-3">
            {request && request[0] && (
              <>
                <div className="flex justify-between">
                  <p className="text-xs 2xl:text-sm text-gray-600">Total</p>
                  <p className="text-md 2xl:text-lg text-slate-50 font-bold">
                    {request[0].total_price.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs 2xl:text-sm text-gray-600">
                    Amount Paid
                  </p>
                  <p className="text-xs 2xl:text-sm text-slate-50">
                    - {request[0].amount_paid.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs 2xl:text-sm text-gray-600">Change</p>
                  <p className="text-xs 2xl:text-sm text-slate-50">
                    {" "}
                    {(request[0].amount_paid - request[0].total_price).toFixed(
                      2
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="w-full max-w-full flex flex-col place-items-center gap-4">
            {request && request[0] && (
              <Barcode
                value={request[0].id ? request[0].id : "No Barcode"}
                displayValue={false}
                background="transparent"
                lineColor="white"
                width={1}
                height={70}
                margin={0}
                renderer="img"
              />
            )}
          </div>
        </div>
        {/* <Button
          className="bg-applicationPrimary hover:bg-applicationPrimary/70 flex gap-1 shadow-lg"
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
        >
          <MdOutlineReceiptLong />
          Print
        </Button> */}
      </div>
      <div style={{ display: "none" }}>
        <div
          className="w-full min-h-[600px] 2xl:min-h-[680px] flex flex-col place-items-center"
          // ref={contentToPrint}
        >
          {/* <div className="w-full flex flex-col gap-0.5 justify-center place-items-center py-2">
            <img src={recieptLogo.src} alt="logo" className="mb-2" />
            <p className="w-full text-center text-[8px] font-semibold text-black space-mono-regular tracking-tighter">
              {`${request[0].inventory.branches.branch_location}`}
            </p>
            <p className="w-full text-center text-[8px] font-semibold text-black space-mono-regular tracking-tighter">
              {`${request[0].inventory.branches.contact_number}`}
            </p>
          </div> */}

          <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-col gap-1">
              {request && request[0] && (
                <>
                  <div className="flex flex-col justify-between gap-1">
                    <h2 className="flex gap-1 place-items-center text-sm font-bold text-black space-mono-regular tracking-tighter">
                      {/* <FiBox /> */}
                      request Details
                    </h2>
                    <p className="text-[8px] font-semibold text-black space-mono-regular tracking-tighter">
                      {`ID: ${request[0].id}`}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        requester Name
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].requester_first_name}{" "}
                        {request[0].requester_last_name}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Contact Number
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].requester_contact_number}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Email
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].requester_email}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Branch
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].inventory.branches.branch_name}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Payment Method
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].payment_method}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Status
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].status}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Cashier
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {request[0].employees.first_name}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        Created At
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {format(new Date(request[0].created_at), "P")}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Separator className="bg-slate-400" />
            <div className="flex flex-col gap-1 ">
              <div className="flex justify-between">
                <p className="flex gap-1 place-items-center text-[13px] font-semibold text-black space-mono-regular tracking-tighter">
                  {/* <BsBoxes /> */}
                  used foodsupplies
                </p>
              </div>
              {request &&
                request[0] &&
                request[0].use_foodsupplies &&
                request[0].use_foodsupplies.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between">
                    <div className="flex gap-1">
                      <p className="max-w-[95px] truncate text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {` x ${item.quantity}`}
                      </p>
                    </div>
                    <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                      {item.quantity.toFixed(2)}
                    </p>
                  </div>
                ))}
              <Separator className="bg-slate-400" />
              <div className="flex justify-between mb-3">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Total
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  {" "}
                  {request &&
                    request[0] &&
                    request[0].use_foodsupplies &&
                    request[0].use_foodsupplies
                      .reduce((acc: any, item: any) => acc + item.quantity, 0)
                      .toFixed(2)}
                </p>
              </div>
              <Separator className="bg-slate-400" />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="flex gap-1 place-items-center text-[13px] font-semibold text-black space-mono-regular tracking-tighter">
                    {/* <SiTemporal /> */}
                    used equipments
                  </p>
                </div>
                {request &&
                  request[0] &&
                  request[0].use_equipments &&
                  request[0].use_equipments.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between">
                      <div className="flex gap-1">
                        <p className="max-w-[95px] truncate text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                          {` x ${item.quantity}`}
                        </p>
                      </div>
                      <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                        {item.quantity.toFixed(2)}
                      </p>
                    </div>
                  ))}
                <Separator className="bg-slate-400" />

                <div className="flex justify-between mb-3">
                  <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                    Total
                  </p>
                  <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                    {" "}
                    {request &&
                      request[0] &&
                      request[0].use_equipments &&
                      request[0].use_equipments
                        .reduce((acc: any, item: any) => acc + item.quantity, 0)
                        .toFixed(2)}
                  </p>
                </div>
              </div>

              <Separator className="bg-slate-400" />

              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Subtotal
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  {" "}
                  {request &&
                    request[0] &&
                    request[0].use_foodsupplies &&
                    request[0].use_equipments &&
                    (
                      request[0].use_foodsupplies.reduce(
                        (acc: any, item: any) => acc + item.quantity,
                        0
                      ) +
                      request[0].use_equipments.reduce(
                        (acc: any, item: any) => acc + item.quantity,
                        0
                      )
                    ).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Tax
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  0
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  VAT
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  0
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Discount{" "}
                  {request && request[0] && request[0].discount
                    ? `(${request[0].discount}%)`
                    : ""}
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  -{" "}
                  {request &&
                    request[0] &&
                    request[0].use_foodsupplies &&
                    request[0].use_equipments &&
                    request[0].discount &&
                    (
                      (request[0].use_foodsupplies.reduce(
                        (acc: any, item: any) => acc + item.quantity,
                        0
                      ) +
                        request[0].use_equipments.reduce(
                          (acc: any, item: any) => acc + item.quantity,
                          0
                        )) *
                      (request[0].discount / 100)
                    ).toFixed(2)}
                </p>
              </div>
            </div>

            <Separator className="bg-slate-400" />
            <div className="flex flex-col gap-1">
              <div className="flex justify-between place-items-center">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Total
                </p>
                <p className="text-md 2xl:text-lg text-black space-mono-regular tracking-tighter font-bold">
                  {" "}
                  {request && request[0] && request[0].total_price
                    ? request[0].total_price.toFixed(2)
                    : "0.00"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Amount Paid
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  -{" "}
                  {request && request[0] && request[0].amount_paid
                    ? request[0].amount_paid.toFixed(2)
                    : "0.00"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  Change
                </p>
                <p className="text-[10px] font-semibold text-black space-mono-regular tracking-tighter">
                  {" "}
                  {request &&
                  request[0] &&
                  request[0].amount_paid &&
                  request[0].total_price
                    ? (request[0].amount_paid - request[0].total_price).toFixed(
                        2
                      )
                    : "0.00"}
                </p>
              </div>
            </div>
            {/* <div className="w-full max-w-full flex flex-col place-items-center gap-4">
              <Barcode
                value={
                  request && request[0] && request[0].id
                    ? request[0].id
                    : "No Barcode"
                }
                displayValue={false}
                background="transparent"
                lineColor="black"
                width={1}
                height={80}
                margin={0}
                renderer="img"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
