import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";

const Account = () => {
  const { data, cart } = useData();
  return (
    <div className="flex justify-between items-center md:flex-row flex-col px-20 mt-20">
      <div className="flex flex-col items-center ">
        <img
          className="size-48 rounded-full "
          src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_sunglasses.png"
          alt=""
        />
        <h1 className="text-2xl font-semibold mb-2">Hello Name</h1>
        <p className="font-medium ">Address :</p>
        <p>Karve Nagar, Pune India</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 m-5">
          <Link
            to={`/cart`}
            className="w-64 h-24 rounded-md flex place-content-center place-items-center text-white text-xl bg-red-500 hover:bg-red-600 "
          >
            Your Cart Items{" "}
            {cart.length > 0 ? (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cart.length}
              </span>
            ) : (
              0
            )}
          </Link>
          <Link
            to={`/cart`}
            className="w-64 h-24 rounded-md md:flex hidden place-content-center place-items-center text-white text-xl bg-blue-500 hover:bg-blue-600 "
          >
            Your Cart Items{" "}
            {cart.length > 0 ? (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cart.length}
              </span>
            ) : (
              0
            )}
          </Link>
          <Link
            to={`/cart`}
            className="w-64 h-24 rounded-md md:flex hidden place-content-center place-items-center text-white text-xl bg-green-500 hover:bg-green-600 "
          >
            Your Cart Items{" "}
            {cart.length > 0 ? (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cart.length}
              </span>
            ) : (
              0
            )}
          </Link>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Ordered History</h1>
          <ul className="flex flex-col justify-center gap-2  ">
            <li className="flex justify-around items-center bg-violet-500 rounded-md text-white text-xl ">
              <img
                src="https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/119/401/torchys-angled__56838.1650579895.jpg?c=1"
                alt=""
                className="w-24 m-2"
              />
              <p className="hidden xs:block">27/Jan/2025</p>
              <p>Successfully Delivered</p>
            </li>
            <li className="flex gap-2 justify-around items-center bg-teal-500 rounded-md text-white text-xl ">
              <img
                src="https://cdn11.bigcommerce.com/s-vexwbg4upx/images/stencil/1200x1200/products/119/401/torchys-angled__56838.1650579895.jpg?c=1"
                alt=""
                className="w-24 m-2"
              />
              <p className="hidden xs:block">27/Jan/2025</p>
              <p>Successfully Delivered</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
