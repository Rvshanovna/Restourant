"use client";

import Image from "next/image";

export default function BookingPage() {
  const hours = [
    { day: "Понедельник", time: "10:00–23:00" },
    { day: "Вторник", time: "10:00–23:00" },
    { day: "Среда", time: "10:00–23:00" },
    { day: "Четверг", time: "10:00–23:00" },
    { day: "Пятница", time: "10:00–23:00" },
    { day: "Воскресенье", time: "11:00–22:00" },
  ];

  return (
    <section className="p-10 rounded-[40px]">
      <h1 className="text-[32px] text-black">Часы работы</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-3 max-w-md">
          {hours.map((item, i) => (
            <div key={i} className="flex justify-between border-b border-black pb-2 text-[20px]">
              <span className="text-black">{item.day}</span>
              <span className="text-black">{item.time}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Image src="/order.png" alt="wine" width={350} height={450} className="rounded-[30px]"/>
        </div>
      </div>
    </section>
  );
}