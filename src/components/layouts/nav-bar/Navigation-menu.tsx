"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Operations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}
              <ListItem href="../../application/requests" title="Requests">
                Rescue related requests
              </ListItem>
              <ListItem href="../../application/employees" title="Employees">
                Rescue employees
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <Dead-end>*/}
        <NavigationMenuItem>
          <Link href="../../application/inventory" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Inventory
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <Dead-end>*/}
        <NavigationMenuItem>
          <Link href="../../application/settings" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Settings
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* </Dead-end> */}
        <NavigationMenuItem>
          <Link href="../../application/announcement" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Announcements
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* </Dead-end> */}

        <NavigationMenuItem>
          <Link href="../../application/map-testing" legacyBehavior passHref>
            <NavigationMenuLink
              className={`bg-transparent ${navigationMenuTriggerStyle()}`}
            >
              Map Testing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
