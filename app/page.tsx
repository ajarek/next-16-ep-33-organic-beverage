import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center py-6 md:py-12">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
