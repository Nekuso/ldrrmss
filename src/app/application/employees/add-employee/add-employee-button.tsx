"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmployeeForm from "./employee-form";
import { useState } from "react";

export function Addemployeebutton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Employee</Button>
      </DialogTrigger>
      <DialogContent className="w-[500px] max-w-none">
        <DialogHeader>
          <DialogTitle>Creating account</DialogTitle>
          <DialogDescription>
            Add account details. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <EmployeeForm setDialogOpen={setDialogIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
