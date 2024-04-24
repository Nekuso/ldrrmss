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

import FoodSuppliesForm from "./add-food-supply-form";
import { BsBoxSeam } from "react-icons/bs";

export default function Food_supplyDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-xs font-bold rounded-md flex gap-2  transition-all duration-300 ">
          <BsBoxSeam /> New Food Supply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[570px] Bg border border-lightBorder shadow-2xl bg-white">
        <DialogHeader>
          <DialogTitle>Food supply</DialogTitle>
          <DialogDescription>
            Add a new food supply to your inventory
          </DialogDescription>
        </DialogHeader>
        <FoodSuppliesForm setDialogOpen={setDialogIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
