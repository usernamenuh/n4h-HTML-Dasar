import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const characters = [
  "/images/totoro.png",
  "/images/chihiro.png",
  "/images/haku.png",
  "/images/kiki.png",
];

export default function GhibliScrollEffect() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.min(
        Math.floor(scrollY / 300),
        characters.length - 1
      );
      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-blue-200 text-center p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Ghibli Anime Scroll Effect
      </h1>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2">
        <motion.img
          key={index}
          src={characters[index]}
          alt="Ghibli Character"
          className="w-64 h-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="mt-20 text-lg">Scroll down to see the character change!</p>
    </div>
  );
}
