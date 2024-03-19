import * as React from "react"
import { Accadminreq } from "./accadminreq"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Authform() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Start your shift!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email of Employee" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password"  type="password" placeholder="Enter Password" />
            </div>
          </div>
        </form>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Accadminreq/>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
