import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LucideGlobe } from "lucide-react";

export default function Statsoverview() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 w-full h-auto bg-gray-100 md:gap-x-[200px] md:px-[150px] px-5 md:gap-y-0 gap-y-5 pt-10 pb-10">
      <Card className="md:w-[300px] w-[200px]">
        <CardHeader>
          <LucideGlobe className="mx-auto mt-10"></LucideGlobe>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <Label className="text-orange-700 text-md">24000</Label>
          <Label className="font-bold text-sm md:text-md">
            Travel Experiences
          </Label>
        </CardFooter>
      </Card>
      <Card className="md:w-[300px] w-[200px]">
        <CardHeader>
          <LucideGlobe className="mx-auto mt-10"></LucideGlobe>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <Label className="text-orange-700 text-md">24000</Label>
          <Label className="font-bold text-sm md:text-md">
            Travel Experiences
          </Label>
        </CardFooter>
      </Card>
      <Card className="md:w-[300px] w-[200px]">
        <CardHeader>
          <LucideGlobe className="mx-auto mt-10"></LucideGlobe>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <Label className="text-orange-700 text-md">24000</Label>
          <Label className="font-bold text-sm md:text-md">
            Travel Experiences
          </Label>
        </CardFooter>
      </Card>
      <Card className="md:w-[300px] w-[200px]">
        <CardHeader>
          <LucideGlobe className="mx-auto mt-10"></LucideGlobe>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <Label className="text-orange-700 text-md">24000</Label>
          <Label className="font-bold text-sm md:text-md">
            Travel Experiences
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
}
