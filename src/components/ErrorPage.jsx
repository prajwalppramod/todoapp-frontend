import { Link } from "react-router-dom";
import carImage from "../assets/icon.jpg";
 
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-center">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto">
        <h1 className="text-8xl font-extrabold text-red-700 drop-shadow-lg">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">Oops! Wrong Turn Ahead!</h2>
        <p className="text-lg text-gray-700 mt-2 italic">
          "This road is closed! Let’s take a U-turn to safety!"
        </p>
 
        {/* Car Image */}
        <div className="mt-8 flex justify-center">
          <img
            src={carImage}
            alt="Broken Car"
            className="w-80 h-auto rounded-lg shadow-xl border-4 border-gray-300"
          />
        </div>
 
        <p className="text-lg text-gray-700 mt-6 italic">
          "Even the best drivers take a wrong turn sometimes!"
        </p>
 
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          🏠 Take Me Home
        </Link>
      </div>
    </div>
  );
};
 
export default ErrorPage;