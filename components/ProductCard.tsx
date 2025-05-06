"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-animation"; 
import  Link  from "next/link" 
import star from "@/assets/star.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  rating?: number;
  imgURL: string;
  link: string;
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <BackgroundGradientAnimation
      size="120%"
      blendingValue="screen"
      containerClassName={cn(
        "relative rounded-2xl overflow-hidden shadow-xl w-full max-sm:w-full w-full max-w-[230px] h-[340px] flex flex-1 items-center justify-center p-5",
        className
      )} // relative rounded-2xl overflow-hidden shadow-xl w-full max-sm:w-full max-w-[230px] h-[340px] flex flex-1 items-center justify-center p-5
      //p-10 flex flex-1 flex-col border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full
      className="z-10"
    >
      <Link
        href={product.link}
        className="mt-0">
        <Image
          width={700}
          height={680}
          src={product.imgURL}
          alt={product.name}
          className="object-contain mb-4 items-center justify-center "
        />

        {product.rating && (
          <div className="flex items-center gap-2 mb-2">
            <Image src={star} alt="rating" width={20} height={20} />
            <span className="text-slate-700 font-medium text-sm">
              ({product.rating})
            </span>
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-coral-red font-bold text-xl">${product.price}</p>
      </Link>
    </BackgroundGradientAnimation>
  );
};
