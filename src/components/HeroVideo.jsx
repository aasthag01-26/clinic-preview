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
    <div className="p-3 bg-white rounded-xl shadow-md mt-6 md:mt-8">
      {/* Background Video */}
     <div className="p-3 bg-white rounded-xl shadow-md mt-6 md:mt-8">
  <video
    src="/rupanyavideo.mp4"
    autoPlay
    controls
    loop
    playsInline
    aria-label="Introduction video about Rupayna Clinic"
    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-lg border border-gray-200"
  >
    Your browser does not support the video tag.
  </video>
</div>

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
