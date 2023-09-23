import Hero from "@/components/Hero";
import SearchCar from "@/components/SearchCar";
import CarGrid from "@/components/CarGrid";

export default async function Home() {
  // const model = "corolla";

  // fetch(`https://api.api-ninjas.com/v1/cars?make=honda&&limit=20&&year=2023`, {
  //   method: "GET",
  //   headers: {
  //     "X-Api-Key": process.env.CAR_API_KEY,
  //   },
  // })
  //   .then((response) => {

  //     return response.json();
  //   })
  //   .then((data) => {

  //     console.log('Car data is ' + data);

  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Request failed:", error);
  //   });

  return (
    <main className="overflow-hidden">
      <Hero />
      <SearchCar />

      <CarGrid />
    </main>
  );
}
