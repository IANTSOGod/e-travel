"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, LogOut, PlaneLanding, User } from "lucide-react";
import LoginComponent from "./LoginComponent";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Label } from "../ui/label";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import NotificationMenu from "./NotificationMenu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Header() {
  const session = authClient.useSession();
  const router = useRouter();
  const [ishow, setisshow] = useState<boolean>(true);
  const userinforoutes = ["/me"];
  const pathname = usePathname();
  const userId = session?.data?.user?.id;
  const notifications = useQuery(
    api.notifications.getNotifications,
    userId ? { userId } : "skip"
  );

  useEffect(() => {
    if (notifications) {
      console.log(notifications);
    }
  }, [notifications]);

  const logout = async () => {
    await authClient.signOut();
  };

  useEffect(() => {
    const hiddenRoutes = ["/register", "/reset-password", "/request-reset"];
    setisshow(!hiddenRoutes.includes(pathname));
  }, [pathname]);

  return (
    <div
      className={`${
        ishow ? "flex" : "hidden"
      } h-[65px] bg-none pt-[20px] md:px-[150px] px-[50px] gap-x-[70px] ${
        userinforoutes.includes(pathname) ? "border-b-2 border-gray" : ""
      }`}
    >
      <div className="text-red-500 font-bold flex gap-x-2">
        {pathname === "/me" && (
          <Link href={"/"}>
            <ArrowLeft />
          </Link>
        )}
        <PlaneLanding />
        e-Travel
      </div>

      <div className="hidden md:flex gap-x-[30px] font-bold text-blue-400">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Adventures</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      {session?.data?.user ? (
        <div className="ml-auto flex text-red-400 gap-x-2 cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <NotificationMenu
                userid={session.data.user.id}
              ></NotificationMenu>
            </TooltipTrigger>
            <TooltipContent>
              <Label>Notifications</Label>
            </TooltipContent>
          </Tooltip>
          <User
            className="rounded-3xl bg-gray-100 w-[35px] h-[35px] p-1 border-1 border-red-400"
            onClick={() => {
              router.push("/me");
            }}
          />
          <Label
            className="-mt-5 md:text-md font-bold md:flex hidden cursor-pointer"
            onClick={() => {
              router.push("/me");
            }}
          >
            {session.data.user.name}
          </Label>
          <LogOut className="!text-black cursor-pointer" onClick={logout} />
        </div>
      ) : (
        <div className="mt-[-5px] ml-auto md:flex hidden gap-x-2">
          <LoginComponent />
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
