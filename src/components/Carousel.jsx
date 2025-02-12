import { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/2800x800-10.jpg",
      caption: "Slide 1",
    },
    {
      id: 2,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/2800x800-1_2.jpg",
      caption: "Slide 2",
    },
    {
      id: 3,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/2800x800-15_1.jpg",
      caption: "Slide 3",
    },
    {
      id: 4,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/2800x800-17_1_.jpg",
      caption: "Slide 4",
    },
    {
      id: 5,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/2800x800-16_1_.jpg",
      caption: "Slide 5",
    },
    {
      id: 6,
      image: "https://static5.lenskart.com/media/uploads/hustlr-desktop.gif",
      caption: "Slide 6",
    },
    {
      id: 7,
      image: "https://static5.lenskart.com/media/uploads/web-phonic-14jan.jpg",
      caption: "Slide 7",
    },
    {
      id: 8,
      image:
        "https://static5.lenskart.com/media/uploads/Web_DesktopBannerCreaTR.png",
      caption: "Slide 8",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full sm:h-64 md:h-80">
        {/* Carousel Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-zinc-200 transition md:left-6"
      >
        <BiLeftArrowAlt />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-zinc-200 transition md:right-6"
      >
        <BiRightArrowAlt />
      </button>

      {/* Pagination Dots (optional) */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
