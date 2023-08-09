import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex justify-between items-center px-10 h-[2rem] bg-gray-300">
        <p>Some important Announcement </p>
        <p className="text-[#13263E] font-semibold">Register | Login</p>
      </div>
      <nav className=" md:flex justify-between px-5 py-4 sm:px-20 items-center bg-[#13263E]">
        <div className=" flex justify-between items-center h-[4rem]">
          <Link to="/">
            <p className="text-[24px] font-bold text-white">Anbuchi</p>
          </Link>
          <span
            className={`text-3xl cursor-pointer md:hidden block ${
              open ? "text-black" : ""
            }`}
            onClick={toggleNav}
          >
            {open ? (
              <i className="uil uil-times"></i>
            ) : (
              <i className="uil uil-bars"></i>
            )}
          </span>
        </div>

        <ul
          className={`z-40 md:flex md:justify-between gap-10 text-[20px] text-black md:text-white font-semibold  md:z-auto md:static absolute bg-white md:bg-[#13263E] w-full  left-[0rem] md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            open ? "opacity-100" : "opacity-0 "
          } transition-all ease-in duration-500`}
        >
          <li className="my-6 md:my-0">
            <a
              href="/"
              className="hover:text-[#a9bff9] duration-500 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="my-6 md:my-0">
            <Link
              to="/currencylist"
              className="hover:text-[#a9bff9] duration-500 cursor-pointer"
            >
              Currency Listing
            </Link>
          </li>

          <li className="my-6 md:my-0">
            <a className="hover:text-[#a9bff9] duration-500" href="/aboutus">
              About Us
            </a>
          </li>

          <li className="my-6 md:my-0">
            <a href="/contactus" className="hover:text-[#a9bff9] duration-500">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
