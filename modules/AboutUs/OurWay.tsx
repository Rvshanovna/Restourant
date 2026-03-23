import Button from "@/components/Button"
import Image from "next/image"

const OurWay = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="relative w-full">
          <div className="rounded-[30px] overflow-hidden shadow-lg">
            <Image src="/OurWay.png" alt="Our Food" width={503} height={676} className="object-cover w-full h-full"/>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-[42px] font-bold text-black"> Наш путь </h1>
          <p className="text-black leading-relaxed text-[20px]">
            С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши.
          </p>
          <p className="text-black leading-relaxed text-[20px]">
            Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, такие как создание меню, наполненного свежими и захватывающими новыми вкусами; активация лучших в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообществах – и о нашей планете – которую мы называем домом.
          </p>
          <div>
            <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 w-fit">Посмотреть меню →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWay