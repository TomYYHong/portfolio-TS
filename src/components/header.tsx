import { Link } from "react-router-dom";
import logo from "../assets/brand_logo.png";

export default function Header() {
  return (
    <div className="z-10 relative inset-x-0 top-0 mb-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-nonwrap items-center justify-between mx-auto p-4">
          <div className="flex justify-start items-center ">
            <Link to="/">
              <img
                className=" h-5 sm:h-10 md:h-15 lg:h-20 aspect-auto rounded"
                src={logo}
                alt="Tom Hong Logo"
              />
            </Link>
          </div>
          <div
            className=" w-full md:block md:w-auto sm:block sm:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="hidden lg:flex md:flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row sm:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
              <li>
                <Link to="/experience">
                  <button
                    type="button"
                    className="space-x-2 items-center border-0 rounded-full p-3 bg-neutral-600 hover:bg-[#bbb745] hover:brightness-100 duration-500 text-white"
                  >
                    Experience
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <button
                    type="button"
                    className="space-x-2 items-center border-0 rounded-full p-3 bg-neutral-600 hover:bg-[#bbb745] hover:brightness-100 duration-500 text-white"
                  >
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button
                    type="button"
                    className="space-x-2 items-center border-0 rounded-full p-3 bg-neutral-600 hover:bg-[#bbb745] hover:brightness-100 duration-500 text-white"
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
            <select className="sm:flex lg:hidden md:hidden justify-self-end">
              <option value="/experience">Experience</option>
              <option value="/projects">Projects</option>
              <option value="/contact">Contact</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
