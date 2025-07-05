"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut, PlaneLanding, User } from "lucide-react";
import LoginComponent from "./LoginComponent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Label } from "../ui/label";

export default function Header() {
  const session = authClient.useSession();
  const unauthentifiedroute = [
    "/register",
    "/reset-password",
    "/request-reset",
  ];
  const [ishow, setisshow] = useState<Boolean>(true);
  const pathname = usePathname();

  const logout = async () => {
    await authClient.signOut();
  };

  useEffect(() => {
    if (pathname in unauthentifiedroute) {
      setisshow(false);
    } else {
      setisshow(true);
    }
  }, [pathname]);

  return (
    <div
      className={`${
        ishow ? "flex" : "hidden"
      } h-[65px] bg-none pt-[20px] md:px-[150px] px-[50px] gap-x-[70px] `}
    >
      <div className="text-red-500 font-bold flex gap-x-2">
        <PlaneLanding></PlaneLanding>e-Travel
      </div>
      <div className="hidden md:flex gap-x-[30px] font-bold text-blue-400">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Adventures</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {session?.data?.user ? (
        <div className="ml-auto flex text-red-400  gap-x-2 ">
          <User className="rounded-3xl bg-gray-100 w-[30px] h-[30px] p-1 border-1 border-red-400" />
          <Label className="-mt-5 md:text-md font-bold md:flex hidden">
            {session.data.user.name}
          </Label>
          <LogOut
            className="!text-black cursor-pointer"
            onClick={() => {
              logout();
            }}
          ></LogOut>
        </div>
      ) : (
        <div className="mt-[-5px] ml-auto md:flex hidden">
          <LoginComponent></LoginComponent>
          <Link href={"/register"}>
            <Button className="w-[150px] bg-red-400 text-white hover:bg-red-700">
              Register
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
