import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/application/overview";
import { RecentSales } from "@/components/application/recent-sales";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Requests",
  description: "Example dashboard app built using the components.",
};

const widgetsData = [
  {
    title: "Total Mobile Users",
    value: 100,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
        <path
          fill-rule="evenodd"
          d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    description: "Starting this month",
  },
  {
    title: "Approval Request",
    value: 500,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    description: "Approved count on this month",
  },
  {
    title: "Request Count",
    value: 1000,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
      </svg>
    ),
    description: "Request count on this month",
  },
];

export default function RequestPage() {
  return (
    <div className="flex flex-col justify-center place-items-center w-full h-full gap-7 p-8 bg-transparent">
      <div className="w-[90%] h-[20%] flex gap-4 ">
        {widgetsData.map((data, i) => (
          <Card key={i} className="w-full ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="text-sm font-medium w-[50%] h-[20px] rounded-full bg-slate-200"></Skeleton>
              <Skeleton className="text-sm font-medium w-[30px] h-[30px] rounded-full bg-slate-200"></Skeleton>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Skeleton className="text-2xl font-bold w-[70%] h-[20px] rounded-full bg-slate-200"></Skeleton>
              <Skeleton className="text-xs text-muted-foreground w-[25%] h-[20px] rounded-full bg-slate-200"></Skeleton>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-[90%] h-full flex gap-4">
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <Skeleton className="w-[10%] h-[20px] rounded-full bg-slate-200"></Skeleton>
          </CardHeader>
          <CardContent className="w-full h-full p-5">
            <Skeleton className="w-full h-full rounded-xl bg-slate-200" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
