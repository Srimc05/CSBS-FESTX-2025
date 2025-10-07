import React from "react";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <div className="relative pt-24 min-h-screen pb-0 flex flex-col">
      <div className="kenburns-bg" aria-hidden="true"></div>
      <div className="flex-1">
        <Events />
      </div>
    </div>
  );
};

export default EventsPage;
