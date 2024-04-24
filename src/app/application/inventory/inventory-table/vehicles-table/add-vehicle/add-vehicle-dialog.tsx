import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import VehicleForm from "./add-vehicle-form";
import { BsBoxSeam } from "react-icons/bs";
import { FaAmbulance } from "react-icons/fa";

export default function VehicleDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs font-bold rounded-md flex gap-2  transition-all duration-300">
          <FaAmbulance /> New Vehicle
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[570px] Bg border border-lightBorder shadow-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Service</DialogTitle>
          <DialogDescription>
            Add a new service to your inventory
          </DialogDescription>
        </DialogHeader>
        <VehicleForm setDialogOpen={setDialogIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
