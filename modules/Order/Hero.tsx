"use client";

import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import WorkHours from "./WorkHours";
import Reservation from "./Reservation";  
import Contact from "./Contact";
import NewsGallery from "../Home/NewGallery";
import Image from "next/image";
import WherePath from "@/components/WherePath";

const Hero = () => {
  return (
    <section className="hero-section mb-20!" data-aos="zoom-in-down">
        <Image className="absolute top-420 right-0" src={"/rightLeaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
        <Image className="absolute top-420 left-0" src={"/leaf.png"} style={{width:"230px", height:"230px"}} alt="Hero bg" width={258} height={258}/>

      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <WherePath pageName={"Бронирование"} pathName={"/news"} />
        <Text title="Бронирование" extraClass="pt-30 text-center" />
        <Image className="absolute scale-[1.5] top-205 left-0" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
        <Image className="absolute -z-10 top-300 left-135" src={"/leaf.png"} style={{width:"258", height:"258"}} alt="Hero bg" width={258} height={258}/>
        <Image className="absolute top-110 right-0" src={"/rightLeaf.png"} style={{width:"252", height:"252"}} alt="Hero bg" width={252} height={252}/>

        <WorkHours />
        <Reservation />
        <Contact />
        </div>
        <NewsGallery />
    </section>
  );
};

export default Hero;