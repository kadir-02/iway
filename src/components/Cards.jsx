import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const { name, price, image_url, category, stock, id } = product;

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden w-60">
      <img src={image_url} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-gray-500 text-xs">Category: {category}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-bold text-lg text-green-500">
            ${price}
          </p>
          <p className="text-gray-500 text-xs">Stock: {stock}</p>
        </div>

        {/* View Button */}
        <div className="mt-3 w-full">
          <Link to={`/carddata/${id}`} className="w-full py-2 ">
            <button className="w-full py-2 font-semibold rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
