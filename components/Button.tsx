import { ReactNode } from "react"

const Button = ({icon, title, extraClass, iconPosition}:{icon?:ReactNode, title?:string, extraClass?:string, iconPosition?:"left" | "right"}) => {
  return (
    <button className={`bg-black border border-transparent hover:border-[#ffd903] text-[#FFFFFF] cursor-pointer duration-300 hover:bg-transparent hover:text-[#ffd903] flex items-center justify-center gap-1.5 rounded-[5px] py-1.25 px-2 ${extraClass}`}>
      {iconPosition == "left" && icon && icon}
      {title && <span className="text-[10px] leading-[150%]">{title}</span>}
      {iconPosition == "right" && icon && icon}
    </button>
  )
}
export default Button