import Image from "next/image"
import { FaHeart, FaShoppingCart } from "react-icons/fa"

type Props = {
  title: string
  desc: string
  price: string
  image: string
}

const DishCard = ({ title, desc, price, image }: Props) => {
  return (
    <div className="relative w-[220px] pt-16 pb-6 px-6 rounded-[30px] bg-white/60 backdrop-blur-md">
      
      {/* image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <Image
          src={image}
          alt={title}
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 mt-10">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <FaHeart className="cursor-pointer"/>
        </div>

        <p className="text-sm text-gray-500">{desc}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">{price}</span>

          <button className="bg-black text-white p-2 rounded-lg">
            <FaShoppingCart />
          </button>
        </div>
      </div>

    </div>
  )
}

export default DishCard