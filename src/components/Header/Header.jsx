import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 shadow">
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <ul className="flex m-4 font-medium">
          <li className="p-1 px-8">
            <NavLink
              to="/React-Router-Crash-Course/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="p-1 px-8">
            <NavLink
              to="/React-Router-Crash-Course/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>

          <li className="p-1 px-8">
            <NavLink
              to="/React-Router-Crash-Course/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>

          <li className="p-1 px-8">
            <NavLink
              to="/React-Router-Crash-Course/githubuserdata"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
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
