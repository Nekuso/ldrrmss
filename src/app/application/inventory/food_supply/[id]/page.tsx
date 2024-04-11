export default function FoodSupplyPage({ params }: any) {
  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8 bg-transparent">
      Pagkaonan number {params.id} ni bai
    </div>
  );
}
