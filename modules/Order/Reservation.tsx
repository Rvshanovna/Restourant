"use client";

import Button from "@/components/Button";
import { Calendar, Clock, ChevronDown } from "lucide-react";

export default function ReservationPage() {
  return (
    <section className="p-10 rounded-[40px] mx-auto">
      
      <h1 className="text-[48px] font-semibold text-center mb-10">Хотите забронировать стол?</h1>
      <div className="space-y-6">
        <input placeholder="Ваш номер" className="text-[16px] w-full border-b border-black bg-transparent pb-2"/>
        <div className="flex border-b border-black pb-2 items-center">
          <input placeholder="На сколько человек?" className="w-full border-black bg-transparent text-[16px]" />
          <ChevronDown size={18} />
        </div>

        <div className="flex border-b border-black pb-2 items-center">
          <input placeholder="Выберите дату" className="w-full bg-transparent text-[16px]" />
          <Calendar size={18} />
        </div>

        <div className="flex border-b border-black pb-2 items-center">
          <input placeholder="Выберите время" className="w-full bg-transparent text-[16px]" />
          <Clock size={18} />
        </div>

        <div className="flex border-b border-black pb-2 items-center">
          <input placeholder="Выберите место" className="w-full bg-transparent text-[16px]" />
          <ChevronDown size={18} />
        </div>
        
        <p className="text-[13px] text-blue-500">Выбрать место на карте</p>
        <div className="flex justify-end">
          <Button title="Забронировать"/>
        </div>
      </div>
    </section>
  );
}