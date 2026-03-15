"use client";

import { useState } from "react";
import { FaCalendarAlt, FaChevronDown, FaClock } from "react-icons/fa";
import Image from "next/image";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    people: "",
    date: "",
    time: "",
    location: "",
  });

  return (
    <section>
      <div className="flex items-center justify-between containers mb-4">
        <div className="flex items-center justify-center">
          <form className="relative w-90 ml-5 bg-[#d3d1d6] rounded-[28px] p-8 shadow-md flex flex-col gap-6">

      {/* icon */}
      <div className="absolute -top-5 left-15 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl">
        🍴
      </div>

      {/* title */}
      <h2 className="text-[22px] font-semibold mt-6">
        Забронировать стол
      </h2>

      {/* phone */}
      <input
        type="tel"
        placeholder="Ваш номер"
        className="w-full border-b border-gray-500 bg-transparent py-2 outline-none focus:bg-transparent focus:ring-0"
      />

      {/* people */}
      <div className="relative">
        <select className="w-full border-b border-gray-500 bg-transparent py-2 appearance-none outline-none focus:bg-transparent focus:ring-0">
          <option className="bg-gray-400!">На сколько человек?</option>
          <option className="bg-gray-400!">1</option>
          <option className="bg-gray-400!">2</option>
          <option className="bg-gray-400!">3</option>
          <option className="bg-gray-400!">4</option>
          <option className="bg-gray-400!">5+</option>
        </select>

        <FaChevronDown className="absolute right-0 top-3 text-gray-600 text-sm" />
      </div>

      {/* date */}
      <div className="relative">
        <input
          type="date"
          className="w-full border-b border-gray-500 bg-transparent py-2 outline-none focus:bg-transparent"
        />

        <FaCalendarAlt className="absolute right-0 top-3 text-gray-600 text-sm" />
      </div>

      {/* time */}
      <div className="relative">
        <input
          type="time"
          className="w-full border-b border-gray-500 bg-transparent py-2 outline-none focus:bg-transparent"
        />

        <FaClock className="absolute right-0 top-3 text-gray-600 text-sm" />
      </div>

      {/* location */}
      <div className="relative">
        <select className="w-full border-b border-gray-500 bg-transparent py-2 appearance-none outline-none focus:bg-transparent">
          <option>Выберите место</option>
          <option>Зал</option>
          <option>Терраса</option>
          <option>VIP</option>
        </select>

        <FaChevronDown className="absolute right-0 top-3 text-gray-600 text-sm" />
      </div>

      {/* map link */}
      <p className="text-[13px] text-blue-600 cursor-pointer">
        Выбрать место на карте
      </p>

      {/* button */}
      <button className="bg-black text-white py-3 rounded-lg text-[18px] hover:bg-gray-900 transition">
        Забронировать
      </button>
    </form>
        </div>
        <div>
          <Image className="m-auto scale-[1.5]" src={"/orderpage.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1025} height={936}/>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
