import React from "react";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <div
      className="pt-24 min-h-screen pb-0 flex flex-col"
      style={{
        backgroundImage: "url(/bg2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#000",
      }}
    >
      <div className="flex-1">
        <Events />
      </div>
    </div>
  );
};

export default EventsPage;
