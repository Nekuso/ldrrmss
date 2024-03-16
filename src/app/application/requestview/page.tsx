import React from 'react';
import { Search } from "@/app/application/dashboard/components/search"
import { UserNav } from "@/app/application/dashboard/components/user-nav"
import { MainNav } from "@/app/application/dashboard/components/main-nav"
const Requestview: React.FC = () => {

    
  return (
    <div className="w-full h-full">
<h1 className="text-black font-bold ml-4 mb-2 ">Request Detail</h1>
<div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">


<div className="hidden flex-col md:flex w-full">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">

            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>



<div className="w-[30%] px-2 py-6 bg-zinc-200 rounded-lg lg:mt-0 flex flex-col border border-zinc-400 mr-1 shadow-lg">
<img className="mx-auto rounded-full h-36 w-36" src="https://i.imgflip.com/4l0t4u.png" alt="author avatar"></img>
<div className="flex flex-col py-4 ">
    
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Name:</h1>
<p className="mb-2">Alex P. Diaz</p> 
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Email:</h1>
<p className="mb-2">Alex123@gmail.com</p>
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Address:</h1>
<p className="mb-2">Amlan</p>
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Phone No.</h1>
<p className="mb-2">0967-506-4225</p>
</div>

</div>

<div className="w-[80%] px-1 py-1  text-center bg-zinc-200 rounded-lg lg:mt-0 xl:px-1  border border-zinc-400 ml-1 shadow-lg">

<div className="flex flex-row w-[100%] h-[35%] justify-center ">

<div className="w-[49%] px-1 py-1  text-left bg-zinc-200 rounded-lg lg:mt-0 xl:px-1  border border-zinc-400 shadow-lg">

<iframe className="top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        aria-hidden="false">
    </iframe>
</div>





<div className="w-[49%] px-1 py-1  text-left bg-zinc-200 rounded-lg lg:mt-0 xl:px-1  border border-zinc-400 ml-2 shadow-lg">
    
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Request No: 09-1321-1322 </h1>
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Request Type: Road Block</h1>
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Date & Time: 26/02/2024 : : 2PM</h1>
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Status: Ongoing</h1>
<a href="#" className="text-black font-medium rounded-lg text-sm dark:bg-gray-800 underline">Stocks Used</a><br/>
<button className=" text-black border border-emerald-600 bg-emerald-200 hover:bg-emerald-300 focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2">Accept</button>
<button className=" text-black border border-red-600 bg-red-200 hover:bg-red-300 focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2">Reject</button>
<button className=" text-black border border-emerald-600 bg-emerald-200 hover:bg-emerald-300 focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2">Complete</button>

</div>

</div>


<div className="flex w-[100%] h-[64%] justify-center mt-1 ">
<div className="w-[50%] m-1 py-1 text-center bg-zinc-200 rounded-lg lg:mt-0 border border-zinc-400 shadow-lg">
  <img
    src="https://media.sciencephoto.com/c0/42/67/06/c0426706-800px-wm.jpg"
    alt="Description of the image"
    className="w-full h-full"
  />
</div>


<div className="w-[50%] m-1 py-1  text-center bg-zinc-200 rounded-lg lg:mt-0 border border-zinc-400 shadow-lg">
<h1 className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800">Extra Information </h1>
<p className=" text-black font-medium rounded-lg text-sm dark:bg-gray-800 text-left mt-2 m-2">

I urgently seek assistance due to a road block, affecting 10 nearly residents. This obstacle is disrupting daily life and poses safety concerns. Your prompt attention is crucial to resolve this matter.

Thank you,</p>
</div>

</div>


</div>


</div>

</div>
</div>
);}

export default Requestview;