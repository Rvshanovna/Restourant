import { BasketIcon, LikeIcon, LogoIcon } from '@/icons'
import Link from 'next/link'
import { BadgeAction } from '.'

const HeaderContent = () => {
    const navList = [
        {title:"Меню", path:"/menu"},
        {title:"Новости", path:"/news"},
        {title:"Бронирование", path:"/orders"},
        {title:"О нас", path:"/about-us"},
        {title:"Контакты", path:"/contact"},
    ]
  return (
    <div className='flex items-center justify-between'>
        <Link href={"/"}>
               <LogoIcon />
        </Link>
        <nav className='flex items-center gap-10.75'>
            {navList.map((item, index) => <Link className='text-[18px] hover:scale-[1.1] font-bold leading-[150%] text-[#000000] duration-300 hover:text-[#43390098]' key={index} href={item.path}>{item.title}</Link>)}
        </nav>
        <div className='flex items-center gap-6.25'>
            <BadgeAction icon={<LikeIcon />}/>
            <BadgeAction icon={<BasketIcon />} count={5}/>
        </div>
    </div>
  )
}

export default HeaderContent