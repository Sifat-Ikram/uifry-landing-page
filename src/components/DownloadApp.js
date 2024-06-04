import Image from "next/image";
import star from "../assets/Star.png";
import { IoLogoApple } from "react-icons/io5";
import phone from "../assets/phones.png";

const DownloadApp = () => {
  return (
    <div className="relative">
      <div className="flex justify-end px-3 relative">
        <div>
          <Image src={star} alt="star" className="h-14 w-14 mt-16 mr-10" />
        </div>
      </div>
      <div>
        <Image
          src={star}
          alt="star"
          className="h-14 w-14 mt-28 ml-12 absolute"
        />
      </div>
      <div className="w-3/4 mx-auto bg-black py-8 z-50 flex justify-between items-center rounded-md">
        <div className="space-y-5 pl-20 w-3/5">
          <h1 className="text-4xl font-extrabold text-white">
            Ready To Get Started?
          </h1>
          <h1 className="text-white text-base">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br></br>{" "}
            Vulputate.
          </h1>
          <button className="bg-white text-black flex justify-center items-center gap-2 text-lg py-3 rounded-md hover:bg-black px-8 font-semibold font-oswald">
            Download App <IoLogoApple />
          </button>
        </div>
        <div className="relative flex-1">
          <Image src={phone} alt="phone" className="h-[380px]" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
