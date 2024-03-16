import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <body className= {montserrat.className}>
      <div className="flex place-items-center justify-center w-full h-screen bg-gradient-to-t from-zinc-200  to-zinc-100 p-8">
          {children}
        </div>
      </body>

  );
}
