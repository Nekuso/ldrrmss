import { Button } from "@/components/ui/button"
import { TextareaDemo1 } from './textform';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 border border-gray-400 text-white" variant="outline">User Provided Information</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User provided information</DialogTitle>
          <DialogDescription>


      <p className="text-sm text-[12px] font-bold ml-2 m-1">
        <i>Affected individuals: 
          <input placeholder="10"
            type="text" 
            defaultValue={''} 
            className="ml-1 w-16 border border-gray-300 rounded-md p-1"
          />
        </i>
      </p>
      <p className="mb-4 text-sm text-[12px] font-bold ml-2 m-2">
        <i>Time of incident: 
          <input placeholder="10:00 AM"
            type="text" 
            defaultValue={''} 
            className="ml-1 w-24 border border-gray-300 rounded-md p-1"
          />
        </i>
      </p>
      
<p className="text-sm text-[12px] font-bold ml-2 mb-2"><i>User Statement:</i></p>

<TextareaDemo1/>

          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          </div>

        <DialogFooter>
        <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
  )
}
