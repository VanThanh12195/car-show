"use client";

import toast, { Toaster } from "react-hot-toast";

export function CarCardViewMore() {
  function handleViewMore() {
    toast.success('Successfully created!');
  }

  return (
    <>
      <button
        className="active:scale-95 text-white bg-blue-700 hover:bg-blue-800 hover:opacity-90 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleViewMore}
      >
        View More
      </button>
      <Toaster />
    </>
  );
}

export function CarCardAddtoCart() {
  function handleAddtoCart() {}

  return (
    <button
      className=" active:scale-95 text-white bg-blue-700 hover:bg-blue-800  hover:opacity-90 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handleAddtoCart}
    >
      Add to cart
    </button>
  );
}
