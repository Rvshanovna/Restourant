import Feature from "@/components/Feature";
import { FaCarSide, FaPizzaSlice, FaUtensils } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import Text from "@/components/Text";

const WhyUs = () => {
  const why = [
    {
      id: 1,
      title: "Качественные продукты",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <FaUtensils />,
    },
    {
      id: 2,
      title: "Быстрая доставка",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <FaCarSide />,
    },
    {
      id: 3,
      title: "Вкусные рецепты",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <FaPizzaSlice />,
    },
    {
      id: 4,
      title: "Уютная атмосфера",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <MdRestaurantMenu />,
    },
    {
      id: 5,
      title: "Опытные повара",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <GiChefToque />,
    },
    {
      id: 6,
      title: "Обслуживания",
      description:
        "Входные билеты в музеи, для посещения достопримечательностей",
      icon: <HiUserGroup />,
    },
  ];

  return (
    <section className="py-24">
      <Text title="Почему именно мы?"/>

      <div className="containers ml-8 grid grid-cols-3 gap-16">
        {why.map((item) => (
          <Feature key={item.id} icon={item.icon} title={item.title} description={item.description}/>))}
      </div>
    </section>
  );
};

export default WhyUs;