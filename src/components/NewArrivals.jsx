import Cards from "./Cards";
import { useData } from "../context/DataProvider";
import "./NewArrivals.css";

const NewArrivals = () => {
  const { feturedata } = useData();

  return (
    <div className="container py-12 bg-gradient-to-b from-[#E1FFA1] to-[#E1FFA1] rounded-lg overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-semibold text-center uppercase mb-8 text-gray-800">
        New Arrival
      </h1>
      <div className="relative">
        <div className="animate-marquee flex space-x-4 transition-transform duration-10000 ease-linear">
          {feturedata.concat(feturedata).map((prod) => (
            <div key={prod.id} className="w-60">
              <Cards product={prod} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
