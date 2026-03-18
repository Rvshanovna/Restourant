"use client";

import { BasketIcon, LikeIcon, LogoIcon } from '@/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BadgeAction } from '.';

const HeaderContent = () => {
  const pathname = usePathname();

  const navList = [
    { title: "Меню", path: "/menu" },
    { title: "Новости", path: "/news" },
    { title: "Бронирование", path: "/orders" },
    { title: "О нас", path: "/about-us" },
    { title: "Контакты", path: "/contact" },
  ];

  return (
    <div className='flex items-center justify-between'>
      <Link href={"/"}> <LogoIcon /> </Link>
      <nav className='flex items-center gap-10.75'>
        {navList.map((item, index) => {const isActive = pathname === item.path;
          return (
            <Link key={index} href={item.path} className={`text-[18px] font-bold leading-[150%] duration-300
                ${isActive ? "text-red-500 scale-[1.1]" : "text-black hover:text-[#43390098] hover:scale-[1.1]"}`}>{item.title}</Link>
          );
        })}
      </nav>
      <div className='flex items-center gap-6.25'>
        <BadgeAction icon={<LikeIcon />} />
        <BadgeAction icon={<BasketIcon />} count={5} />
      </div>
    </div>
  );
};

export default HeaderContent;