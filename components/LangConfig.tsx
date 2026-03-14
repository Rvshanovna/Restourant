"use client"
import { ArrowDown } from "@/icons"
import Image from "next/image"
import { useState } from "react"

type LangType = {
  id: number
  name: string
  icon: string
}

const LangConfig = () => {
  const [langList, setLangList] = useState<LangType[]>([
    { id: 1, name: "Русский", icon: "/rusFlag.svg" },
    { id: 2, name: "English", icon: "/engFlag.svg" },
    { id: 3, name: "O'zbek", icon: "/uzbFlag.svg" },
  ])

  function handleChangeLang(item: LangType) {
    const newList = langList.filter(lang => lang.id !== item.id)
    setLangList([item, ...newList])
  }

  return (
    <div className="w-28.75 lang-wrapper flex cursor-pointer relative items-center gap-3.5">
      <Image src={langList[0].icon} alt="Flag" width={16} height={16} />
      <span className="text-[16px] leading-[150%] text-black">
        {langList[0].name}
      </span>
      <ArrowDown />

      <ul className="lang-inner absolute z-50 h-0 duration-300 overflow-hidden opacity-0 top-7 bg-black flex flex-col gap-2 w-full p-2 rounded-[5px]">
        {langList.slice(1).map(item => (
          <li
            onClick={() => handleChangeLang(item)}
            key={item.id}
            className="text-white flex items-center gap-2 p-1 hover:bg-white hover:text-black duration-300 rounded-[5px]"
          >
            <Image src={item.icon} alt="Flag img" width={16} height={16} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LangConfig