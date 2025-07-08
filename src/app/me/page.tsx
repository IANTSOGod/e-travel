"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function page() {
  const { data } = authClient.useSession();

  useEffect(() => {
    console.log(data?.user);
  }, [data]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/6 border-r-2 border-gray"></div>
      <div className="w-5/6 bg-blue-400"></div>
    </div>
  );
}
