import { MountainIcon } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <MountainIcon className="mr-3" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            WEnergy
          </span>
        </a>
        <div className="flex md:order-2">
          <Link to={"/login"}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </Link>

          <button
            type="button"
            className="ml-3 text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:border-blue-600 dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
