import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import Customizable from "@/components/Customizable";
import DownloadApp from "@/components/DownloadApp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return <main>
    <Banner />
    <Features />
    <Advantages />
    <Customizable />
    <Testimonials />
    <Questions />
    <DownloadApp />
    <Footer />
  </main>;
}
