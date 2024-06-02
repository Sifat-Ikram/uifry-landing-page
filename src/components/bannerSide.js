import Image from "next/image";
import img1 from "../assets/first.png";
import img2 from "../assets/second.png";
import img3 from "../assets/third.png";

const bannerSide = () => {
    return (
        <div>
            <Image src={img1} alt="image1" />
            <Image src={img2} alt="image2" />
            <Image src={img3} alt="image3" />
        </div>
    );
};

export default bannerSide;