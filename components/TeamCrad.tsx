// components/TeamCard.tsx
import Image from "next/image"

type TeamCardProps = {
  image: string
  name: string
  role: string
}

const TeamCard = ({ image, name, role }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-58.25 h-58.25 rounded-full border border-black/30 p-2">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image src={image} alt={name} width={180} height={180} className="object-cover w-full h-full"/>
        </div>
      </div>
      <h3 className="font-semibold text-[24px] text-black">{name}</h3>
      <p className="text-gray-700 text-[20px]"> {role} </p>
    </div>
  )
}

export default TeamCard