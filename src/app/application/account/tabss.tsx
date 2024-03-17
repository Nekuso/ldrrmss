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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="edit">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="bg-[#20354b] rounded-2xl shadow-lg">
          <CardHeader>
            <img src="https://i.ytimg.com/vi/cbo9kvY5InI/maxresdefault.jpg" className="rounded-full h-24 w-24 mx-auto" alt="profile picture"></img>
            <div className="text-center">
              <CardTitle className="text-white font-bold text-2xl tracking-wide">Captain K'nuckles</CardTitle>
            </div>
            <CardDescription className="text-white">
              <p className="text-sm mt-1">First Name: Captain</p>
              <p className="text-sm mt-1">Last Name: K'nuckles</p>
              <p className="text-sm mt-1">Email: candyisland@gmail.com</p>
              <p className="text-sm mt-1">Phone Number: +1234567890</p>
              <p className="text-sm mt-1">Position: Staff</p>
              <p className="text-sm mt-1">Address: 123 Street, Amlan</p>
              <p className="text-sm mt-1">Birthday: January 1, 1990</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="edit">
        <Card className="bg-[#20354b] rounded-2xl shadow-lg">
          <CardHeader>
            <div className="text-center">
              <CardTitle className="text-white font-bold text-2xl tracking-wide">Edit</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label className="text-white" htmlFor="name">First Name</Label>
              <Input id="name" defaultValue="John" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="last-name">Last Name</Label>
              <Input id="last-name" defaultValue="Doe" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input id="email" defaultValue="johndoe@example.com" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1234567890" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="position">Position</Label>
              <Input id="position" defaultValue="Developer" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="address">Address</Label>
              <Input id="address" defaultValue="123 Street, City" />
            </div>
            <div className="space-y-1">
              <Label className="text-white" htmlFor="birthday">Birthday</Label>
              <Input id="birthday" defaultValue="January 1, 1990" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
