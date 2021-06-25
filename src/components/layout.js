import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/tailwindcss.svg";

const layout = () => {
  return (
    <div className="bg-gray-900 text-white p-5">
      <div className="flex justify-around md:justify-between w-full md:w-2/3 mx-auto">
        <div className="flex gap-3 my-auto">
          <Link to="/">
            <img src={Logo} alt="tailwindLogo" className="h-8 w-8" />
          </Link>
          <Link
            to="/"
            className="pr-5 text-2xl tracking-wider hidden md:inline-flex font-medium"
          >
            Bluewind
          </Link>
        </div>

        <ul className=" flex gap-4 my-auto">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/component">
            <li>Components</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default layout;
