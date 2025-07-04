import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import PlaceCard from "./PlaceCard";
import TopplacesCaroussel from "./TopplacesCaroussel";

export default function Topplaces() {
  return (
    <div className="w-full h-[400px] bg-white flex">
      <div className="hidden md:flex flex-col bg-white w-1/4 h-full mx-[100px] gap-y-[30px] pt-[70px]">
        <div>
          <Label className="text-5xl dancing">Find the Perfect</Label>
          <Label className="text-5xl dancing">Place</Label>
        </div>
        <Label className="text-md text-gray-400 w-[350px]">
          A list of the best tourist places to see in world for a perfect
          holiday or a trip
        </Label>
        <Button className="w-[150px] bg-red-400 text-white hover:bg-red-700 rounded-3xl h-[50px]">
          View more
        </Button>
      </div>
      <div className="bg-blue-400 w-3/4 h-full hidden md:flex items-center justify-center gap-x-[30px]">
        <PlaceCard></PlaceCard>
        <PlaceCard></PlaceCard>
        <PlaceCard></PlaceCard>
        <PlaceCard></PlaceCard>
      </div>
      <div className="w-full h-auto flex md:hidden flex-col items-center justify-center gap-y-5">
        <div className="block md:hidden">
          <Label className="text-2xl dancing">Find the Perfect Place</Label>
        </div>
        <TopplacesCaroussel></TopplacesCaroussel>
        <Button className="w-[150px] bg-red-400 text-white hover:bg-red-700 rounded-3xl h-[50px]">
          View more
        </Button>
      </div>
    </div>
  );
}
