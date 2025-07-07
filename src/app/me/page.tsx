"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function page() {
  const { data } = authClient.useSession();

  useEffect(() => {
    console.log(data?.user);
  }, [data]);
  
  return <div></div>;
}
