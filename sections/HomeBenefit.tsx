import { services } from "@/data";
import  ServiceCard  from "@/components/ServiceCard";

const Services = () => {
  return (
    <section className=' px-10 flex justify-center mt-11 mb-11 flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
