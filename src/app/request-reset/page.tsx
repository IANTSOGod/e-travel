"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RequestPasswordInterface } from "@/interfaces/Requestpassword.interface";
import { authClient } from "@/lib/auth-client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function page() {
  const [formdata, setformdata] = useState<RequestPasswordInterface>(
    {} as RequestPasswordInterface
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, email: e.target.value });
  };
  const requestreset = async () => {
    const { data, error } = await authClient.requestPasswordReset(
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
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Request reset password</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        ></Input>
        <Button>Request reset</Button>
      </form>
    </div>
  );
}
