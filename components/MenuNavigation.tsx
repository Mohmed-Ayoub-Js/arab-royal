"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HomeIcon, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const MenuNavigation = () => {
    const route = useRouter();
    const origin = window.location.origin;
    const currentPath = usePathname();
    console.log(currentPath);
    

    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <div className="flex flex-row p-2">
                                <span>
                                    {currentPath === "/" ? "الرئيسية" : "عن السيرفر"}
                                </span>
                            </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex justify-start items-center flex-col w-full p-0">
                            <NavigationMenuLink className="md:w-[200px] p-1 rounded-lg transition bg-gray-950 hover:bg-gray-800">
                                <div className="flex flex-row p-2" onClick={() => route.push(currentPath === "/about" ? "/" : "/about")}>
                                    <span>{currentPath === "/about" ? "الرئيسية" : "عن السيرفر"}</span>
                                    <div className="ml-auto">
                                        {currentPath === "/about" ? <HomeIcon className="h-4 w-4" /> : <Info  className="h-4 w-4" />}
                                    </div>
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default MenuNavigation;
