import React from 'react';
import { Search } from "@/app/application/dashboard/components/search"
import { UserNav } from "@/app/application/dashboard/components/user-nav"
import { MainNav } from "@/app/application/dashboard/components/main-nav"
import { Button } from "@/components/ui/button"
import { Addemployeebutton } from './addemployeebutton';


const Employeelistpage: React.FC = () => {
    // Dummy data array
    const employees = [
        {
            id: 1,
            name: "Bently A. Kalibangon",
            title: "Manager",
            status: "Active",
            role: "Admin",
            email: "MrCrabs@gmail.com",
        },
        {
            id: 2,
            name: "Wally B. Baloya",
            title: "Hygenien Technician",
            status: "Pending",
            role: "Toilet Cleaner",
            email: "Wallypushupshaha@gmail.com",
        },
        // Add more dummy data objects as needed
    ];

    return (
        <div className="w-full h-full">
            <h1 className="text-black font-bold ml-4 mb-2 ">Employee List</h1>
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


<div className="flex flex-grow justify-end space-x-4 m-2">
<Addemployeebutton />
</div>



                    {/* Table */}
                    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Map over dummy data array to render each employee */}
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?img=${employee.id}`} alt="Profile Picture" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {employee.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {employee.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{employee.title}</div>
                                        <div className="text-sm text-gray-500">{employee.role}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {employee.role}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {employee.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employeelistpage;
