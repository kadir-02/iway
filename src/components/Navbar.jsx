import { useState, useEffect, useRef } from "react";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { FaBagShopping } from "react-icons/fa6";
import { BsEyeglasses } from "react-icons/bs";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const { data, cart } = useData();
  const [filteredData, setFilteredData] = useState([]);

  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim() === "") {
      setFilteredData([]);
      return;
    }

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(results);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredData([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleResultClick = () => {
    setSearchValue("");
    setFilteredData([]);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md border-b border-gray-300">
      <div className="flex items-center justify-between gap-50 h-16 px-6 max-w-screen-lg mx-auto">
        {/* Logo - Left Aligned */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl flex items-center md:text-3xl font-extrabold text-gray-800 hover:text-blue-600 transition duration-300"
          >
            <BsEyeglasses /> IWAY
          </Link>
        </div>

        {/* Search Bar - Centered  */}
        <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search the store"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full pl-10 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-300"
              />
            </div>
          </form>

          {/* Search Results */}
          {filteredData.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-md z-10 overflow-y-auto max-h-48">
              <ul className="list-none p-0">
                {filteredData.map((item) => (
                  <li
                    key={item.id}
                    className="p-3 hover:bg-gray-100 cursor-pointer transition duration-300"
                    onClick={handleResultClick}
                  >
                    <Link
                      to={`/carddata/${item.id}`}
                      className="block text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navbar Buttons - Right Aligned */}
        <div className="flex items-center ml-auto space-x-4 md:space-x-6">
          {/* Add Button */}
          <Link
            to="/add"
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
          >
            <FaPlus className="h-6 w-6 text-gray-700 hover:text-blue-600" />
          </Link>

          {/* Account Button */}
          <Link
            to="/account"
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
          >
            <FaUser className="h-6 w-6 text-gray-700 hover:text-blue-600" />
          </Link>

          {/* Cart - Right Aligned */}
          <div className="flex items-center">
            <Link to={`/cart`} className="relative">
              <FaBagShopping className="h-6 w-6 text-gray-700 hover:text-blue-600 transition duration-300" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
