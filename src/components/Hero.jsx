import { useEffect, useState } from "react";
import { images } from "../data/data";
import { ArrowDown, ChevronsDown } from "lucide-react";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const heroImages = Object.values(images.hero);

  // const images = [action2, action1, action3, action4];

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeState("fade-out");
    }, 4000); // Start fade out after 4s

    const nextImageTimeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setFadeState("fade-in");
    }, 4500); // Change image and fade in after 4.5s

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextImageTimeout);
    };
  }, [currentImageIndex, heroImages.length]);
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0 bg-black/20">
        <img
          src={heroImages[currentImageIndex]}
          alt="Skatepark"
          className={`w-full h-full  object-center object-cover mix-blend-overlay transition-opacity  ${
            fadeState === "fade-in" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4 uppercase font">
          <span className="text-yellow-500">gharla</span> skate school
        </h1>
        <p className="text-xl mb-8">Push Your Limits. Master The Board.</p>
        <div className="w-[200px] flex flex-col items-center">
          <a
            href="#plans"
            className="font w-full h-full justify-center flex flex-col items-center text-yellow-400  rounded-full text-lg font-bold transition-all"
          >
            <img src={images.skate} className="w-full mb-2" />
            <ChevronsDown className="text-yellow-400" size={"30px"} />
          </a>
        </div>
      </div>
    </header>
  );
};
