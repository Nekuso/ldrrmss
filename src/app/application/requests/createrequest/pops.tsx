import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Createrequestform } from "./create-request-form";

export function PopsDemo() {
  return (
    <div className="ml-2 mr-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-8 border-dashed" variant="outline" size="sm">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Create Request
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Creating request</DialogTitle>
            <DialogDescription>
              Add request details. Click save when youre done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <Createrequestform />
          </div>

          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
