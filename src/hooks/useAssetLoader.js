import { useState, useEffect } from "react";

export const useAssetLoader = (assetUrls) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = () => {
      const promises = assetUrls.map((url) => {
        return new Promise((resolve, reject) => {
          if (url.endsWith(".mp4") || url.endsWith(".webm")) {
            // It's a video
            const video = document.createElement("video");
            video.src = url;
            // 'canplaythrough' event fires when the browser can play the media, and estimates that playing will not have to stop for buffering.
            video.oncanplaythrough = () => resolve();
            video.onerror = () => reject(`Failed to load video: ${url}`);
            // Load the video metadata to trigger the events
            video.load();
          } else {
            // It's an image
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => reject(`Failed to load image: ${url}`);
          }
        });
      });

      Promise.all(promises)
        .then(() => {
          // Add a small delay to ensure smooth transition
          setTimeout(() => setIsLoading(false), 300);
        })
        .catch((error) => {
          console.error("Error preloading assets:", error);
          // Even if some assets fail, still show the page after a timeout
          setTimeout(() => setIsLoading(false), 1000);
        });
    };

    if (assetUrls && assetUrls.length > 0) {
      loadAssets();
    } else {
      setIsLoading(false); // No assets to load
    }
  }, [assetUrls]); // Re-run effect if the list of assets changes

  return isLoading;
};
