import { Metadata } from "next"
import Image from "next/image"

import tasks from "./data/tasks.json"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { MainNav } from "@/app/application/dashboard/components/main-nav"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}


export default function TaskPage() {

  return (

    <div className="w-full h-full">
    <h1 className="text-black font-bold ml-4 mb-2 text-3">Mobile Request</h1>
    <div className="rounded-xl border border-white bg-white shadow-2xl p-2 flex justify-center">

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

      <div className="h-full flex-1 w-full flex-col space-y-2 md:flex">
      <div className="flex items-center justify-between space-y-2">
      <MainNav className="mx-6" />
      <div>
      </div>
      <div className="flex space-x-2">
          <UserNav/>
          </div>
        </div>
    
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
    </div></div>
  )
}