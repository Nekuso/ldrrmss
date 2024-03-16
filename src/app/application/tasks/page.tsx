import { Metadata } from "next"
import Image from "next/image"

import tasks from "./data/tasks.json"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { MainNav } from "@/app/application/dashboard/components/main-nav"
import { Search } from "@/app/application/dashboard/components/search"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}


export default function TaskPage() {

  return (

    <div className="w-full h-full">
<h1 className="text-black font-bold ml-4 mb-2 ">Mobile Request</h1>
<div className="w-[94%] h-[94%] rounded-xl border border-white bg-white mr-7 shadow-2xl">

    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>


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
    
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
    </div></div>
  )
}