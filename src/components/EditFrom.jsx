import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";

const EditForm = () => {
  const { id } = useParams();
  const { data, setData } = useData();
  const navigate = useNavigate();

  const product = data.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-red-200">
        <p className="text-xl font-bold text-gray-600">Product not found!</p>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    category: product.category,
    stock: product.stock,
    gender: product.gender,
    frame_style: product.frame_style,
  });

  useEffect(() => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      image_url: product.image_url,
      category: product.category,
      stock: product.stock,
      gender: product.gender,
      frame_style: product.frame_style,
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = { ...formData, id };

    const updatedData = data.map((item) =>
      item.id === id ? updatedProduct : item
    );
    setData(updatedData);

    navigate(`/productdata/${id}`);
  };

  return (
    <div className="w-full mt-10 flex items-center justify-center py-12 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image_url"
              className="block text-gray-700 font-medium"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="stock" className="block text-gray-700 font-medium">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-gray-700 font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="frame_style"
              className="block text-gray-700 font-medium"
            >
              Frame Style
            </label>
            <input
              type="text"
              id="frame_style"
              name="frame_style"
              value={formData.frame_style}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
