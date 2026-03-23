// components/OurComand.tsx
import TeamCard from "@/components/TeamCrad"
import Text from "@/components/Text"

type TeamMember = {
  id: number
  name: string
  role: string
  image: string
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Александр Петро",
    role: "главный повар",
    image: "/team1.png",
  },
  {
    id: 2,
    name: "Александр Петро",
    role: "помощник повара",
    image: "/team2.png",
  },
  {
    id: 3,
    name: "Александр Петро",
    role: "бургер кинг",
    image: "/team3.png",
  },
  {
    id: 4,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/team4.png",
  },
  {
    id: 5,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/team5.png",
  },
  {
    id: 6,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/team6.png",
  },
]

const OurComand = () => {
  return (
    <section>
      <div className="mx-auto flex flex-col gap-12">
        <Text title="Наша команда" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {teamData.map((item) => (
            <TeamCard key={item.id} image={item.image} name={item.name} role={item.role}/>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurComand