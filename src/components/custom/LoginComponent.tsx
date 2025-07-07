"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginInterface } from "@/interfaces/Login.interface";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function LoginComponent() {
  const [formdata, setdataform] = useState<LoginInterface>(
    {} as LoginInterface
  );
  const [userdata, setuserdata] = useState({});
  const [open, setOpen] = useState(false); // ✅ état pour contrôler le dialog

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdataform({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const { data, error } = await authClient.signIn.email(
      {
        email: formdata.email,
        password: formdata.password,
        rememberMe: false,
      },
      {
        onError(context) {
          if (context.response.status.toString().startsWith("4")) {
            alert(context.error.message);
          }
        },
      }
    );
    if (data) {
      setuserdata(data.user);
      console.log(data.user);
      setOpen(false); // ✅ fermer le dialog après succès
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="w-[150px] mr-[30px] border-red-400 border-2 text-red-400 hover:bg-red-400 hover:text-white"
          variant={"outline"}
        >
          Login
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form className="flex flex-col gap-y-5 px-5" onSubmit={handleSubmit}>
          <DialogTitle className="mb-5 mx-auto mt-5">Login</DialogTitle>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email here"
              className="mt-2"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <div className="gap-x-[200px] flex">
              <Label htmlFor="password">Password</Label>
              <Link
                href={"/request-reset"}
                className="text-blue-500 hover:underline"
                onClick={() => setOpen(false)}
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password here"
              className="mt-2"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <DialogFooter className="w-fit flex mt-10 mx-auto gap-x-[30px]">
            <DialogClose asChild>
              <Button
                type="button"
                className="w-[150px] border-red-400 border-2 text-red-400 hover:bg-red-400 hover:text-white"
                variant={"outline"}
              >
                Retour
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-[150px] bg-red-400 hover:bg-red-600 text-white"
            >
              Login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
