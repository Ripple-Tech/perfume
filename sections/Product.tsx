import { perfumeProducts } from "@/data/perfume";
import { ProductCard } from "@/components/ProductCard";

export default function PerfumeGrid() {
  return (
    <section id='products' className='container px-10 m-auto max-sm:mt-12 mt-20'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='section-title'>
        Our Quality  Perfume
      </h2>
      <p className='section-description'>
      Shop from brands that are known for their high-quality products,
        reputation for using high-quality 
      materials and construction techniques.
      </p>
    </div>


    <div className="grid p-5 items-center justify-center  overflow-hidden mt-16  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-6 ">
      {perfumeProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </section>
  );
}