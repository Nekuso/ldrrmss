"use client";

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

import UpdateEmployeeForm from "./update-employee-form";
import { MdOutlineModeEdit } from "react-icons/md";

export default function UpdateEmployeeDialog({ employee, roles }: any) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="">
          <MdOutlineModeEdit />
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 shadow-2xl">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>
            Make sure to input the new correct fields of the user
          </DialogDescription>
        </DialogHeader>
        <UpdateEmployeeForm
          setDialogOpen={setDialogIsOpen}
          dialogIsOpen={dialogIsOpen}
          employee={employee}
          roles={roles}
        />
      </DialogContent>
    </Dialog>
  );
}
