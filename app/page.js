import Hero from "@/components/Hero";
import SearchCar from "@/components/SearchCar";
import CarGrid from "@/components/CarGrid";

export default async function Home({searchParams}) {

  return (
    <main className="overflow-hidden">
      <Hero />
      <SearchCar/>
      <CarGrid searchParams={searchParams}/>
    </main>
  );
}
