import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-[20%] grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="edit">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <Card className="bg-slate-500 rounded-2xl shadow-lg">
            <CardHeader>
              <img
                src={"https://i.ytimg.com/vi/cbo9kvY5InI/maxresdefault.jpg"}
                width={"100%"}
                className="rounded-full h-24 w-24 border-4 border-white"
                alt="profile picture"
              />

              <>
                <CardTitle className="text-white font-bold text-2xl tracking-wide">
                  Captain Knuckles
                </CardTitle>
              </>

              <CardDescription className="text-white flex flex-row">
                <>
                  <div className="flex flex-col w-[20%] mt-1">
                    <Label className="text-sm" htmlFor="first-name">
                      <span>First Name: Captain</span>
                    </Label>
                    <Label className="text-sm" htmlFor="first-name">
                      <span>Last Name: Knuckles</span>
                    </Label>
                  </div>

                  <div className="flex flex-col w-[20%] mt-1">
                    <Label
                      className="text-sm mt-1flex flex-col w-[20%]"
                      htmlFor="email"
                    >
                      <span>Email: candyisland@gmail.com</span>
                    </Label>
                  </div>
                  <Label
                    className="text-sm mt-1flex flex-col w-[20%]"
                    htmlFor="phone-number"
                  >
                    <span>Phone Number: +1234567890</span>
                  </Label>

                  <Label
                    className="text-sm mt-1flex flex-col w-[20%]"
                    htmlFor="position"
                  >
                    <span>Position: Staff</span>
                  </Label>

                  <Label
                    className="text-sm mt-1flex flex-col w-[20%]"
                    htmlFor="address"
                  >
                    <span>Address: 123 Street, Amlan</span>
                  </Label>

                  <Label
                    className="text-sm mt-1flex flex-col w-[20%]"
                    htmlFor="birthday"
                  >
                    <span>Birthday: January 1, 1990</span>
                  </Label>
                </>
              </CardDescription>
            </CardHeader>
          </Card>
        </>
      </TabsContent>
      <TabsContent value="edit">
        <>
          <Card className="bg-slate-500 rounded-2xl shadow-lg">
            <CardHeader>
              <>
                <CardTitle className="text-white font-bold text-2xl tracking-wide">
                  Edit
                </CardTitle>
              </>
            </CardHeader>
            <CardContent className="space-y-2">
              <>
                <Label className="text-white" htmlFor="name">
                  First Name
                </Label>
                <Input id="name" placeholder="John" />
              </>
              <>
                <Label className="text-white" htmlFor="last-name">
                  Last Name
                </Label>
                <Input id="last-name" placeholder="Doe" />
              </>
              <>
                <Label className="text-white" htmlFor="email">
                  Email
                </Label>
                <Input id="email" placeholder="JohnDoe@gmail.com" />
              </>
              <>
                <Label className="text-white" htmlFor="phone">
                  Phone Number
                </Label>
                <Input id="phone" placeholder="63+ 9659074887" />
              </>
              <>
                <Label className="text-white" htmlFor="position">
                  Position
                </Label>
                <Input id="position" placeholder="Developer" />
              </>
              <>
                <Label className="text-white" htmlFor="address">
                  Address
                </Label>
                <Input id="address" placeholder="123 St, Amlan" />
              </>
              <>
                <Label className="text-white" htmlFor="birthday">
                  Birthday
                </Label>
                <Input id="birthday" placeholder="Febuary, 25, 2001" />
              </>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </>
      </TabsContent>
    </Tabs>
  );
}
