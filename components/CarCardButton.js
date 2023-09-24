"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export function CarCardViewMore({ car }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function handleViewMore() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="active:scale-95 text-white bg-blue-700 hover:bg-blue-800 hover:opacity-90 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleViewMore}
      >
        View More
      </button>

      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-out duration-300"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                    <button
                      type="button"
                      className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                      onClick={closeModal}
                    >
                      <Image
                        src="/close.svg"
                        alt="close"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </button>

                    <div className="flex-1 flex flex-col gap-3">
                      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                        <Image
                          src="/car.webp"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize">
                        {car.make} {car.model}
                      </h2>

                      <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key, value]) => (
                          <div
                            className="flex justify-between gap-5 w-full text-right"
                            key={key}
                          >
                            <h4 className="text-grey capitalize">
                              {key.split("_").join(" ")}
                            </h4>
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  );
}

export function CarCardAddtoCart({ car }) {
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
