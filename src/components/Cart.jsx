import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";

const Cart = () => {
  const { data, cart, toggleCartItem } = useData();
  const navigate = useNavigate();

  const cartItems = cart.map((productId) =>
    data.find((item) => item.id === productId)
  );

  return (
    <div className="container mx-auto mt-10 text-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.{" "}
          <button
            className="px-4 py-2 rounded-md border border-purple-500 text-purple-500 "
            onClick={() => navigate("/")}
          >
            home
          </button>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center"
            >
              {" "}
              {/* Added styling */}
              <img
                src={product.image_url}
                alt={product.name}
                className="w-32 h-32 object-contain rounded-lg mr-4 md:mr-0 md:ml-4"
              />
              <div className="md:ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-sky-500 mt-2">
                  ${product.price}
                </p>
                <button
                  onClick={() => toggleCartItem(product.id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
