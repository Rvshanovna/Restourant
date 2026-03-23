"use client";

import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import NewsGallery from "../Home/NewGallery";
import Texts from "./Texts";
import OurFood from "./OurFood";
import OurWay from "./OurWay";
import OurComand from "./OurComand";
import Image from "next/image";
import WherePath from "@/components/WherePath";

const Hero = () => {
  return (
    <section className="hero-section mb-20!" data-aos="fade-down-right">
      <Image className="absolute top-100 right-0" src={"/rightLeaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
      <Image className="absolute top-150 left-0" src={"/leaf.png"} style={{width:"230px", height:"230px"}} alt="Hero bg" width={258} height={258}/>

      <Image className="absolute top-450 right-0" src={"/rightLeaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
      <Image className="absolute top-420 left-0" src={"/leaf.png"} style={{width:"230px", height:"230px"}} alt="Hero bg" width={258} height={258}/>
      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <WherePath pageName={"О нас"} pathName={"/news"} />
        <Text title="О нас" extraClass="pt-30" />
        <Texts />
        <OurFood />
        <OurWay />
        <OurComand />
        </div>
        <NewsGallery />
    </section>
  );
};

export default Hero;