import { MainNav } from "@/components/application/main-nav";
import { UserNav } from "@/components/application/user-nav";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { NavigationMenuDemo } from "./Navigation-menu";

export default function Navbar() {
  return (
    <div className="flex w-full h-fit justify-center place-items-center  items-center px-4 py-4 bg-white sticky top-0 z-[20]">
      <div className="w-[90%] flex justify-between place-items-center">
        <MainNav className="mx-6" />
        <div className="flex items-center gap-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
