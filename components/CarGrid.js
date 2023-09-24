import CarCard from "./CarCard";
import NoResults from "./NoResults";

export default async function CarGrid({ searchParams }) {
  let searchParams1;

  JSON.stringify(searchParams) === "{}"
    ? (searchParams1 = "year=2023")
    : (searchParams1 = new URLSearchParams(searchParams).toString());

  const res = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=20&${searchParams1}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.CAR_API_KEY,
      },
    }
  );

  const carList = await res.json();

  let carCard = carList.map((car) => {
    return <CarCard key={car.make} car={car} />;
  });

  return (
    <div>
      <div className="mt-14 px-24 smCustom:px-10">
        {carCard.length === 0 ? (
          <NoResults />
        ) : (
          <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
            {carCard}
          </div>
        )}
      </div>
    </div>
  );
}
