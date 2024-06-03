import Image from "next/image";
import { IoNotificationsCircle } from "react-icons/io5";
import background from "../assets/background.png";
import frame from "../assets/frame.png";
import advantage from "../assets/advantage.png";
import star from "../assets/Star.png";

const Advantages = () => {
  return (
    <div className="flex justify-between mt-40">
      <div className="w-4/5 flex justify-center items-center gap-5 lg:ml-40">
        <div className="flex flex-col w-1/2">
          <h1 className="text-red-600 text-md font-semibold">Advantages</h1>
          <h1 className="text-black text-4xl font-extrabold">
            why choose Uifry?
          </h1>
          <div className="flex justify-start items-center gap-2 my-5">
            <IoNotificationsCircle className="bg-red-600 text-white rounded-full text-lg" />
            <h1 className="text-black text-lg font-bold">
              Clever Notifications
            </h1>
          </div>
          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="relative flex-1 px-10">
          <div>
            <Image src={background} alt="background" className="w-[400px]" />
          </div>
          <div className="z-10 absolute -mt-96">
            <Image src={frame} alt="frame" className="w-[900px] h-[550px]" />
          </div>
          <div className="z-10 absolute -mt-80 ml-36">
            <Image src={advantage} alt="advantage" className="h-[500px]" />
          </div>
        </div>
      </div>
      <div>
        <Image src={star} alt="star" className="h-14 w-14" />
      </div>
    </div>
  );
};

export default Advantages;
