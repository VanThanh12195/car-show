"use client";

import { useState } from "react";

export default function SearchCar() {
  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    fuel: "Fuel",
    year: "Year",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      make: "",
      model: "",
      fuel: "Fuel",
      year: "Year",
    });
  };

  const handleSearch = async () => {
    if (!formData.make || !formData.model) {
      setNotification("Please enter values for Make and Model");
      setTimeout(() => {
        setNotification(null);
      }, 3000); // Hide notification after 3 seconds
      return; // Return early if either field is empty
    }

    let searchCar = {};

    if (formData.fuel === "Fuel" && formData.year === "Year") {
      const { make, model } = formData;
      searchCar = { make: make, model: model };
    } else {
      searchCar = formData;
    }

    // Send data to API route
    const res = await fetch("http://localhost:3000/api/carsearch", {
      method: "GET",
      body: JSON.stringify(searchCar),
    });

  
  };

  return (
    <div className=" flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1600px] mx-auto">
      <div className="bg-white padding-x">
        <h2 className="text-stone-900 text-3xl font-extrabold mb-2">
          Car Catalogue
        </h2>
        <p className="mt-1 text-lg text-stone-700 font-semibold mb-6">
          Explore our cars you might like.
        </p>
        {notification && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {notification}
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="flex flex-col">
            <label
              htmlFor="make"
              className="text-stone-600 text-sm font-medium"
            >
              Make
            </label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              placeholder="Audi"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="model"
              className="text-stone-600 text-sm font-medium"
            >
              Model
            </label>
            <input
              type="text"
              placeholder="a4"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="fuel"
              className="text-stone-600 text-sm font-medium"
            >
              Fuel
            </label>

            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Fuel</option>
              <option>Gas</option>
              <option>Electricity</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="text-stone-600 text-sm font-medium"
            >
              Year
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Year</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
            </select>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button
              className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none  hover:opacity-90"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-90"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
