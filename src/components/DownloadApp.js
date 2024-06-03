import Image from "next/image";
import background from "../assets/background.png";
import star from "../assets/Star.png";

const DownloadApp = () => {
  return (
    <div className="relative">
      <div className="flex justify-between px-3 relative">
        <div className="z-10">
          <Image
            src={background}
            alt="background"
            className="w-[400px] absolute -mt-16"
          />
        </div>
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
      <div className="w-3/4 mx-auto h-[400px] bg-black z-50">

      </div>
    </div>
  );
};

export default DownloadApp;
