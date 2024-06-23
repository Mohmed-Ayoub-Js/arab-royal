import { social } from "@/data/Social"
import MenuNavigation from "../MenuNavigation"
import Logo from "../ui/Logo"
import DiscordButton from "./DiscordButton"
import Link from "next/link"

const Header = () => {
  return (
    <div className=" h-[77px] fixed top-0 right-0 left-0 z-50" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="md:flex hidden justify-between flex-row p-2">
        <Logo />
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row gap-5 items-center">
            {social.map((item : any) => (
              <div key={item.route}> 
                <Link href={item.route}>
                  <img src={item.image} alt="" width={40} height={40} className=" rounded-full transition hover:scale-105" />
                </Link>
              </div>
            ))}
          </div>
          <DiscordButton title="الانضمام معنا في الديسكورد"/>
          <MenuNavigation />
        </div>
      </div>
      <div className="md:hidden flex  justify-between flex-row p-2">
        <Logo />
      </div>
    </div>
  )
}

export default Header