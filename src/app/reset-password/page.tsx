"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangePassword } from "@/interfaces/ChangePassword.interface";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function page() {
  const router = useRouter();

  const [formdata, setformdata] = useState<ChangePassword>(
    {} as ChangePassword
  );

  const resetpassword = async () => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      //error handling if token is null
    }
    const { data, error } = await authClient.resetPassword(
      {
        newPassword: formdata.newpassword,
        token: token as string,
      },
      {
        onSuccess(context) {
          router.push("/");
        },
        onError(context) {
          alert(context.error.message);
        },
      }
    );
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, newpassword: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetpassword();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label>Choose your new password</Label>
        <Label htmlFor="new-password">New Password</Label>
        <Input
          type="password"
          id="newpassword"
          name="newpassword"
          placeholder="Enter your new password"
          onChange={handleChange}
        />
        <Button>Change password</Button>
      </form>
    </div>
  );
}
