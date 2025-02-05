import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";

const ProductData = () => {
  const { id } = useParams();
  const { data, setData, toggleCartItem, cart } = useData();
  const product = data.find((item) => item.id === id);

  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-red-200">
        <p className="text-xl font-bold text-gray-600">Product not found!</p>
      </div>
    );
  }

  const handleDelete = () => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12">
      <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Side: Product Image */}
          <div className="md:w-1/2 p-4">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">
              {product.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-sky-600">
                  ${product.price}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Category: {product.category}
                </p>
                <p className="text-sm text-gray-600">Stock: {product.stock}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => toggleCartItem(product.id)}
                className={`${
                  cart.includes(product.id)
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-indigo-500 hover:bg-indigo-600"
                }  text-white font-semibold py-2 px-4 rounded-md transition duration-300`}
              >
                {cart.includes(product.id) ? "Added🎉" : "Add to Cart"}
              </button>

              <Link
                to={`/edit/${id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Edit Product
              </Link>

              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
