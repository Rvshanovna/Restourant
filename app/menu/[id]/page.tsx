import Image from "next/image";
import Text from "@/components/Text";
import WherePath from "@/components/WherePath";
import { dishes } from "@/modules/Menu/dishes";
import Counter from "@/components/Counter";
import { PopularDishes } from "@/modules";

type ParamsType = Promise<{ id: string }>;

const ProductMore = async ({ params }: { params: ParamsType }) => {
  const { id } = await params;

  const product = dishes.find(
    (item) => String(item.id) === id
  );
  if (!product) {
    return (
      <div className="text-center mt-20 text-xl text-red-700 text-[80px]">Product not found</div>
    );
  }

  return (
    <section className="hero-section mb-20!" data-aos="zoom-in">
      <div className="containers hero-bg pt-13.75 relative pb-25 px-17 rounded-[50px]">
        <WherePath pageName={product.title} pathName={"/menu"} />
        <Text title={product.title} />
        <div className="flex flex-col lg:flex-row items-center mt-15">
          <div className="w-179.75 h-179.75 relative">
            <Image src={product.image} alt={product.title} width={719} height={719} className="object-contain rounded-full"/>
          </div>
          <div>
            <h2 className="text-[40px] font-bold">{product.title}</h2>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[32px] font-semibold">{product.price}</span>
              <span className="text-yellow-400 text-[24px]">★★★★☆</span>
              <span className="text-gray-500 text-[18px]"> 4.0 (Смотреть отзывы) </span>
            </div>
            <h3 className="font-semibold text-[32px] mb-4">Описание:</h3>
            <p className="text-gray-600 mb-6 text-[24px]">{product.description}</p>

            <div className="flex items-center gap-4">
              <Counter />
              <button className="bg-black text-white px-6 py-3 text-[18px] rounded-lg hover:bg-gray-800 transition">В корзину</button>
            </div>
          </div>
        </div>
      </div>
        <PopularDishes />
    </section>
  );
};

export default ProductMore;