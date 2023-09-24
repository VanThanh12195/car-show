import { revalidatePath } from "next/cache";
import CarCard from "./CarCard";
import SearchCar from "./SearchCar";

let carCard = [];

export default function CarGrid() {
  async function searchQuery(carData) {
    "use server";
    const res = await fetch(`https://api.api-ninjas.com/v1/cars?limit=20&${carData}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.CAR_API_KEY,
      },
    });

    const carList = await res.json();

    carCard = carList.map((car) => {
      return <CarCard car={car} />;
    });

    revalidatePath("/");
  }
  return (
    <div>
      <SearchCar search={searchQuery} />
      <div className="mt-14 px-24">
        <div class="grid xl:grid-cols-4 gap-12">{carCard}
       </div>
      </div>
    </div>
  );
}
