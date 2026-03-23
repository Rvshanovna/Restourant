"use client";

import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import WherePath from "@/components/WherePath";

const ContactPage = () => {
  return (
    <section className="hero-section mb-20!" data-aos="fade-up">
      <Image className="absolute scale-[1.5] top-250 left-0" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
      <Image className="absolute top-110 right-0" src={"/rightLeaf.png"} style={{width:"252", height:"252"}} alt="Hero bg" width={252} height={252}/>

      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
      <HeaderContent />
      <WherePath pageName={"Контакты"} pathName={"/news"} />
        <div className="max-w-6xl mx-auto text-center">
        <Text title="Контакты" extraClass="pt-30"/>
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-full bg-white/40 backdrop-blur group-hover:scale-110 transition">
              <FiMail className="text-3xl text-black" />
            </div>
            <h3 className="text-xl font-semibold">Напишите нам</h3>
            <p className="text-gray-700">info@bmgsoft.com</p>
            <p className="text-gray-700">t.me/bmgsoft.com</p>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-full bg-white/40 backdrop-blur group-hover:scale-110 transition">
              <FiPhone className="text-3xl text-black" />
            </div>
            <h3 className="text-xl font-semibold">Позвоните нам</h3>
            <p className="text-gray-700">+998908767888</p>
            <p className="text-gray-700">+998986533222</p>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 rounded-full bg-white/40 backdrop-blur group-hover:scale-110 transition">
              <FiMapPin className="text-[30px] text-black" />
            </div>
            <h3 className="text-xl font-semibold">Посетите нас</h3>
            <p className="text-gray-700">Узбекистан, Ташкент</p>
            <p className="text-gray-700">Улица, 24</p>
          </div>

        </div>

        <Text title="Написать нам" extraClass="pt-5"/>     

        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          <input type="text" placeholder="Ваше имя" className="w-full px-5 py-4 rounded-xl bg-white/50 backdrop-blur border border-[#585858] focus:outline-none focus:ring-2 focus:ring-black transition"/>
          <input type="email" placeholder="Ваш E-mail" className="w-full px-5 py-4 rounded-xl bg-white/50 backdrop-blur border border-black focus:outline-none focus:ring-2 focus:ring-black transition"/>
          <input type="text" placeholder="Ваш номер телефона" className="w-full px-5 py-4 rounded-xl bg-white/50 backdrop-blur border border-[#585858] focus:outline-none focus:ring-2 focus:ring-black transition"/>
          <textarea rows={4} placeholder="Ваше сообщение" className="w-full px-5 py-4 rounded-xl bg-white/50 backdrop-blur border border-[#585858] focus:outline-none focus:ring-2 focus:ring-black transition"/>
          <button className="self-end bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 hover:scale-105 transition-all">Отправить</button>
        </div>
      </div>
        </div>
    </section>
  );
};

export default ContactPage;