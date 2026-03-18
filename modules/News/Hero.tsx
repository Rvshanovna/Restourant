"use client";

import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import News from "./News";
import Gallery from "./Gallery";

const Hero = () => {
  return (
    <section className="hero-section mb-20!">
      
      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <Text title="Новости" extraClass="pt-30 text-center" />
        <News />
        <Gallery />
        </div>
    </section>
  );
};

export default Hero;