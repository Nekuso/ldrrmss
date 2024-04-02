import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Supply",
  description: "Example dashboard app built using the components.",
};

export default function FoodSupplyPage() {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8 bg-transparent">
      Pagkaonan ni bai
    </div>
  );
}
