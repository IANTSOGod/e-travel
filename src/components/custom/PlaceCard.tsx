"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { motion } from "framer-motion";
import background from "@/assets/images/background.jpg";

export default function PlaceCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-1/5 h-3/4"
    >
      <div
        className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={background.src}
          alt="place"
          className="absolute top-0 left-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 w-full h-full">
          <Card className="bg-transparent w-full h-full flex flex-col justify-between">
            <CardHeader>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-row gap-x-3 w-fit px-5 rounded-2xl h-[30px] bg-red-400 -mt-5 -ml-3 shadow-md cursor-pointer"
              >
                <Heart className="pt-1 text-white" />
                <Label className="text-white">4</Label>
              </motion.div>
            </CardHeader>

            <CardFooter className="relative flex items-center justify-center h-[60px]">
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 rounded-xl text-center"
                >
                  <span className="text-white font-bold text-3xl dancing">
                    Titre du lieu
                  </span>
                </motion.div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
