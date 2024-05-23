"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DeleteEmployeeButton from "./delete-employee/delete-employee-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdAlternateEmail, MdOutlineVerified } from "react-icons/md";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { IoCreateOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPersonAddOutline } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaEye } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
// import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import { format } from "date-fns";

// import Banner from "@/images/banner.jpg";
import Image from "next/image";
import { LuRefreshCcw } from "react-icons/lu";
import UpdateEmployeeButton from "./update-employee/update-employee-dialog";
import UpdateEmployeeStatusButton from "./update-employee-status/update-employee-status-dialog";
import DeleteEmployeeDialog from "./delete-employee/delete-employee-dialog";

export default function Page({ employee, roles, currentSession }: any) {
  return (
    // <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-0">
    //   <div className="space-y-2 w-[90%] h-fit rounded-2xl">
    //     <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white bg-opacity-85 bg-clip-border draggable shadow-lg mb-4">
    //       <div className="flex flex-wrap -mx-3">
    //         <div className="flex-none w-auto max-w-full px-3">
    //           <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl transition-all duration-200">
    //             <span className="flex rounded-3xl w-20 h-20 cursor-pointer border-4 border-neutral-900 bg-slate-500 ">
    //               <span className="flex h-full w-full items-center justify-center font-bold text-2xl text-white">
    //                 TD
    //               </span>
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex-none w-auto max-w-full px-3 my-auto">
    //           <div className="h-full">
    //             <h4 className="flex text-3xl font-bold place-items-center gap-5 text-center text-black">
    //               {employee.first_name} {employee.last_name}
    //               <div
    //                 className={cn(
    //                   "text-xs rounded-2xl py-1 px-2 border font-normal flex place-items-center gap-1 cursor-pointer",
    //                   employee.status === "Available"
    //                     ? "text-white-500 bg-green-500 bg-opacity-40 border-green-800"
    //                     : employee.status === "In Progress"
    //                     ? "text-yellow-300 bg-yellow-300 bg-opacity-20 border-yellow-300"
    //                     : "text-red-500 bg-red-500 bg-opacity-20 border-red-500"
    //                 )}
    //               >
    //                 <div
    //                   className={cn(
    //                     "w-2 h-2 rounded-full",
    //                     employee.status === "Available"
    //                       ? " bg-green-500 "
    //                       : employee.status === "In Progress"
    //                       ? "bg-yellow-300 "
    //                       : "bg-red-500"
    //                   )}
    //                 ></div>
    //                 {employee.status}
    //               </div>
    //             </h4>
    //             <p className="mb-0 font-semibold leading-normal text-md text-zinc-500">
    //               {employee.roles.role}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="w-full flex flex-row gap-3 px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none justify-end">
    //           <DeleteEmployeeButton employee={employee} />
    //           <UpdateEmployeeButton employee={employee} roles={roles} />
    //           <Button>Activity Logs</Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full mx-auto removable">
    //       <div className="flex flex-wrap -mx-3 drop-zone">
    //         <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-0 draggable">
    //           <div className="relative flex flex-col h-full min-w-0 break-words rounded-2xl shadow-lg">
    //             <div className="p-0 pb-0 mb-0 bg-white bg-opacity-85 border-b-0 rounded-2xl">
    //               <div className="flex flex-wrap -mx-3 px-4 py-2">
    //                 <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none font-bold py-1 text-black">
    //                   <h6>Location</h6>
    //                 </div>
    //               </div>
    //               <div className="flex-auto px-4 pb-4">
    //                 <iframe
    //                   className="w-full min-h-[300px] rounded-xl"
    //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.644211999011!2d123.2626467!3d9.289425199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOsKwMjMnMzQuMCJTIDEyM8KwMzMnMTAuNyJF!5e0!3m2!1sen!2sph!4v1648767287790!5m2!1sen!2sph"
    //                   allowFullScreen={true}
    //                   loading="lazy"
    //                 ></iframe>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-0 draggable">
    //           <div className="relative flex flex-col h-full min-w-0 break-words bg-white bg-opacity-85 rounded-2xl shadow-lg">
    //             <div className="p-0 pb-0 mb-0 border-b-0 rounded-2xl">
    //               <div className="flex flex-wrap -mx-3 px-4 py-2">
    //                 <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none font-bold py-1 text-black">
    //                   <h6>General Information</h6>
    //                 </div>
    //               </div>
    //               <div className="flex-auto px-4 pb-4">
    //                 <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal  border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Full Name
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.first_name} {employee.last_name}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>

    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Sex
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.gender}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>

    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Birthday
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.dob}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>
    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Address
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.address}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-0 draggable">
    //           <div className="relative flex flex-col h-full min-w-0 break-words bg-white bg-opacity-85 rounded-2xl shadow-lg">
    //             <div className="p-0 pb-0 mb-0 border-b-0 rounded-2xl">
    //               <div className="flex flex-wrap -mx-3 px-4 py-2">
    //                 <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none font-bold py-1 text-black">
    //                   <h6>Employee Information</h6>
    //                 </div>
    //               </div>
    //               <div className="flex-auto px-4 pb-4">
    //                 <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal  border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Job title
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.roles.role}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>

    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Email
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.email}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>

    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Mobile Number
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.contact_number}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>
    //                   <li className="relative block px-4 py-2 pt-0 pl-0 leading-normale border-0 rounded-t-lg text-sm text-inherit">
    //                     <div className="w-full flex flex-col gap-2">
    //                       <span className="text-xs 2xl:text-md font-semibold text-zinc-500 flex justify-center place-items-center w-fit gap-1">
    //                         Added at
    //                       </span>
    //                       <div className="w-full min-w-0 bg-zinc-300 rounded-lg">
    //                         <p className="text-sm 2xl:text-md text-black gap-2 p-2 max-w-[260px] truncate">
    //                           {employee.created_at}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col place-items-center w-full h-full gap-7 p-8">
      <div className="space-y-2 w-fit h-full rounded-2xl">
        <div className="w-full h-full flex max-w-[1840px] max-h-[950px] justify-center place-items-center gap-7 py-4">
          <div className="w-full h-full flex flex-row justify-center gap-2 rounded-xl">
            <div className="p-6 bg-darkComponentBg flex flex-col gap-2 2xl:gap-4 rounded-xl shadow-lg border border-darkBorder bg-white">
              <div className="w-full h-[150px] 2xl:h-[200px] bg-blue-600 rounded-xl relative">
                {/* <Image
                src={Banner}
                alt="something"
                className="w-full h-full object-cover rounded-xl opacity-75"
              /> */}

                <Avatar className="w-32 h-32 cursor-pointer z-0 absolute -bottom-[30%] left-7 border-8 border-gray-800">
                  <AvatarImage
                    src={employee[0].image_url}
                    alt={employee[0].id}
                  />
                  <AvatarFallback className="bg-slate-500 font-bold text-2xl text-white">
                    {`${employee[0].first_name[0]} ${employee[0].last_name[0]}`}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="w-full flex justify-start gap-4 pt-16">
                <h2 className="flex text-2xl font-bold place-items-center gap-3">
                  {employee[0].first_name + " " + employee[0].last_name}
                  <UpdateEmployeeStatusButton employeeData={employee[0]} />
                </h2>
                <div className="min-h-[40px]">
                  {currentSession.roles.role === "Administrator" ||
                  currentSession.roles.role === "Manager" ? (
                    <UpdateEmployeeButton
                      employeeData={employee[0]}
                      // branchesData={branches}
                      rolesData={roles}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full flex gap-7">
                <div className="w-[45vw] h-full flex flex-col justify-start p-6 gap-2 2xl:gap-4 bg-darkComponentBg rounded-xl shadow-lg border border-darkBorder bg-white">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    General Information
                  </h1>
                  <div className="w-full flex gap-7">
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <MdAlternateEmail />
                        Email
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {employee[0].email}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        {employee[0].gender === "Male" ? (
                          <BsGenderMale />
                        ) : (
                          <BsGenderFemale />
                        )}
                        Sex
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {employee[0].gender}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <CiCalendarDate />
                        Date of Birth
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {format(employee[0].dob, "PPP")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-7">
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <IoLocationOutline />
                        Address
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {employee[0].address}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <MdOutlinePhone />
                        Contact Number
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          +63 {employee[0].contact_number}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <IoPersonAddOutline />
                        Added at
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {format(employee[0].created_at, "PPP")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-7">
                    <div className="w-full flex flex-col gap-2">
                      <span className="text-xs 2xl:text-md font-semibold text-gray-800 flex justify-center place-items-center w-fit gap-1">
                        <MdOutlineManageAccounts />
                        Position
                      </span>
                      <div className="w-full min-w-0 bg-darkBorder rounded-lg">
                        <p className="text-sm 2xl:text-md text-slate-600 gap-2 p-2 max-w-[260px] truncate">
                          {employee[0].roles.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
