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

import EquipmentForm from "./add-equipment-form";
import { PiGearSixBold } from "react-icons/pi";

export default function EquipmentDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs font-bold rounded-md flex gap-2 bg-applicationPrimary hover:bg-applicationPrimary transition-all duration-300">
          <PiGearSixBold /> New Part
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[570px] bg-darkComponentBg border border-lightBorder shadow-2xl">
        <DialogHeader>
          <DialogTitle>Part</DialogTitle>
          <DialogDescription>
            Add a new part to your inventory
          </DialogDescription>
        </DialogHeader>
        <EquipmentForm setDialogOpen={setDialogIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
