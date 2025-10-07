import React from "react";
import { ExpandableCardDemo } from "./ui/expandablecard";

const Events = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-200 text-center font-fell-english mt-6 mb-10 lg:mb-12">
          Events We do
        </h1>
        <div className="bg-black/20 p-4 lg:p-12 rounded-lg mx-2 md:mx-20 mb-0">
          <ExpandableCardDemo />
        </div>
      </div>
    </>
  );
};

export default Events;
