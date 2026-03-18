import { LogoIcon } from "@/icons";
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-white/20 backdrop-blur-lg border-t border-white/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <LogoIcon />
          <div className="flex gap-4 text-xl text-black/70">
            <a href="#" className="hover:text-black transition duration-300"><FaTelegramPlane /></a>
            <a href="#" className="hover:text-black transition duration-300"><FaWhatsapp /></a>
            <a href="#" className="hover:text-black transition duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-black transition duration-300"><FaInstagram /></a>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-black/70">
          <h3 className="text-[25px] font-semibold text-black mb-2">Наши услуги</h3>
          <a href="#" className="hover:text-black transition text-[16px]">Цены</a>
          <a href="#" className="hover:text-black transition text-[16px]">Отслеживание</a>
          <a href="#" className="hover:text-black transition text-[16px]">Сообщить об ошибке</a>
          <a href="#" className="hover:text-black transition text-[16px]">Условия услуг</a>
        </div>
        <div className="flex flex-col gap-3 text-black/70">
          <h3 className="text-[25px] font-semibold text-black mb-2">Наша компания</h3>
          <a href="#" className="hover:text-black transition text-[16px]">Отчетность</a>
          <a href="#" className="hover:text-black transition text-[16px]">Свяжитесь с нами</a>
          <a href="#" className="hover:text-black transition text-[16px]">Управление</a>
        </div>
        <div className="flex flex-col gap-3 text-black/70">
          <h3 className="text-[25px] font-semibold text-black mb-2">Адрес</h3>
          <p>Узбекистан, Ташкент</p>
          <p>Улица, 24</p>
          <a href="tel:+998948488448" className="hover:text-black transition">+998 94 848 84 48</a>
          <a href="mailto:info@bmgsoft.com" className="hover:text-black transition">info@bmgsoft.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
