import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 shadow w-full">
      <nav className="bg-white border-gray-200 text-lg">
        <ul className="flex font-medium">
          <li className="m-3">
            <NavLink
              to="/React-Router-Crash-Course/"
              className={({ isActive }) =>
                `block py-2 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="m-3">
            <NavLink
              to="/React-Router-Crash-Course/about"
              className={({ isActive }) =>
                `block py-2  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>

          <li className="m-3">
            <NavLink
              to="/React-Router-Crash-Course/contact"
              className={({ isActive }) =>
                `block py-2  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>

          <li className="m-3">
            <NavLink
              to="/React-Router-Crash-Course/githubuserdata"
              className={({ isActive }) =>
                `block py-2  duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
