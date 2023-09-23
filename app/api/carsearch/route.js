import { NextResponse } from "next/server";

export async function GET(request) {

  const paramsSearch = request.url.split("?")[1];

  const res = await fetch(`https://api.api-ninjas.com/v1/cars?${paramsSearch}`, {
    headers: {
      "Content-Type": "application/json",
      'X-Api-Key': process.env.CAR_API_KEY,
    },
  });

  const carList = await res.json();

  // console.log('Car is ' + JSON.stringify(carList));


  return NextResponse.json({carList});
}
