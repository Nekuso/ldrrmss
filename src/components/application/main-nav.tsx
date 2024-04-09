import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "../layouts/nav-bar/Navigation-menu";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const Links = [
    {
      name: "Dashboard",
      href: "/application",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <h1 className="font-black text-lg text-blue-600">LDRRMS</h1>
      {Links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          passHref
          className="text-sm font-medium relative hover:text-black hover:bg-white rounded-md px-4 py-2.5"
        >
          <span className="relative">{link.name}</span>
        </Link>
      ))}
      <NavigationMenuDemo />
    </nav>
  );
}
