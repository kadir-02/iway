import Carousel from "./Carousel";
import { useData } from "../context/DataProvider";
import Cards from "./Cards";
import { FaStar } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import NewArrivals from "./NewArrivals";
import Footer from "./Footer";
import { useState } from "react";

const Home = () => {
  const { data, toggleCartItem, cart, feturedata } = useData();
  const adv = [
    {
      num: "1 Cr+",
      name: "Eyewear Sold",
    },
    {
      num: "850+",
      name: "Stores",
    },
    {
      num: "4.9/5",
      name: "on Google",
    },
  ];

  const [genderFilter, setGenderFilter] = useState("all");

  const filteredData = data.filter((prod) => {
    if (genderFilter === "all") return true;
    return prod.gender === genderFilter;
  });

  return (
    <div
      id="home"
      className="mt-20 flex flex-col w-full h-auto items-center justify-center gap-10"
    >
      {/* Carousel */}
      <Carousel />

      {/* Banner Image */}
      <div className="w-full">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
          alt="Featured eyewear collection"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Featured Products Section */}
      <div className=" flex flex-col py-12 bg-gradient-to-b from-[#FEDE68] to-[#FEECAE] rounded-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-center uppercase mb-8 text-gray-800">
          Featured Products
        </h1>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {feturedata.map((prod, i) => (
              <div key={i} className="w-full">
                <Cards product={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Advertise*/}
      <div className="flex justify-between gap-20">
        {adv.map((v, i) => (
          <div className="text-center flex flex-col gap-5" key={i}>
            <p className="text-2xl font-semibold flex items-center gap-2  ">
              {v.name.startsWith("o") ? (
                <>
                  {v.num} <FaStar color="#FFDC5F" />
                </>
              ) : (
                v.num
              )}
            </p>
            <p className="text-xl text-zinc-600">{v.name}</p>
          </div>
        ))}
      </div>

      {/* Banner  */}
      <div
        className="container m-auto bg-cover bg-center rounded-lg relative"
        style={{
          backgroundImage:
            "url('https://d3995ea24pmi7m.cloudfront.net/fit-in/1120x180/media/wysiwyg/titan_cms/mini-section/mini_section_2_1.jpeg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="p-12 relative z-10">
          <p className="text-3xl font-semibold text-white">
            Not Sure What Looks Good
          </p>
          <p className="text-xl text-zinc-400  ">
            Try frames from home using our AI powered expert suggestions
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto px-4 py-12 bg-[#EFFCFE] rounded-lg">
        <h1 className="text-2xl md:text-3xl font-semibold text-center uppercase mb-8 text-gray-800">
          Products
        </h1>
        {/* Gender Filter */}
        <div className="flex justify-center gap-10 mb-15">
          <button
            className={`${
              genderFilter === "all"
                ? "text-[#35BBD1] font-semibold text-xl"
                : "text-black font-semibold text-xl"
            }`}
            onClick={() => setGenderFilter("all")}
          >
            <img
              className="object-cover w-full h-full rounded-full  "
              src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_sunglasses.png"
              alt=""
            />
            All
          </button>
          <button
            className={`${
              genderFilter === "male"
                ? "text-[#35BBD1] font-semibold text-xl"
                : "text-black font-semibold text-xl"
            }`}
            onClick={() => setGenderFilter("men")}
          >
            <img
              className="object-cover w-full h-full rounded-full  "
              src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_eyeglasses.png"
              alt=""
            />
            Male
          </button>
          <button
            className={`${
              genderFilter === "female"
                ? "text-[#35BBD1] font-semibold text-xl"
                : "text-black font-semibold text-xl"
            }`}
            onClick={() => setGenderFilter("women")}
          >
            <img
              className="object-cover w-full h-full rounded-full  "
              src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/women_sunglasses.png"
              alt=""
            />
            Female
          </button>
          <button
            className={`${
              genderFilter === "unisex"
                ? "text-[#35BBD1] font-semibold text-xl"
                : "text-black font-semibold text-xl"
            }`}
            onClick={() => setGenderFilter("unisex")}
          >
            Unisex
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredData.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={toggleCartItem}
              isAdded={cart.includes(prod.id)}
            />
          ))}
        </div>
      </div>

      {/*  Carousel  */}
      <Carousel />

      {/* New Arrivals  */}
      <NewArrivals />

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
