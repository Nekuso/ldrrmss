import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Addsup1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add Supplies</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add supply</DialogTitle>
          <DialogDescription>
            Provide the neccessary information.Press confirm whgen you're done. Also idk im still designing this part.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Supply Name
            </Label>
            <Input id="username" className="col-span-3" placeholder="okay"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount
            </Label>
            <Input id="username" className="col-span-3" placeholder="okay"/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
