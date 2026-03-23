import Button from "@/components/Button"
import Image from "next/image"

const OurFood = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-[42px] font-bold text-black"> Наша еда </h1>
          <p className="text-black leading-relaxed text-[20px]">
            Наша страсть — создавать исключительные впечатления от еды по отличной цене. 
            От традиционных и современных блюд до наших собственных кулинарных творений, 
            таких как фаршированные тортеллони премиум-класса, наши свежеприготовленные 
            рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира.
          </p>
          <p className="text-black leading-relaxed text-[20px]">
            От «Пенне Роза» до японской лапши, салата «Мед» и всемирно известных макарон 
            с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты. 
            Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено 
            яркими и приятными вкусами.
          </p>
          <div>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 w-fit">Посмотреть меню →</button>
          </div>
        </div>

        <div className="relative w-full">
          <div className="rounded-[30px] overflow-hidden shadow-lg">
            <Image src="/OurFood.png" alt="Our Food" width={503} height={676} className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFood