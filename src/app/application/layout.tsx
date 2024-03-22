import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <body className= {montserrat.className}>
      <div className="flex place-items-center justify-center w-full h-screen bg-gradient-to-br from-slate-200 to-slate-500 p-8">
          {children}
        </div>
      </body>

  );
}
