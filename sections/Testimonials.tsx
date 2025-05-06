"use client"
import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge'
const testimonials = [
    {
      text: "Our customer base doubled within the first year of offering Promoil perfumes — the response has been phenomenal.",
      imageSrc: avatar1.src,
      name: "Jamie Rivera",
      username: "@jamietechguru00",
    },
    {
      text: "Promoil allows us to bring luxurious, nature-inspired fragrances to a wider audience effortlessly.",
      imageSrc: avatar2.src,
      name: "Josh Smith",
      username: "@jjsmith",
    },
    {
      text: "Since switching to Promoil, our returns dropped and repeat purchases skyrocketed. Customers love the scent quality.",
      imageSrc: avatar3.src,
      name: "Morgan Lee",
      username: "@morganleewhiz",
    },
    {
      text: "From packaging to scent longevity, Promoil has transformed our product line into a premium experience.",
      imageSrc: avatar4.src,
      name: "Casey Jordan",
      username: "@caseyj",
    },
    {
      text: "Selling and managing our perfume inventory is smoother than ever. Promoil gives us peace of mind with reliable fulfillment.",
      imageSrc: avatar5.src,
      name: "Taylor Kim",
      username: "@taylorkimm",
    },
    {
      text: "Promoil's fast delivery and scent-matching suggestions have dramatically boosted customer satisfaction.",
      imageSrc: avatar6.src,
      name: "Riley Smith",
      username: "@rileysmith1",
    },
    {
      text: "Promoil’s support team is incredibly helpful — they handled every concern with care and professionalism.",
      imageSrc: avatar7.src,
      name: "Jordan Patels",
      username: "@jpatelsdesign",
    },
    {
      text: "Managing fragrance launches and marketing campaigns is simple and centralized with Promoil's platform.",
      imageSrc: avatar8.src,
      name: "Sam Dawson",
      username: "@dawsontechtips",
    },
    {
      text: "Integrating Promoil into our brand ecosystem was effortless. It elevated our workflow and customer experience.",
      imageSrc: avatar9.src,
      name: "Casey Harper",
      username: "@casey09",
    },
  ];

 const firstColumn = testimonials.slice(0, 3);
 const secondColumn = testimonials.slice(3, 6);
 const thirdColumn = testimonials.slice(6, 9);

 const TestimonialsColumn = (props: {
   className?: string; 
   testimonials: typeof testimonials;
   duration?: number
  }) => (
  
  <div className={props.className}>
   <motion.div 
   animate={{
     translateY: "-50%",
    }}
    transition={{
      repeat: Infinity, 
      repeatType: 'loop',
      duration: props.duration || 10,
      ease: 'linear',
    }}
     className="flex flex-col gap-6 pb-6">
     {[...new Array(2)].fill(0).map((_, index) => (
      <React.Fragment key={index}>
       {props.testimonials.map(({text, imageSrc, name, username}, index) => (
     <div className="card" key={username}> 
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
       <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />   
      </div>
      <div className="flex flex-col">
       <div className="font-medium tracking-tight leading-5">{name}</div>
       <div className="leading-5 tracking-tight">{username}</div>
      </div>
    </div>
      ))}

      </React.Fragment>
     ))}
  </motion.div>
  </div>
  )

export const Testimonials = () => {
  return (
    <section id="testimonials" className="px-10 bg-white mt-10">
      <div className="container">
        <div className="">
        
       <h2 className="section-title">What our customers say</h2>
       <p className="section-description">
        From intuitive design to powerful features, our platform has become an 
        essential tool for users around the world.
       </p>
       </div>
       <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15}/>
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19}/>
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17}/>
       </div>
      </div>
    </section>
  );
};