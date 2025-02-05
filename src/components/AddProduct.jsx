import React, { useState } from "react";
import { useData } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { data, setData } = useData();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    category: "",
    stock: "",
    gender: "",
    frame_style: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { ...product };
    newProduct.price = parseFloat(newProduct.price);
    newProduct.stock = parseInt(newProduct.stock);

    setData([...data, newProduct]);
    navigate("/");
    setProduct({
      name: "",
      description: "",
      price: "",
      image_url: "",
      category: "",
      stock: "",
      gender: "",
      frame_style: "",
    });
  };

  return (
    <div className="flex w-full mt-10 items-center justify-center bg-gray-100 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image_url"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={product.image_url}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-gray-700 font-medium mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={product.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="frame_style"
              className="block text-gray-700 font-medium mb-2"
            >
              Frame Style
            </label>
            <input
              type="text"
              id="frame_style"
              name="frame_style"
              value={product.frame_style}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
