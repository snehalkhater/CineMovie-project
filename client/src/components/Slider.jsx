import { useState, useEffect } from "react";

const images = [
  "/images1.png",
  "/images2.png",
  "/images3.png",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden flex items-center justify-center px-4">
     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#F2EFE7] to-transparent z-10" >
      <img
        src={images[current]}
        alt="movie banner"
        className="w-[200%] h-full object-contain transition-all duration-700"
      />
    </div>
    </div>
  );
}

export default Slider;