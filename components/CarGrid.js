import CarCard from "./CarCard";
import SearchCar from "./SearchCar";



export default function CarGrid() {

  async function searchQuery(carData) {
    'use server'
    const res = await fetch(`https://api.api-ninjas.com/v1/cars?${carData}`, {
      headers: {
        "Content-Type": "application/json",
        'X-Api-Key': process.env.CAR_API_KEY,
      },
    });

    const carList = await res.json();

    // console.log('carlist is ' + JSON.stringify(carList));

    let carCard1 = carList.map((car) => {
      <CarCard />
    })
  
  }

  return (
    <div>
      <SearchCar search={searchQuery} />
      <div className="mt-14 px-24">
        <div class="grid xl:grid-cols-4 gap-12">
          {/* {carCard} */}
        </div>
      </div>
    </div>
  );
}
