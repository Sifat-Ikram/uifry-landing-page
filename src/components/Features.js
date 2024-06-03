"use client";
import Image from "next/image";
import star from "../assets/Star.png";
import background from "../assets/background.png";
import frame from "../assets/frame.png";
import { useEffect, useState } from "react";
import feature from "../assets/feature.png";
import side from "../assets/side.png";

const Features = () => {
  const [features, setFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/features.json");
      const data = await res.json();
      setFeatures(data);
    };

    fetchData();
  }, []);

  if (!features) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center px-4 lg:px-0 mt-20">
      <div className="lg:pl-16">
        <Image src={star} alt="star" className="h-14 w-14" />
      </div>
      <div className="flex-1 flex justify-center items-center -ml-16">
        <div className="relative w-1/2 px-10">
          <div>
            <Image src={background} alt="background" className="w-[400px]" />
          </div>
          <div className="z-10 absolute -mt-96">
            <Image src={frame} alt="frame" className="w-[900px] h-[550px]" />
          </div>
          <div className="z-10 absolute -mt-96 ml-36">
            <Image
              src={feature}
              alt="feature"
              className="h-[600px]"
            />
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="flex flex-col w-3/4 -ml-10">
            <h1 className="text-red-600 text-md font-semibold">FEATURES</h1>
            <h1 className="text-black text-4xl font-extrabold">
              Uifry Premium
            </h1>
            <div>
              {features?.map((item) => (
                <div key={item.id} className="mt-4">
                  <h1 className="text-md font-bold">{item.title}</h1>
                  <h1 className="text-sm">{item.details}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute pl-96 -pr-10">
            <Image src={side} alt="side" className="h-[270px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
