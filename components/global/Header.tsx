import { social } from "@/data/Social"
import MenuNavigation from "../MenuNavigation"
import Logo from "../ui/Logo"
import DiscordButton from "./DiscordButton"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
      <div className="md:hidden flex items-center justify-between flex-row p-2">
        <Logo />
        <div className="flex justify-center items-center flex-col">
        <Sheet >
  <SheetTrigger>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  </SheetTrigger>
  <SheetContent side={"left"}>
    <SheetHeader className="flex justify-center items-center flex-col w-full">
      <SheetTitle>
        <Logo />
      </SheetTitle>
      <SheetDescription className="flex justify-center items-center flex-col">
      <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-5 items-center">
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
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </div>
  )
}

export default Header