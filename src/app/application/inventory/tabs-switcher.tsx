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
import EquipmentsPage from "./equipments/page";
import FoodSupplyPage from "./food_supply/page";
import VechilesPage from "./vehicles/page";

export function TabsDemo() {
  return (
    <div className="w-full min-h-[700.5px] max-h-[700.5px] flex flex-col justify-between gap-2 p-3 rounded-2xl">
      <div className="w-full h-full flex flex-col gap-2 ">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="gap-2 bg-gray-800 text-white">
            <TabsTrigger value="equipments">Equipments</TabsTrigger>
            <TabsTrigger value="food_supply">Food-supply</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          </TabsList>
          <TabsContent value="equipments">
            <Card>
              <CardHeader>
                <CardTitle>Equipments</CardTitle>
                <CardDescription>Diri ang equipments table</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <EquipmentsPage />
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="food_supply">
            <Card>
              <CardHeader>
                <CardTitle>Food Supply</CardTitle>
                <CardDescription>Diri ang food-supply table</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <FoodSupplyPage />
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="vehicles">
            <Card>
              <CardHeader>
                <CardTitle>Vehicles</CardTitle>
                <CardDescription>Diri ang vehicles table</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <VechilesPage />
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
