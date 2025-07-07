"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RequestPasswordInterface } from "@/interfaces/Requestpassword.interface";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function page() {
  const [formdata, setformdata] = useState<RequestPasswordInterface>(
    {} as RequestPasswordInterface
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, email: e.target.value });
  };
  const requestreset = async () => {
    await authClient.requestPasswordReset(
      {
        email: formdata.email,
        redirectTo: "/reset-password",
      },
      {
        onError(context) {
          if (context.response.status.toString().startsWith("4")) {
            alert("Error to send link");
          }
        },
        onSuccess(context) {
          alert("See your email adress please");
        },
      }
    );
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestreset();
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 md:w-[400px] h-fit mx-auto border-2 items-center justify-center px-5 py-20 rounded-lg border-gray-200"
      >
        <Label className="text-xl font-bold">Request Password Reset</Label>
        <div className="w-full pt-5 mx-5 flex flex-col gap-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          ></Input>
        </div>
        <Button className="w-full bg-red-400 text-white hover:bg-red-700">
          Request reset
        </Button>
        <Link href={"/"} className="w-full">
          <Button className="w-full bg-white border-red-400 border-2 text-red-400 hover:bg-red-400 hover:text-white">
            Cancel
          </Button>
        </Link>
      </form>
    </div>
  );
}
