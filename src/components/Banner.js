import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import Image from "next/image";
import background from "../assets/background.png";
import star from "../assets/Star.png";
import img1 from "../assets/first.png";
import img2 from "../assets/second.png";
import img3 from "../assets/third.png";
import banner from "../assets/banner.png";
import frame from "../assets/frame.png";

const Banner = () => {
  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="lg:mx-12">
        <Image src={star} alt="star" className="h-10 w-10" />
      </div>
      <div className="flex-1 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-[500px] flex flex-col items-center">
          <div className="pt-20 space-y-5 relative text-center lg:text-left">
            <Image
              src={background}
              alt="background"
              className="absolute -mt-36 ml-16 h-4/5 w-4/5"
            />
            <h1 className="text-3xl lg:text-5xl font-extrabold text-black drop-shadow-md">
              Make The Best Financial Decisions
            </h1>
            <p className="font-medium text-base lg:text-lg">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
              <button className="bg-black text-white text-lg py-4 hover:bg-black px-8 font-semibold rounded-md font-oswald flex justify-center items-center gap-3">
                Get Started <FaArrowRightLong />
              </button>
              <button className="bg-white hover:text-white text-black text-lg py-4 hover:bg-black px-8 font-semibold rounded-md font-oswald flex justify-center items-center gap-3">
                <FaRegPlayCircle className="text-3xl" /> Watch Video
              </button>
            </div>
          </div>
          <div>
            <Image src={banner} alt="banner" className="w-full lg:w-4/5 mt-5" />
          </div>
        </div>
        <div
          className="relative mt-10 lg:mt-36 flex justify-center items-center w-full lg:w-1/2"
          style={{
            backgroundImage: `url(${frame.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50%",
          }}
        >
          <Image
            src={img1}
            alt="image1"
            className="absolute left-1/4 lg:left-0 mt-6 lg:-ml-24 z-30"
          />
          <Image
            src={img2}
            alt="image2"
            className="absolute left-1/3 lg:left-1/3 mt-52 lg:mt-40 lg:-ml-6 z-20 transform lg:-translate-x-36"
          />
          <Image
            src={img3}
            alt="image3"
            className="absolute left-2/3 lg:left-2/3 mt-80 lg:mt-42 lg:-ml-5 z-10 transform lg:-translate-x-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
