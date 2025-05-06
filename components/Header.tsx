"use client" 
import {useState} from 'react';
import Promoil from '@/assets/promoil.png';
import {IoMenuOutline, IoCloseOutline} from 'react-icons/io5';
import {navItems} from '@/data/hero';
import Image from 'next/image';
import { NavbarSidebar } from './Navbar-sidebar';
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation"

interface Props {
    colorDeep: string;
}
interface NavbarItemProps {   
  href: string
  children: React.ReactNode
  isActive?: boolean
}
const NavbarItems = [
  { children: "Home", href: "/" },
  { children: "About", href: "/about" },
  { children: "Pricing", href: "/pricing" },
  { children: "Contact", href: "/contact" },
]

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
  return (
      <Button asChild variant="outline" className={cn("text-lg px-3.5 bg-transparent hover:bg-[#ff7011] rounded-full hover:border-primary border-transparent font-semibold text-gray-800 hover:text-gray-600",
       isActive && "text-white bg-[#ff7011] hover:bg-[#000] hover:text-white")}>
        <Link href={href}>
         {children}
        </Link>
      </Button>
  )
}

const Header = ({colorDeep}: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  
    return (
    <header className='flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:px-16 flex-col gap-4 px-4'>
      <div className='flex flex-row items-center justify-between lg:w-auto'>
      
        <div className = {`flex justify-center items-center border-2 h-18 w-18 rounded-lg p-1`} style={{borderColor: `${colorDeep}`}}>
          <Image src={Promoil} alt="promoil logo" className="w-full h-auto max-w-[60px]" width="50" height="80"/>
          
     
        </div>
        <button className="lg:hidden focus:outline-none focus:shadow-outline"  onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon color="black"/>
        </button>
        <NavbarSidebar items={NavbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
        </div>
      <nav className={`flex lg:items-center lg:justify-end lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300 ${openMenu ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'}`} >
      <div className=" items-center hidden gap-4 pr-6 lg:flex">
            {NavbarItems.map((item) => (
                <NavbarItem 
                   key={item.href}
                   href={item.href}
                   isActive={pathname === item.href}
                       >
                    {item.children}
                </NavbarItem>
        ))}
        </div>
        <Button 
          className={`px-10 py-3 md:text-base text-center text-sm`}
          type='button'
          style={{backgroundColor: `${colorDeep}`}}
        > Get Started</Button>
      </nav>
    </header>
  )
}

export default Header