"use client";

import { AppSidebar } from "@/components/custom/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const { data } = authClient.useSession();
  const router = useRouter();
  return (
    <SidebarProvider>
      <div className="w-screen h-screen flex">
        <div className="w-auto h-auto border-r-2 border-gray">
          <AppSidebar></AppSidebar>
        </div>
        <div className="w-full bg-blue-400"></div>
      </div>
    </SidebarProvider>
  );
}
