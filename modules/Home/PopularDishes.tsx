"use client"

import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

const PopularDishes = () => {
  const dishes = [
    { id: 1, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodFirst.png" },
    { id: 2, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodSecond.svg" },
    { id: 3, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodThird.png" },
    { id: 4, title: "Chicken soup", description: "Spicy with garlic", price: "$10.00", image: "/foodFirst.png" },
  ]

  return (
    <section className="py-16 px-6 max-w-6xl containers">
      <h2 className="text-[48px] font-bold text-center mb-20">
        Популярные блюда
      </h2>
     <Image className="absolute scale-[1.5] top-330 left-5" src={"/leaf.png"} style={{width:"auto", height:"auto"}} alt="Hero bg" width={1000} height={732}/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white/45 backdrop-blur-md rounded-2xl p-6 relative flex flex-col items-center">
            <div className="w-53.5 h-50 -mt-20 mb-5 relative">
              <Image src={dish.image} alt={dish.title} width={214} height={200} className="object-contain rounded-full"/>
            </div>

            <div className="flex gap-20 text-black">
              <h3 className="font-semibold text-lg text-[20px]">{dish.title}</h3>
              <Heart className="hover:text-red-500 transition-300"/>
            </div>
            <p className="text-sm text-gray-500 pr-30">{dish.description}</p>
            <div className="flex justify-between items-center w-full mt-4">
              <span className="font-semibold">{dish.price}</span>
              <button className="bg-black text-white p-2 rounded-md">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
          
        ))}
      </div>
        <button className="bg-black mt-10 hover:bg-transparent hover:border hover:border-black hover:text-black text-white px-6 py-3 rounded-xl flex items-center gap-2 ml-260">Посмотреть меню →</button>          

    </section>
  )
}

export default PopularDishes
