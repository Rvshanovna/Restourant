import GalleryCard from "@/components/GalleryCard"
import Text from "@/components/Text"
import Button from "@/components/Button"
import { FaArrowRight } from "react-icons/fa"

const NewsGallery = () => {

  const gallery = [
    {
      id: 1,
      image: "/news1.png",
      description:
        "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня.",
      avatar: "/avatarSergey.svg",
      name: "Сергей",
    },
    {
      id: 2,
      image: "/news2.png",
      description:
        "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня.",
      avatar: "/avatarSergey.svg",
      name: "Сергей",
    },
    {
      id: 3,
      image: "/news3.png",
      description:
        "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня.",
      avatar: "/avatarSergey.svg",
      name: "Сергей",
    },
  ]

  return (
    <section className="py-12">
      <div className="containers">
        <Text title="Новости/Галерея" extraClass="text-center mb-32" />
        <div className="grid grid-cols-3 gap-16 justify-items-center">
          {gallery.map((item) => (
            <GalleryCard key={item.id} image={item.image} description={item.description} avatar={item.avatar} name={item.name}/>))}
        </div>
        <div className="flex justify-end mt-16">
          <Button title="Посмотреть все" icon={<FaArrowRight />} iconPosition="right" extraClass="text-[16px] px-8 py-4 rounded-[12px]"/>
        </div>
      </div>
    </section>
  )
}

export default NewsGallery