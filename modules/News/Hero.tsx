"use client";

import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import News from "./News";
import Gallery from "./Gallery";
import WherePath from "@/components/WherePath";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section mb-20!" data-aos="zoom-in">
      <Image className="absolute top-100 right-0" src={"/rightLeaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
      <Image className="absolute top-150 left-0" src={"/leaf.png"} style={{width:"230px", height:"230px"}} alt="Hero bg" width={258} height={258}/>

      <Image className="absolute top-420 right-0" src={"/rightLeaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
      <Image className="absolute top-420 left-0" src={"/leaf.png"} style={{width:"230px", height:"230px"}} alt="Hero bg" width={258} height={258}/>
      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <WherePath pageName={"Новости"} pathName={"/news"} />
        <Text title="Новости" extraClass="pt-30 text-center" />
        <News />
        <Gallery />
        </div>
    </section>
  );
};

export default Hero;