import HeaderContent from "@/components/HeaderContent"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <div className="w-82 pt-45.25 pb-25">
          <h1 className="text-[64px] capitalize leading-[120%] text-black font-black">Вкусная еда ждет тебя!</h1>
          <Image className="absolute bottom-0 m-auto right-40 top-20 scale-[1.5]" src={"/hero-bg.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
          <Image className="absolute scale-[1.5] top-40 left-0" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
        <button className="bg-black mt-10 hover:bg-transparent hover:border hover:border-black hover:text-black text-white px-6 py-3 rounded-xl flex items-center gap-2">Посмотреть меню →</button>          
        </div>
      </div>
    </section>
  )
}

export default Hero