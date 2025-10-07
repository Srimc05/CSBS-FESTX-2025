"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ExpandableCardDemo() {
  const navigate = useNavigate();
  const [inViewCards, setInViewCards] = useState(new Set());
  const cardRefs = React.useRef([]);

  const handleCardClick = (card) => {
    // Map event titles to their corresponding routes
    const routeMap = {
      "Summertime Sadness": "/anonymous",
      "Mitran Di Chhatri": "/code-heist",
      GBU: "/gbu",
      "Stairway To Heaven": "/lootopoly",
      "Toh Phir Aao": "/pitchers-gold",
      Hello: "/stellar-quest",
      "Shape of You": "/unlockx",
      Yellow: "/wolf-gambit",
      "Love Story": "/event9",
    };

    const route = routeMap[card.title];
    if (route) {
      navigate(route);
    }
  };

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.dataset.index);
          console.log(
            `Card ${cardIndex} intersection:`,
            entry.isIntersecting,
            entry.intersectionRatio
          );
          setInViewCards((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(cardIndex);
            } else {
              newSet.delete(cardIndex);
            }
            console.log("In view cards:", Array.from(newSet));
            return newSet;
          });
        });
      },
      {
        threshold: 0.1, // Card is considered in view when 10% is visible
        rootMargin: "0px 0px 0px 0px",
      }
    );

    // Observe all card refs after they're rendered
    const timeoutId = setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-8 px-2 sm:px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
        {cards.map((card, index) => {
          const isFlipped = inViewCards.has(index);
          console.log(`Card ${index} isFlipped:`, isFlipped);

          return (
            <li
              key={card.title}
              ref={(el) => {
                cardRefs.current[index] = el;
                console.log(`Card ${index} ref set:`, el);
              }}
              data-index={index}
              className="relative h-[460px] sm:h-[500px] lg:h-[600px] perspective-1000"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                onClick={() => handleCardClick(card)}
              >
                {/* Card Front (Back of card) */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-black rounded-xl border-2 border-yellow-400 shadow-2xl"></div>

                {/* Card Back (Front of card) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-yellow-400 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 relative p-0">
                      <img
                        src={card.src}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="font-medium text-yellow-400 text-center font-pirata text-xl lg:text-2xl mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-center text-sm lg:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/anonymous.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <>
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        </>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/code_heist.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "GBU Event",
    title: "GBU",
    src: "/gbu.webp",
    eventSlug: "gbu",
    ctaText: "View Poster",
    ctaLink: "/event/gbu",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "/lootopoly.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "/pitchers_gold.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
  {
    description: "Adele",
    title: "Hello",
    src: "/stellar_quest.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          &quot;Hello&quot; by Adele is a soulful ballad that explores the
          emotions of love, loss, and nostalgia. Released as part of her
          critically acclaimed album, it became a global sensation. <br />{" "}
          <br /> Adele&apos;s powerful vocals and heartfelt lyrics have
          connected deeply with fans worldwide, earning her numerous awards and
          solidifying her reputation as one of the greatest contemporary
          singers.
        </p>
      );
    },
  },
  {
    description: "Ed Sheeran",
    title: "Shape of You",
    src: "/unlockx.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          &quot;Shape of You&quot; is Ed Sheeran&apos;s infectious pop hit
          blending dancehall, R&B, and pop elements. The song topped charts
          worldwide and became one of the most streamed tracks ever. <br />{" "}
          <br /> Its catchy rhythm and relatable lyrics about love and
          attraction showcase Ed Sheeran&apos;s songwriting genius and universal
          appeal.
        </p>
      );
    },
  },
  {
    description: "Coldplay",
    title: "Yellow",
    src: "/wolf_gambit.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          &quot;Yellow&quot; by Coldplay is a timeless rock ballad celebrating
          love and devotion. Its simple guitar riffs and emotive vocals have
          made it a fan favorite since its release. <br /> <br /> The song
          remains an iconic anthem for expressing heartfelt emotions and has
          been performed live countless times, enchanting audiences globally.
        </p>
      );
    },
  },
  {
    description: "Taylor Swift",
    title: "Love Story",
    src: "/pitchers_gold.webp",
    ctaText: "Play",
    ctaLink: "https://pplx.ai/AZ2",
    content: () => {
      return (
        <p>
          &quot;Love Story&quot; by Taylor Swift is a modern pop-country hit
          inspired by Romeo and Juliet. The song narrates a tale of young love,
          rebellion, and hope. <br /> <br /> With its catchy melody, heartfelt
          lyrics, and storytelling brilliance, it became a defining track in
          Taylor&apos;s early career, earning her widespread acclaim and a
          dedicated fan following worldwide.
        </p>
      );
    },
  },
];
