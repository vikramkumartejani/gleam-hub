import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import WelcomeToGleamHub from "./components/WelcomeToGleamHub";
import WhyChooseUs from "./components/WhyChooseUs";
import SpeciallyCustomizedForYou from "./components/SpeciallyCustomizedForYou";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[#A87D52] px-4 md:px-6 lg:px-8 relative">
        <Image src='/assets/hero-shadow.svg' alt="shadow" width={300} height={300} className=" absolute top-0 right-0"/>
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-5">
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <WelcomeToGleamHub/>
      <SpeciallyCustomizedForYou/>
      <Image src='/assets/girls.svg' alt="girls" width={1440} height={672} className="w-full" />
      <WhyChooseUs/>
      <OurServices/>
      <Footer/>
    </div>
  );
}
