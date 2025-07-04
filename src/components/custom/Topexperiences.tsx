import { Label } from "../ui/label";

export default function Topexperiences() {
  return (
    <div className="h-[450px] w-full bg-gray-200 flex flex-col px-5 justify-center">
      <Label className="text-xl font-bold md:ml-[100px]">
        Top rated experiences on Travel
      </Label>
      <div className="w-full h-2/3 bg-blue-300 mt-5"></div>
    </div>
  );
}
