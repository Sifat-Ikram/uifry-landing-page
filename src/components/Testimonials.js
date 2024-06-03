import Image from "next/image";
import star from "../assets/Star.png";
import background from "../assets/background.png";
import frame from "../assets/frame.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";

const Testimonials = () => {
  return (
    <div>
      <div className="flex justify-end mt-40 pr-32">
        <Image src={star} alt="star" className="h-14 w-14" />
      </div>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-black text-sm font-bold font-oswald uppercase text-center mt-10">
            Testimonial
          </h1>
          <h1 className="text-black text-3xl font-extrabold font-oswald uppercase text-center">
            what our users <br></br> say about us?
          </h1>
        </div>
        <div className="w-11/12 mx-auto mt-48 flex flex-col lg:flex-row-reverse justify-center items-center gap-20">
          <div className="flex flex-col w-2/5">
            <h1 className="text-xl font-extrabold font-oswald">
              The Best Financial Accounting <br></br> App Ever!
            </h1>
            <p className="pr-20 mt-5">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>
          <div className="relative flex-1 mt-28">
            <div>
              <Image
                src={background}
                alt="background"
                className="w-[600px] absolute -mt-64 -ml-6"
              />
            </div>
            <div className="z-10 absolute -mt-96 -pl-40">
              <Image src={frame} alt="frame" className="w-[900px] h-[700px]" />
            </div>
            <div className="z-20 absolute -mt-72 ml-24 w-3/4">
              <div className="flex justify-between">
                <Image src={user1} alt="user1" className="h-60 w-60" />
                <Image src={user2} alt="user2" className="h-60 w-60 ml-10" />
              </div>
              <div className="flex justify-center relative">
                <Image
                  src={user3}
                  alt="user3"
                  className="h-96 w-96 -mt-36 ml-24"
                />
              </div>
              <div className="flex justify-between -mt-40 relative">
                <Image src={user4} alt="user4" className="h-60 w-60" />
                <Image src={user5} alt="user5" className="h-60 w-60 ml-16 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
