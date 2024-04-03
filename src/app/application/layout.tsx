import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { MainNav } from "@/components/application/main-nav";
import { UserNav } from "@/components/application/user-nav";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/layouts/nav-bar/navbar";
import Providers from "@/redux/Provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const supabase = await createSupabaseServerClient();
  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  // redirect("/auth/login");
  // }

  return (
    <html lang="en">
      <Providers>
        <body className={cn("font-sora", sora.variable)}>
          <div className="w-full min-h-screen hidden bg-red-900 max-lg:flex justify-center place-items-center">
            <h1 className="text-2xl text-white">
              Abrihi sa computer palihog gaw
            </h1>
          </div>

          <div className="flex flex-col place-items-center justify-start w-full min-h-screen bg-slate-200 relative max-lg:hidden">
            <Navbar />
            <div className="w-full flex justify-center py-4">{children}</div>
          </div>
          <Sonner />
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
