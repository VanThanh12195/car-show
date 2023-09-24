import Hero from "@/components/Hero";
import SearchCar from "@/components/SearchCar";
import CarGrid from "@/components/CarGrid";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default async function Home({ searchParams }) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <SearchCar />
      <Suspense key={JSON.stringify(searchParams)} fallback={<LoadingSkeleton/>}>
        <CarGrid searchParams={searchParams} />
      </Suspense>
      <Footer />
    </main>
  );
}
