import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Home, User } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function Destinationsearch() {
  return (
    <div className="flex flex-col md:flex-row md:h-[150px] w-auto h-auto py-5 md:py-0 md:mx-[150px] mx-5 px-10 items-center md:mt-[120px] mt-10 bg-white">
      <Select defaultValue={"6730 Luna Land North"}>
        <SelectTrigger className="md:w-1/4 w-[300px] !h-[60px]">
          <div className="flex gap-x-[30px] items-center mx-auto">
            <div>
              <Home className="text-red-400"></Home>
            </div>
            <div>
              <Label className="text-gray-400">Accommodation</Label>
              <SelectValue className="text-black font-bold" />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Accommodation</SelectLabel>
            <SelectItem value={"6730 Luna Land North"} key={"1"}>
              6730 Luna Land North
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue={"19-01-2025"}>
        <SelectTrigger className="md:w-1/4 w-[300px] !h-[60px]">
          <div className="flex gap-x-[30px] items-center mx-auto">
            <div>
              <Calendar className="text-red-400"></Calendar>
            </div>
            <div>
              <Label className="text-gray-400">Check-in</Label>
              <SelectValue className="text-black font-bold" />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Check-in</SelectLabel>
            <SelectItem value={"19-01-2025"} key={"1"}>
              19-01-2025
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue={"19-01-2025"}>
        <SelectTrigger className="md:w-1/4 w-[300px] !h-[60px]">
          <div className="flex gap-x-[30px] items-center mx-auto">
            <div>
              <Calendar className="text-red-400"></Calendar>
            </div>
            <div>
              <Label className="text-gray-400">Check-Out</Label>
              <SelectValue className="text-black font-bold" />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Check-Out</SelectLabel>
            <SelectItem value={"19-01-2025"} key={"1"}>
              19-01-2025
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select defaultValue={"adult: 4,child: 2"}>
        <SelectTrigger className="md:w-1/4 w-[300px] !h-[60px]">
          <div className="flex gap-x-[30px] items-center mx-auto">
            <div>
              <User className="text-red-400"></User>
            </div>
            <div>
              <Label className="text-gray-400">Guests</Label>
              <SelectValue className="text-black font-bold" />
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Guests</SelectLabel>
            <SelectItem value={"adult: 4,child: 2"} key={"1"}>
              adult: 4,child: 2
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="md:w-[150px] w-[300px] h-[60px] bg-red-400 text-white hover:bg-red-700 md:ml-5 mt-3 md:mt-0">
        Search
      </Button>
    </div>
  );
}
