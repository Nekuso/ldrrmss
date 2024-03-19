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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Accadminreqtextbox } from "./accadminreqtextbox"

export function Accadminreq() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Forgot password?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Assistance</DialogTitle>
          <DialogDescription>
           Make a request here for the admin to assist you.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> Name  </Label>
            <Input id="name" className="col-span-3" placeholder="e.x: Junnard ty olbo"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right"> Worker ID</Label>
            <Input id="username" className="col-span-3" placeholder="e.x: 202000371"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> Email  </Label>
            <Input id="name" className="col-span-3" placeholder="e.x: Junnard@gmail.com"/>
          </div>

          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select request" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Fmail">Forgot Email</SelectItem>
                  <SelectItem value="Fpass">Forgot Password</SelectItem>
                  <SelectItem value="Tissue">Technical Issue</SelectItem>
                  <SelectItem value="Nemployee">Dont have an account (New Employee)</SelectItem>
                </SelectContent>
              </Select>
            </div>

<Accadminreqtextbox/>

        </div>
        <DialogFooter>
          <Button type="submit">Submit dispute</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
