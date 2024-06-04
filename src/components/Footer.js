import Image from "next/image";
import img from "../assets/3d-fire-icon-isolated-on-transparent-background-3d-cartoon-simple-illustration-png.webp";
import { IoMail, IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-3/4 mx-auto ">
      <div className="mt-36 mb-20 flex justify-between">
        <div className="flex flex-col items-start space-y-3">
          <div className="flex justify-center items-center">
            <Image src={img} width={28} height={28} alt="logo" />
            <a className="text-3xl font-bold text-black font-oswald">uifry</a>
          </div>
          <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
            <IoMail className="text-red-600" /> Help@Frybix.Com
          </h1>
          <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
            <IoCall className="text-red-600" /> +1234 456 678 89
          </h1>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <div className="flex justify-center items-center">
            <a className="text-3xl font-bold text-black font-oswald">Links</a>
          </div>
          <h1 className="text-sm font-semibold cursor-pointer">Home</h1>
          <h1 className="text-sm font-semibold cursor-pointer">About Us</h1>
          <h1 className="text-sm font-semibold cursor-pointer">Bookings</h1>
          <h1 className="text-sm font-semibold cursor-pointer">Blog</h1>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <div className="flex justify-center items-center">
            <a className="text-3xl font-bold text-black font-oswald">Legal</a>
          </div>
          <h1 className="text-sm font-semibold cursor-pointer">Terms Of Use</h1>
          <h1 className="text-sm font-semibold cursor-pointer">
            Privacy Policy
          </h1>
          <h1 className="text-sm font-semibold cursor-pointer">
            Cookie Policy
          </h1>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <div className="flex justify-center items-center">
            <a className="text-3xl font-bold text-black font-oswald">Product</a>
          </div>
          <h1 className="text-sm font-semibold cursor-pointer">Take Tour</h1>
          <h1 className="text-sm font-semibold cursor-pointer">Live Chat</h1>
          <h1 className="text-sm font-semibold cursor-pointer">Reveiws</h1>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <div className="flex justify-center items-center">
            <a className="text-3xl font-bold text-black font-oswald">
              Newsletter
            </a>
          </div>
          <h1 className="text-sm font-semibold cursor-pointer">
            Stay Up To Date
          </h1>
          <div className="flex justify-center items-center">
            <input type="email" placeholder="Your email" className="py-4" />
            <button className="bg-black text-white py-4 px-8 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="text-black py-3 font-bold" />
      <p className="text-center text-base font-bold text-black">Copyright 2022 Uifry.Com All Rights Reserved</p>
    </div>
  );
};

export default Footer;
