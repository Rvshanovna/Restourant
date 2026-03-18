import HeaderContent from "@/components/HeaderContent";
import Text from "@/components/Text";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categoryList = [
  { title: "Первые", path: "/menu/pervye" },
  { title: "Вторые", path: "/menu/vtorye" },
  { title: "Салаты", path: "/menu/salaty" },
  { title: "Напитки", path: "/menu/napitki" },
  { title: "Фаст-Фуд", path: "/menu/fast-food" },
];
const dishes = [
    { id: 1, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 2, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 3, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 4, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 5, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 6, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 7, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 8, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 9, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 10, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 11, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 12, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 13, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 14, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 15, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" },
    { id: 16, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.png" }
  ]

const Hero = () => {
  return (
    <section className="hero-section mb-10!">
      {/* Leafes */}
        <Image className="absolute top-135 right-10" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={300} height={300}/>
        <Image className="absolute scale-[1.5] top-215 left-6" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
        <Image className="absolute top-450 right-5" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={300} height={300}/>

      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <HeaderContent />
        <Text title="Меню" extraClass="pt-20 mb-15!" />
        <div className="flex justify-center">
          <div className="flex gap-2 bg-white/40 backdrop-blur-md p-2 rounded-full shadow-md mb-5">
            {categoryList.map((item, index) => (
              <Link key={index} href={item.path} className={`px-6 py-2 rounded-full text-[16px] transition duration-300
                 ${index === 0 ? "bg-white text-black shadow" : "text-black/70 hover:text-black"}`}>{item.title}
              </Link>
            ))}
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <Image className="absolute scale-[1.5] top-300 left-150 " src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white/45 backdrop-blur-md rounded-2xl p-6 relative flex flex-col items-center mt-30">
            <div className="w-53.5 h-50 -mt-25 mb-5 relative">
              <Image src={dish.image} alt={dish.title} width={214} height={200} className="object-contain rounded-full"/>
            </div>
            <div className="flex gap-18 text-black">
              <h3 className="font-semibold text-lg text-[20px]">{dish.title}</h3>
              <Heart className="hover:text-red-500 transition-300"/>
            </div>
            <p className="text-sm text-gray-500 pr-29">{dish.description}</p>
            <div className="flex justify-between items-center w-full mt-4">
              <span className="font-semibold">{dish.price}</span>
              <button className="bg-black text-white p-2 rounded-md">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
        <Image className="absolute scale-[1.5] top-400 left-0" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
      </div>
      </div>
    </section>
  );
};

export default Hero;