
import { NextResponse } from 'next/server'
 
export async function GET(request) {

        // get the body of the reques
  const data = await request.json();


    console.log('Request is ' + data);

    // fetch("/api/carsearch", {
    //     method: "GET",
    //     headers: {
    //       "X-Api-Key": process.env.CAR_API_KEY,
    //     },
    //   })
    //     .then((response) => {
  
    //       return response.json();
    //     })
    //     .then((data) => {
  
    //       console.log('Car data is ' + data);
  
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.error("Request failed:", error);
    //     });


//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const product = await res.json()
 
  return null
}