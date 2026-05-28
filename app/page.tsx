import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import FlavorExplosion from "@/components/flavor-explosion";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center py-6 md:py-12">
      <Hero />
      <FeaturedProducts />
      <FlavorExplosion />
      <Testimonials />
      <FAQ />
    </div>
  );
}
