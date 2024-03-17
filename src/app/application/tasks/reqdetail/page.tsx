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

<div className="h-[94%] w-[25%] m-1 border border-gray-300 rounded-xl shadow-lg col-span-4 sm:col-span-3 p-10 flex flex-col items-center">

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d08ceb1-9f64-4b08-8d07-7eb0e1f357d5/d21zjkx-16c2f982-d552-49bf-9739-5618a4180959.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkMDhjZWIxLTlmNjQtNGIwOC04ZDA3LTdlYjBlMWYzNTdkNVwvZDIxempreC0xNmMyZjk4Mi1kNTUyLTQ5YmYtOTczOS01NjE4YTQxODA5NTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TpMHVsKbF01uBFBqeBc_tsl5nVPIWNscJrATaoNK4Z0" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></img>
<h1 className="text-xl font-bold">Flap Jack</h1>

<div className="my-6 border-t border-gray-300">
<h1 className="text-gray-700 uppercase font-bold tracking-wider mb-2">User information</h1>

<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Email :</h2>
<p className="mb-2 text-sm text-[12px]"><i>Candyisland20@gmail.com</i></p>
<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Date of birth:</h2>
<p className="mb-2 text-sm text-[12px]"><i>March, 18th, 2002</i></p>
<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Address:</h2>
<p className="mb-2 text-sm text-[12px]"><i>Candyisland20@gmail.com</i></p>

<span className="border border-gray-300 w-full col-span-4 sm:col-span-3 flex flex-col mb-1"></span>

<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Request Number:</h2>
<p className="mb-2 text-sm text-[12px]"><i>RN-0001</i></p>
<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Request Type:</h2>
<p className="mb-2 text-sm text-[12px]"><i>Flood</i></p>
<h2 className="text-gray-700 uppercase font-bold tracking-wider text-[13px]">Request Sent:</h2>
<p className="mb-2 text-sm text-[12px]"><i>March, 16th, 2024</i></p>
</div>
</div>




<div className="h-[94%] w-[75%] m-1 border border-gray-300 rounded-xl shadow-lg">
yawa
</div>

</div>


</div>
</div>
);
}
export default Reqdetails;