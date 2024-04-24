import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UpdateEquipmentButton from "./update-equipment/update-equipment-dialog";
import DeleteEquipmentButton from "./delete-equipment/delete-equipment-dialog";

export default function EquipmentContent({ equipment, brands }: any) {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex flex-col max-w-[1840px] justify-center place-items-center">
      <pre>
        <code>{JSON.stringify(equipment, null, 2)}</code>
      </pre>
      <div className="flex">
        <DeleteEquipmentButton equipmentData={equipment[0]} />
        <UpdateEquipmentButton equipmentData={equipment[0]} />
      </div>
    </div>
  );
}
