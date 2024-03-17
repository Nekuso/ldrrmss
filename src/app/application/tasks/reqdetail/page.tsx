import React from 'react';
import { MainNav } from "@/app/application/dashboard/components/main-nav"
const Reqdetails: React.FC = () => {
  return (
<div className="w-full h-full">
<h1 className="text-black font-bold ml-4 mb-2 ">Request Details</h1>
<div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">


<div className="border-b">
<div className="flex h-16 items-center px-4">
<MainNav className="mx-6" />
</div>
</div>


<div className="w-[100%] h-[95%] flex flex-row justify-center mt-3">

<div className="h-[94%] w-[50%] m-1 bg-orange-300">
yawa
</div>

<div className="h-[94%] w-[50%] m-1 bg-emerald-300">
yawa
</div>

</div>


</div>
</div>
);
}
export default Reqdetails;