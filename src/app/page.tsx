import Destinationsearch from "@/components/custom/Destinationsearch";
import Statsoverview from "@/components/custom/Statsoverview";
import Topexperiences from "@/components/custom/Topexperiences";
import Topplaces from "@/components/custom/Topplaces";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div>
      <div
        className={`w-full bg-[url('../assets/images/background.jpg')] bg-cover bg-center mt-[-70px] overflow-y-hidden`}
        style={{ height: "calc(100vh + 5px)" }}
      >
        <div className="md:pt-[200px] pt-[100px] md:ml-[150px] ml-[30px] ">
          <Label className="md:text-6xl text-4xl text-white dancing">
            It's Time For New
          </Label>
          <Label className="md:text-6xl text-4xl text-white dancing">
            Adventures,Escapes thrills &
          </Label>
          <Label className="md:text-6xl text-4xl text-white dancing">
            experiences
          </Label>
        </div>
        <Destinationsearch></Destinationsearch>
      </div>
      <Statsoverview></Statsoverview>
      <Topplaces></Topplaces>
      <Topexperiences></Topexperiences>
    </div>
  );
}
