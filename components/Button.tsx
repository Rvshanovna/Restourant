import { ReactNode } from "react"

const Button = ({
  icon,
  title,
  extraClass,
  iconPosition
}:{
  icon?:ReactNode
  title?:string
  extraClass?:string
  iconPosition?:"left" | "right"
}) => {
  return (
    <button
      className={`bg-black border border-transparent hover:border-[#ffd903] text-white cursor-pointer duration-300 hover:bg-transparent hover:text-[#ffd903] flex items-center justify-center gap-2 rounded-[5px] px-4 py-2 ${extraClass}`}
    >
      {iconPosition === "left" && icon}
      {title && <span>{title}</span>}
      {iconPosition === "right" && icon}
    </button>
  )
}

export default Button