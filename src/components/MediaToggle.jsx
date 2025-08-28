import { useState, useEffect } from "react";

export default function MediaToggle() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev); // switch every 5s
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Auto Toggle Between Image and Video
      </h2>

      {/* Image */}
      {!showVideo && (
        <img
          src="/assets/hero.jpg"
          alt="Clinic"
          className="w-4/5 max-w-xl rounded-xl shadow-lg"
        />
      )}

      {/* Video */}
      {showVideo && (
        <video
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          className="w-4/5 max-w-xl rounded-xl shadow-lg"
        />
      )}

      {/* Manual Toggle Buttons */}
      <div className="mt-6 space-x-4">
        <button
          onClick={() => setShowVideo(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Show Image
        </button>
        <button
          onClick={() => setShowVideo(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Show Video
        </button>
      </div>
    </div>
  );
}
