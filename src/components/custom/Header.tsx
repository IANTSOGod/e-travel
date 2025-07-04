"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { PlaneLanding } from "lucide-react";
import LoginComponent from "./LoginComponent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [ishow, setisshow] = useState<Boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === "/register" ||
      pathname === "/reset-password" ||
      pathname === "/request-reset"
    ) {
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
      <div className="mt-[-5px] ml-auto md:flex hidden">
        <LoginComponent></LoginComponent>
        <Link href={"/register"}>
          <Button className="w-[150px] bg-red-400 text-white hover:bg-red-700">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
