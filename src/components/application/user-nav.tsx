"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTransition } from "react";
import { toast as sonner } from "sonner";
import { signOut } from "@/lib/actions/index";
import { User } from "lucide-react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/redux/slices/userSessionSlice";
import { useRouter } from "next/navigation";

export function UserNav({ data }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(setCurrentUser(data));

  const [isPending, startTransition] = useTransition();
  const onSignOut = async () => {
    sonner("Loggin out...", {});
    startTransition(async () => {
      await signOut();
    });
  };

  const viewProfile = () => {
    router.push(`/application/profile/${data.id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10 text-black">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>TD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {data && (
          <DropdownMenuLabel className="font-normal flex flex-col gap-1">
            <span>{`${data.first_name} ${data.last_name}`}</span>
            <span className="text-xs text-gray-300">{data.roles.role}</span>
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            className="rounded-lg cursor-pointer"
            onClick={() => {
              viewProfile();
            }}
          >
            <User className="mr-2 h-7 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="rounded-lg cursor-pointer hover:bg-red-500 hover:text-white"
          onClick={() => {
            onSignOut();
          }}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
