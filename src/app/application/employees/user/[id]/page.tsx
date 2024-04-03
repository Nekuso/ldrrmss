/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { useEmployees } from "@/hooks/useEmployees";
import { useRoles } from "@/hooks/useRoles";
import React, { useEffect } from "react";
import Loading from "./skeleton";
import UserContent from "./user-content";
export default function Page({ params }: any) {
  const { getEmployee, currentEmployeeData } = useEmployees();
  const { getRoles, allRolesData } = useRoles();

  useEffect(() => {
    getEmployee(params.id, 2000);
    getRoles();
  }, []);

  return (
    //   <pre className="w-[400px]">
    //     <code>{JSON.stringify(currentEmployeeData, null, 2)}</code>
    //   </pre>
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      {currentEmployeeData.length === 0 ? (
        <Loading />
      ) : (
        <UserContent
          params={params}
          employee={currentEmployeeData[0]}
          roles={allRolesData}
        />
      )}
    </div>
  );
}
