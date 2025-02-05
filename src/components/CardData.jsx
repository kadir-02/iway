import { useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const CardData = () => {
  const { id } = useParams();
  const { feturedata, setFeturedata } = useData();
  const navigate = useNavigate();

  const product = feturedata.find((item) => item.id === id);

  const handleDelete = () => {
    const filteredData = feturedata.filter((item) => item.id !== id);
    setFeturedata(filteredData);
    navigate("/");
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <p className="text-3xl font-bold text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-screen flex items-center justify-center py-12">
      <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-contain md:object-cover"
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

            {/* Buttons Section */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate(`/`)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Home
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
