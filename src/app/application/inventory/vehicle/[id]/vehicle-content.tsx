import UpdateVehicleButton from "./update-vehicle/update-vehicle-dialog";
import DeleteVehicleButton from "./delete-vehicle/delete-vehicle-dialog";

export default function VehicleContent({ vehicle }: any) {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex flex-col max-w-[1840px] justify-center place-items-center">
      <pre>
        <code>{JSON.stringify(vehicle, null, 2)}</code>
      </pre>
      <div className="flex">
        <DeleteVehicleButton vehicleData={vehicle[0]} />
        <UpdateVehicleButton vehicleData={vehicle[0]} />
      </div>
    </div>
  );
}
