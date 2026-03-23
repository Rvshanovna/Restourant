import { RightSmall } from "@/icons"
import Link from "next/link"
const WherePath = ({ pageName, pathName }: { pageName: string, pathName: string }) => {
    return (
        <div className="flex gap-1 mt-30">
            <Link href="/" className="cursor-pointer text-[18px] text-[#626464] leading-[150%]">Главная</Link>
            <div className="mt-1.5">
                <RightSmall />
            </div>
            <Link href={pathName} className="cursor-pointer text-[18px] text-black leading-[150%]">{pageName}</Link>
        </div>
    )
}

export default WherePath
