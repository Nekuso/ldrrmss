import { Montserrat } from "next/font/google";
import "../globals.css";
import { Search } from "lucide-react";
import { MainNav } from "../../components/application/main-nav";
import { UserNav } from "../../components/application/user-nav";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={montserrat.className}>
      <div className="flex place-items-center justify-center w-full h-screen from-slate-200 to-slate-500">
        <div className="w-full h-full bg-white flex flex-col shadow-2xl">
          <div className="flex flex-col w-full h-full bg-slate-200">
            <div className="flex w-full h-fit justify-center place-items-center border-b items-center px-4 py-4 bg-white">
              <div className="w-[90%] flex justify-between place-items-center">
                <MainNav className="mx-6" />
                <div className="flex items-center gap-4">
                  <Search />
                  <UserNav />
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </body>
  );
}
