import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Glowshine Clinic
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl"
        >
          Advanced Skin & Hair Treatments Backed by Science ✨
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={handleToggle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-6 py-3 bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          {isPlaying ? "Pause Video" : "Play Video"}
        </motion.button>
      </div>
    </div>
  );
}
