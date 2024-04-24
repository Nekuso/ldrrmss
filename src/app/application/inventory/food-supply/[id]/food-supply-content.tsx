import UpdateFoodSupplyButton from "./update-food-supply/update-food-supply-dialog";
import DeleteFoodSupplyButton from "./delete-food-supply/delete-food-supply-dialog";

export default function FoodSupplyContent({ foodSupply }: any) {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex flex-col max-w-[1840px] justify-center place-items-center">
      <pre>
        <code>{JSON.stringify(foodSupply, null, 2)}</code>
      </pre>
      <div className="flex">
        <DeleteFoodSupplyButton foodSupplyData={foodSupply[0]} />
        <UpdateFoodSupplyButton foodSupplyData={foodSupply[0]} />
      </div>
    </div>
  );
}
