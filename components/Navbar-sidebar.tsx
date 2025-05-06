import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
interface NavbarItem {
    href: string
    children: React.ReactNode
}
interface Props {   
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const NavbarSidebar = ({items, open, onOpenChange}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 border-b">
        <SheetHeader className="p-4 bg-gray-100 border-b">
          
            <SheetTitle className="text-lg font-semibold"> 
              Menu
            </SheetTitle>
          
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
            {items.map((item) => (
              <Link key={item.href} 
                href={item.href} 
                className="w-full text-left p-4 flex items-center font-medium text-gray-800 hover:bg-black hover:text-white text-base"
                onClick={() => onOpenChange(false)}>
                {item.children}
              </Link> 
            ))}
            
        </ScrollArea> 
        </SheetContent> 
    </Sheet>
  )
}



