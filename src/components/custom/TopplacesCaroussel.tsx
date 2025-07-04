import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function TopplacesCaroussel() {
  return (
    <Carousel className="md:hidden flex w-[300px] h-auto mx-auto justify-center items-center">
      <CarouselContent className="flex gap-x-5">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card
            className="bg-[url('../assets/images/background.jpg')] bg-cover bg-center w-[200px] h-[200px]"
            key={index}
          ></Card>
        ))}
      </CarouselContent>
      <CarouselPrevious></CarouselPrevious>
      <CarouselNext></CarouselNext>
    </Carousel>
  );
}
