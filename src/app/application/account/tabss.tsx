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

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="edit">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <Card className="bg-slate-500 rounded-2xl shadow-lg">
            <CardHeader>
              <img
                src="https://i.ytimg.com/vi/cbo9kvY5InI/maxresdefault.jpg"
                className="rounded-full h-24 w-24 mx-auto"
                alt="profile picture"
              />
              <>
                <CardTitle className="text-white font-bold text-2xl tracking-wide">
                  Captain K'nuckles
                </CardTitle>
              </>
              <CardDescription className="text-white flex flex-col">
                <>
                  <Label className="text-sm mt-1" htmlFor="first-name">
                    First Name: Captain
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="last-name">
                    Last Name: K'nuckles
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="email">
                    Email: candyisland@gmail.com
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="phone-number">
                    Phone Number: +1234567890
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="position">
                    Position: Staff
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="address">
                    Address: 123 Street, Amlan
                  </Label>
                  <Label className="text-sm mt-1" htmlFor="birthday">
                    Birthday: January 1, 1990
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
