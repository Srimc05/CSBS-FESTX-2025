import React from "react";
import { ExpandableCardDemo } from "./ui/expandablecard";

const Events = () => {
  return (
    <>
      <div className=" min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-200  text-center font-fell-english r mb-10 ">
          Events We do
        </h1>
        <div className="bg-black/20 p-5 rounded-lg mx-5 md:mx-20">
          <ExpandableCardDemo />
        </div>
      </div>
    </>
  );
};

export default Events;
