import Hero from "@/components/Hero";
import SearchCar from "@/components/SearchCar";
import CarGrid from "@/components/CarGrid";

export default async function Home() {


  return (
    <main className="overflow-hidden">
      <Hero />
      <CarGrid />
    </main>
  );
}
