import CarCard from "./CarCard";

export default function CarGrid() {
  return (
    <div className="mt-14 px-24">
        <div class="grid xl:grid-cols-4 gap-12">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
    </div>
  );
}
