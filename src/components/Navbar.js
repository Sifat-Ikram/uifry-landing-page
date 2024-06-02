import Image from "next/image";
import img from "../assets/3d-fire-icon-isolated-on-transparent-background-3d-cartoon-simple-illustration-png.webp";
import star from "../assets/Star.png"

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a
          href="/"
          className="font-semibold text-gray-700 font-oswald text-lg hover:text-red-600"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="font-semibold text-gray-700 font-oswald text-lg hover:text-red-600"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/pricing"
          className="font-semibold text-gray-700 font-oswald text-lg hover:text-red-600"
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="/features"
          className="font-semibold text-gray-700 font-oswald text-lg hover:text-red-600"
        >
          Features
        </a>
      </li>
    </>
  );
  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-100 lg:px-32 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <Image src={img} className="h-8 w-9" alt="logo" />
            <a className="text-4xl font-bold text-black font-oswald">uifry</a>
            <div className="navbar-center hidden lg:flex ml-20">
              <ul className="flex justify-center items-center gap-5">
                {navLinks}
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a className="bg-black text-white text-lg py-3 rounded-md hover:bg-black px-8 font-semibold font-oswald">
            Download
          </a>
        </div>
      </div>
      <Image src={star} alt="star" className="h-10 w-10 mt-10" />
    </div>
  );
};

export default Navbar;
