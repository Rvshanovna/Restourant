"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="p-10 rounded-[40px] text-center">
      <h1 className="text-[48px] text-black font-black mb-10">Связаться с нами</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col items-center gap-2">
          <Mail />
          <h3 className="font-medium text-[24px]">Напишите нам</h3>
          <p className="text-[16px]">info@msgoft.com</p>
          <p className="text-[16px]">t.me/bmgsoft.com</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Phone />
          <h3 className="font-medium text-[24px]">Позвоните нам</h3>
          <p className="text-[16px]">+998998877888</p>
          <p className="text-[16px]">+998998533222</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <MapPin />
          <h3 className="font-medium text-[24px]">Посетите нас</h3>
          <p className="text-[16px]">Узбекистан, Ташкент</p>
          <p className="text-[16px]">Улица, 24</p>
        </div>
      </div>
    </section>
  );
}