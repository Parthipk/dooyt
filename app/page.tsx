
import HeroSection from "@/components/sections/Herosection/Index"
import ModulesSection from "@/components/sections/ModulesSection/Index"
import FeatureSection from "@/components/sections/FeatureSection/index"
import IndustriesSection from "@/components/sections/IndustriesSection/Index"
import Advertisement from "@/components/sections/Advertisement/Index"
import Pricing from "@/components/sections/Pricing/Index"
import Advantage from "@/components/sections/Advantages/Index"
import Testimonials from "@/components/sections/Testimonials/Index"
import Faqs from "@/components/sections/Faqs/Index"



export default function Home() {
  return (
    <>
      <HeroSection />
      <ModulesSection />
      <FeatureSection />
      <IndustriesSection />
      <Advertisement/>
      <Pricing/>
      <Advantage/>
      <Testimonials/>
      <Faqs/>

    </>
  );
}
