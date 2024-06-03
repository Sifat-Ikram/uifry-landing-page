import Image from "next/image";
import star from "../assets/Star.png";

const Questions = () => {
  return (
    <div className="w-3/4 mx-auto mt-60">
      <div className="flex justify-start relative gap-24">
        <div className="">
          <h1 className="text-sm font-semibold text-red-600">FAQ</h1>
          <h1 className="text-5xl font-extrabold font-oswald text-black">
            Frequently Asked <br></br> Questions
          </h1>
        </div>
        <div className="flex-1 mt-20">
          <Image src={star} alt="star" className="h-10 w-10" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-5">
        <div className="p-5 rounded-md shadow bg-red-600 text-white">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="p-5 shadow-lg rounded-md">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="p-5 shadow-lg rounded-md">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="p-5 rounded-md shadow bg-red-600 text-white">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="p-5 rounded-md shadow bg-red-600 text-white">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
        <div className="p-5 shadow-lg rounded-md">
          <h1 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-sm mt-3">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
