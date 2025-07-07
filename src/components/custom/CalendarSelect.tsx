import React from "react";
import { Label } from "../ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";

interface CalendarProps {
  title: string;
  date: Date | undefined;
  setdate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function CalendarSelect({
  title,
  date,
  setdate,
}: CalendarProps) {
  return (
    <div className="md:w-1/4 w-[300px]">
      <Popover>
        <PopoverTrigger asChild className="!h-[60px] ">
          <Button
            variant="outline"
            className={cn(
              "w-full flex justify-center text-left font-normal border-slate-200 focus:border-blue-500",
              !date && "text-slate-500"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-red-400" />
            <div className="flex flex-col">
              <Label className="text-gray-400">{title}</Label>
              {date ? date.toLocaleDateString() : "Sélectionner a date"}
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setdate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
