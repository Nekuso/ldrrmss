"use client";
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

export default function Page({ params }: { params: any }) {
  const [isMounted, setIsMounted] = useState(false);
  const router = isMounted ? useRouter() : undefined;
  const { ADMINISTRATOR, STAFF } = ROLES;
  const currentSession = useSelector((state: any) => state.currentSession);
  const access = useAuthMiddleware([ADMINISTRATOR, STAFF], currentSession);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (router && !access.allowed) {
      router.push(access.defaultRoute).catch((error) => console.error(error));
    }
  }, [access, router]);

  if (!access.allowed) {
    return (
      <div className="w-full h-full flex justify-center place-items-center">
        <h1 className="text-xl font-semibold text-slate-200 text-center">
          Unauthorized
        </h1>
      </div>
    );
  }

  const { getEmployee, currentEmployeeData } = useEmployees();
  const { getRoles, allRolesData } = useRoles();

  useEffect(() => {
    getEmployee(params.id, 2000);
    getRoles();
  }, [params.id]);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const subscribedChannel = supabase
      .channel("employee-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "employees" },
        (payload: any) => {
          getEmployee(params.id, 0);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscribedChannel);
    };
  }, [params.id]);

  return (
    <div className="flex flex-col justify-start place-items-center w-full h-full gap-7 p-8">
      {currentEmployeeData.length === 0 ? (
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