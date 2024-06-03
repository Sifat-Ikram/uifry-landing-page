import Image from "next/image";
import { GiStarShuriken } from "react-icons/gi";
import background from "../assets/background.png";
import frame from "../assets/frame.png";
import customize from "../assets/customize.png";
import star from "../assets/Star.png";

const Customizable = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Image src={star} alt="star" className="h-14 w-14" />
      </div>
      <div className="w-11/12 mx-auto mt-48 flex flex-col lg:flex-row-reverse justify-center items-center gap-5">
        <div className="flex flex-col w-1/2">
          <div className="flex justify-start items-center gap-2">
            <div className="bg-red-600 rounded-full p-1">
              <GiStarShuriken className="text-white rounded-full text-lg" />
            </div>
            <h1 className="text-black text-lg font-bold font-oswald">
              Fully Customizable
            </h1>
          </div>
          <p className="pr-20">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="relative flex-1 px-10 mt-28">
          <div>
            <Image src={background} alt="background" className="w-[600px] absolute -mt-64 -ml-8" />
          </div>
          <div className="z-10 absolute -mt-96">
            <Image src={frame} alt="frame" className="w-[900px] h-[700px]" />
          </div>
          <div className="z-20 absolute -mt-80 ml-36">
            <Image src={customize} alt="customize" className="h-[630px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
