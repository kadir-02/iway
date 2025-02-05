import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { useData } from "../context/DataProvider";
import { BiShoppingBag } from "react-icons/bi";

const ProductCard = ({ product, onAddToCart, isAdded }) => {
  const { name, price, image_url, id } = product;

  const { toggleCartItem } = useData();

  return (
    <div className="w-60 h-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
        />

        <div
          onClick={() => toggleCartItem(id)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md z-10 opacity-100 text-red-400 hover:text-white hover:bg-red-500 transition-all"
        >
          <BiShoppingBag className="w-5 h-5 font-bold" />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-2xl font-bold text-blue-500 mt-2 transition-colors duration-300">
          ${price}
        </p>

        <div className="mt-auto pt-4 flex space-x-2">
          <button
            onClick={() => onAddToCart(id)}
            className={`flex-1 py-2 px-4 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ${
              isAdded
                ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
            }`}
          >
            {isAdded ? "Added🎉" : "Add to Cart"}
          </button>

          <Link
            to={`/productdata/${id}`}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg hover:bg-[#D70654] hover:text-white transition-colors duration-300"
          >
            <BsEye className="w-5 h-5 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
