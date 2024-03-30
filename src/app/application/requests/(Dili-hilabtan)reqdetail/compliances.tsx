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

export function DialogDemoRequest() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-gray-600 border border-gray-400 text-white"
          variant="outline"
        >
          Status
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Make sure to review the information before choosing. This will
            update the information on STATUS.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4"></div>

        <DialogFooter>
          <Button type="submit">Accept</Button>
          <Button type="submit">Reject</Button>
          <Button type="submit">Archieve</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
