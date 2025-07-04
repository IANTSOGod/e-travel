"use client";
import illustration1 from "@/assets/images/illustration2.jpg";
import authillustration1 from "@/assets/images/auth_1.jpg";
import authillustration2 from "@/assets/images/auth_2.jpg";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import SignupInteface from "@/interfaces/Signup.interface";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function page() {
  // 1. Tableau d'images
  const images = [
    illustration1.src,
    authillustration1.src,
    authillustration2.src,
  ];

  // 2. Index courant
  const [imgIndex, setImgIndex] = useState(0);

  // 3. Change toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const router = useRouter();
  const [formdata, setformdata] = useState<SignupInteface>(
    {} as SignupInteface
  );

  const signup = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email: formdata.email,
        password: formdata.password,
        name: `${formdata.fname} ${formdata.lname}`,
      },
      {}
    );

    if (data) {
      console.log(data.user);
      alert("Verify your mail box");
      router.push("/");
    }

    if (error) {
      alert(error.message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup();
  };

  return (
    <div className="flex w-5/6 mx-auto justify-center mt-20 rounded-3xl border-l-2 border-r-2 overflow-hidden">
      <div className="w-1/2 h-[600px] relative overflow-hidden border-l-0 border-t-2 border-b-2 border-r-0 border-gray-200">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[imgIndex]}
            src={images[imgIndex]}
            alt="image"
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-1/2 h-[600px] flex flex-col gap-y-5 items-center border-r-0 border-t-2 border-b-2 border-l-2 overflow-hidden justify-center"
      >
        <Label className="text-3xl font-bold">Sign up</Label>

        <div className="mt-5">
          <Label htmlFor="fname">First name</Label>
          <Input
            name="fname"
            id="fname"
            type="text"
            placeholder="Enter your first name"
            className="mt-2 w-[300px]"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="lname">Last name</Label>
          <Input
            name="lname"
            id="lname"
            type="text"
            placeholder="Enter your last name"
            className="mt-2 w-[300px]"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email here"
            className="mt-2 w-[300px]"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="text"
            placeholder="Enter your password"
            className="mt-2 w-[300px]"
            onChange={handleChange}
            required
          />
        </div>

        <Button className="w-[300px] bg-red-400 text-white hover:bg-red-700">
          Sign up
        </Button>

        <Link href={"/"}>
          <Button className="w-[300px] border-red-400 border-2 text-red-400 hover:bg-red-400 hover:text-white bg-white">
            Retour
          </Button>
        </Link>
      </form>
    </div>
  );
}
