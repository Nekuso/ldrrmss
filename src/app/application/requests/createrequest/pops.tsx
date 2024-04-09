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
import { Createrequestform2 } from "./create-request-form2";

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
        <DialogContent className="sm:max-w-[860px]">
          <DialogHeader>
            <DialogTitle>Creating request</DialogTitle>
            <DialogDescription>
              Add request details. Click save when youre done.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-row justify-between">
            <div className="grid gap-4 py-4">
              <Createrequestform />
            </div>
            <div className="w-px bg-zinc-500"></div>
            <div className="grid gap-4 py-4">
              <Createrequestform2 />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
