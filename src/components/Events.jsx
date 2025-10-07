import React from "react";
import { ExpandableCardDemo } from "./ui/expandablecard";

const Events = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-200 text-center font-fell-english mt-2 mb-6 lg:mb-8">
          Events We do
        </h1>
        <div className="bg-black/20 pt-2 pb-4 px-4 lg:pt-4 lg:pb-10 lg:px-12 rounded-lg mx-2 md:mx-20 mb-0">
          <ExpandableCardDemo />
        </div>
      </div>
    </>
  );
};

export default Events;
