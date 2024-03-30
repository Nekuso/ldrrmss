import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const Links = [
    {
      name: "Dashboard",
      href: "/application",
    },
    {
      name: "Requests",
      href: "/application/requests",
    },
    {
      name: "Stocks",
      href: "/application/stocks",
    },
    {
      name: "Employees",
      href: "/application/employees",
    },
    {
      name: "Announcement",
      href: "/application/announcement",
    },
    {
      name: "Settings",
      href: "/application/settings",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
