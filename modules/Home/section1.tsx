import DishCard from "@/components/DishCard"

const Section1 = () => {

  const dishes = [
    {
      id: 1,
      title: "Chicken soup",
      desc: "Spicy with garlic",
      price: "$10.00",
      image: "/food1.png"
    },
    {
      id: 2,
      title: "Chicken soup",
      desc: "Spicy with garlic",
      price: "$10.00",
      image: "/food2.png"
    },
    {
      id: 3,
      title: "Chicken soup",
      desc: "Spicy with garlic",
      price: "$10.00",
      image: "/food3.png"
    },
    {
      id: 4,
      title: "Chicken soup",
      desc: "Spicy with garlic",
      price: "$10.00",
      image: "/food4.png"
    }
  ]

  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        Популярные блюда
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {dishes.map(item => (
          <DishCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  )
}

export default Section1