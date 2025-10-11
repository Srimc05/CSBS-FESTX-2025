import React from "react";
import Events from "../components/Events";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const EventsPage = () => {
  // List of assets to preload for Events page
  const assetsToLoad = [
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/unlockx-post.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/gbu-post.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/code_heist.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/stellar_quest.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/wolf_gambit.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/anonymous.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/lootopoly.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/pitchers_gold.webp",
  ];

  const isLoading = useAssetLoader(assetsToLoad);

  // Show loading spinner while assets are loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Events | FESTX'25</title>
        <meta
          name="description"
          content="Explore all the exciting technical and non-technical events at FESTX'25. Find schedules, rules, and registration info here."
        />
      </Helmet>
      <div className="relative pt-24 min-h-screen pb-0 flex flex-col">
        <div className="kenburns-bg" aria-hidden="true"></div>
        <div className="flex-1">
          <Events />
        </div>
      </div>
    </>
  );
};

export default EventsPage;
