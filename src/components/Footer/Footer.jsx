import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-y w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
      <div className="py-4">
        <ul className="font-medium text-gray-500 text-center">
          <li className="inline px-1">
            <Link to="/React-Router-Crash-Course/" className="hover:underline">
              Home Page
            </Link>
          </li>
          <span>•</span>
          <li className="inline px-1">
            <a
              href="https://amankumarsinhagithub.github.io/Portfolio/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex justify-center text-center">
        <p className="mx-2">Copyright © 2024 •</p>
        <a
          href="https://amankumarsinhagithub.github.io/Portfolio/"
          className="hover:underline"
        >
          Aman Kumar Sinha
        </a>
        <p className="mx-2">• All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
