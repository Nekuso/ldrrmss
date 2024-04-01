import { Button } from "@/components/ui/button";
import { TextareaDemo1 } from "./textform";

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

export function PopsDemo() {
  return (
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

        <div className="grid gap-4 py-4"></div>

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
