import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>NotFound</h1>
      <button
        className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-all duration-200 "
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
