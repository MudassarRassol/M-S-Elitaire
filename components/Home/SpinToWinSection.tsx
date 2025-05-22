"use client";

import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
// Place your spin.mp3 file in the public/sounds directory
const spinSound = "/sounds/spin.mp3";

const segments = [
  { color: "#fcba03", textColor: "#fff", text: "₹5 OFF", value: 5 },
  { color: "#e74c3c", textColor: "#fff", text: "₹20 OFF", value: 20 },
  { color: "#27ae60", textColor: "#fff", text: "₹30 OFF", value: 30 },
  { color: "#8e44ad", textColor: "#fff", text: "₹10 OFF", value: 10 },
  { color: "#2980b9", textColor: "#fff", text: "₹100 OFF", value: 100 },
  { color: "#c0392b", textColor: "#fff", text: "₹50 OFF", value: 50 },
  { color: "#d35400", textColor: "#fff", text: "₹15 OFF", value: 15 },
  { color: "#7f8c8d", textColor: "#fff", text: "SPIN AGAIN", value: "AGAIN" },
];

const SpinWheel = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<number | string | null>(null);
  const [hasSpunToday, setHasSpunToday] = useState(false);
  const [playSpin] = useSound(spinSound);

  const segmentAngle = 360 / segments.length;

  useEffect(() => {
    const lastSpin = localStorage.getItem("lastSpinDate");
    const today = new Date().toDateString();
    if (lastSpin === today) setHasSpunToday(true);
  }, []);

  const handleSpin = () => {
    if (hasSpunToday || isSpinning) return;

    playSpin();
    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * segments.length);
    const totalRotation = 360 * 5 + randomIndex * segmentAngle + segmentAngle / 2;

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 5s ease-out";
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    setTimeout(() => {
      setResult(segments[randomIndex].value);
      setIsSpinning(false);

      if (segments[randomIndex].value !== "AGAIN") {
        localStorage.setItem("lastSpinDate", new Date().toDateString());
        setHasSpunToday(true);
      } else {
        setTimeout(() => handleSpin(), 2000); // auto-respin on "AGAIN"
      }
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🎯 Spin & Win</h1>

      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg border-4 border-yellow-400 flex flex-col items-center justify-center text-center font-bold text-[#c79e60]">
            <span className="text-xs text-gray-500">Win Up To</span>
            <span className="text-lg md:text-xl font-extrabold">₹100 OFF</span>
          </div>
        </div>

        <div
          ref={wheelRef}
          className="w-full h-full rounded-full relative transition-transform duration-[5s] ease-out"
        >
          {segments.map((segment, index) => {
            const angle = index * segmentAngle;
            const x = 50 + 50 * Math.cos((angle - segmentAngle / 2) * (Math.PI / 180));
            const y = 50 + 50 * Math.sin((angle - segmentAngle / 2) * (Math.PI / 180));

            return (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${x}% ${y}%)`,
                  backgroundColor: segment.color,
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    transform: `rotate(${segmentAngle / 2}deg)`,
                    top: '20%',
                    left: '50%',
                    transformOrigin: 'left center',
                    color: segment.textColor,
                    fontWeight: 'bold',
                    fontSize: '0.7rem',
                  }}
                >
                  {segment.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-[20px] border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>
      </div>

      {/* Result Message */}
      <div className="mt-6 text-lg font-medium text-gray-700">
        {result && result !== "AGAIN" && <p>🎉 You won ₹{result} OFF!</p>}
      </div>

      <button
        onClick={handleSpin}
        disabled={isSpinning || hasSpunToday}
        className={`mt-6 px-6 py-2 text-white font-bold rounded ${
          isSpinning || hasSpunToday
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-600"
        }`}
      >
        {hasSpunToday ? "Come Back Tomorrow" : isSpinning ? "Spinning..." : "Spin Now"}
      </button>
    </div>
  );
};

export default SpinWheel;
