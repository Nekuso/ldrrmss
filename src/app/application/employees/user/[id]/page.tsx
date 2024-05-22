/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import { useEmployees } from "@/hooks/useEmployees";
import { useRoles } from "@/hooks/useRoles";
import React, { useEffect, useState } from "react";
import Loading from "./skeleton";
import UserContent from "./user-content";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { ROLES } from "@/lib/actions/roles";
import { useSelector } from "react-redux";
import { useAuthMiddleware } from "@/lib/actions/useMiddleware";
import { useRouter } from "next/router";
import EmployeeNotFound from "./not-found";

export default function Page({ params }: { params: any }) {
  const router = useRouter();
  const { ADMINISTRATOR, STAFF } = ROLES;
  const currentSession = useSelector((state: any) => state.currentSession);
  const access = useAuthMiddleware([ADMINISTRATOR, STAFF], currentSession);
  if (!access.allowed) {
    router.push(access.defaultRoute);
    return (
      <div className="w-full h-full flex justify-center place-items-center">
        <h1 className="text-xl font-semibold text-slate-200 text-center">
          Unauthorized
        </h1>
      </div>
    );
  }
  const [error, setError] = useState(null);
  const { getEmployee, currentEmployeeData } = useEmployees();
  const { getRoles, allRolesData } = useRoles();

  useEffect(() => {
    const initialFetch = async () => {
      const result = await getEmployee(params.id, 1000);
      if (result) setError(result);
      getRoles();
    };

    initialFetch();
  }, []);

  useEffect(() => {
    if (!error) {
      const supabase = createSupabaseBrowserClient();
      const subscribedChannel = supabase
        .channel("employee-follow-up")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "employees",
            filter: `id=eq.${params.id}`,
          },
          (payload: any) => {
            getEmployee(params.id, 0);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscribedChannel);
      };
    }
  }, []);

  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      {error ? (
        <EmployeeNotFound />
      ) : currentEmployeeData.length === 0 ? (
        <Loading />
      ) : (
        <UserContent
          params={params}
          employee={currentEmployeeData}
          roles={allRolesData}
        />
      )}
    </div>
  );
}
