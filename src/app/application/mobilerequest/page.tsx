import React from 'react';

const Mobilerequest: React.FC = () => {
  return (
    <div className="w-full h-full">
<h1 className="text-black font-bold ml-4 mb-2 ">Mobile Request</h1>
<div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">

<div className="flex mt-2 ml-2">
  <button className=" text-black border border-zinc-400 bg-zinc-200 hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">All Requests</button>
  <button className=" text-black border border-zinc-400 bg-zinc-200 hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ongoing</button>
  <button className=" text-black border border-zinc-400 bg-zinc-200 hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Completed</button>
  <button className=" text-black border border-zinc-400 bg-zinc-200 hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Archived</button>
  
</div>


<div className="flex ml-2">
  <input className="text-black border border-zinc-400 bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="text" placeholder="Request No." />
  <input className="text-black border border-zinc-400 bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" placeholder="Name" />
  <input className="text-black border border-zinc-400 bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="text" placeholder="Request Type" />
  <input className="text-black border border-zinc-400 bg-zinc-200  hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="datetime-local" />
  <button className="text-black border border-zinc-400 bg-zinc-200 hover:bg-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create Request</button>
</div>



<div className="relative overflow-x-auto shadow-md">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Request No.
                </th>

                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Request Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                   <a href='../../application/requestview'> 09-xxx-xxx-xxx</a>
                </th>
                <td className="px-6 py-4">
                    Nat
                </td>
                <td className="px-6 py-4">
                    Landslide
                </td>
                <td className="px-6 py-4">
                    25/02/2024
                </td>
                <td className="px-6 py-4">
                    No Progress
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                <a href='../../application/requestview'> 09-xxx-xxx-xxx</a>
                </th>
                <td className="px-6 py-4">
                    Arian
                </td>
                <td className="px-6 py-4">
                    Flood
                </td>
                <td className="px-6 py-4">
                    26/02/2024
                </td>
                <td className="px-6 py-4">
                    Ongoing
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                <a href='../../application/requestview'> 09-xxx-xxx-xxx</a>
                </th>
                <td className="px-6 py-4">
                    Phil Diaz
                </td>
                <td className="px-6 py-4">
                    Pogi
                </td>
                <td className="px-6 py-4">
                    27/02/2024
                </td>
                <td className="px-6 py-4">
                    Complete
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                <a href='../../application/requestview'> 09-xxx-xxx-xxx</a>
                </th>
                <td className="px-6 py-4">
                    Junnard Ty. Olbo
                </td>
                <td className="px-6 py-4">
                    Vehicular Accident
                </td>
                <td className="px-6 py-4">
                    28/02/2024
                </td>
                <td className="px-6 py-4">
                    Complete
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                <a href='../../application/requestview'> 09-xxx-xxx-xxx</a>
                </th>
                <td className="px-6 py-4">
                    Emmanuel Lopez
                </td>
                <td className="px-6 py-4">
                    Earthquake
                </td>
                <td className="px-6 py-4">
                    25/02/2024
                </td>
                <td className="px-6 py-4">
                    Ongoing
                </td>
            </tr>
        </tbody>
    </table>
</div>





</div>
</div>
  );
}

export default Mobilerequest;
