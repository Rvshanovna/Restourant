import { EmailIcon, Person, PhoneIcon } from "@/icons"
import Link from "next/link"
import Button from "./Button"
import LangConfig from "./LangConfig"

const Header = () => {
    return (
        <div>
            <header className="pt-5 pb-12">
                <div className="containers flex items-center justify-between">
                    <div className="flex items-center gap-7">
                        <Link href={"tel:+998(90)758383833"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
                            <PhoneIcon />
                            <span className="text-[16px] leading-[100%]">+998(90)758383833</span>
                        </Link>
                        <Link href={"mailto:info@bmgsoft.com"} className="flex hover:text-[#ffd903] duration-300 items-center text-black gap-3">
                            <EmailIcon />
                            <span className="text-[16px] leading-[100%]">info@bmgsoft.com</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-9">
                        <LangConfig />
                        <Button title="Вход в аккаунт" icon={<Person />} iconPosition="left"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header