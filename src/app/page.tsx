import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HireTalent from "@/components/HireTalent";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import TalentAcquisition from "@/components/TalentAcquisition";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="mt-16 flex h-full w-full max-w-7xl flex-col lg:mt-0">
      <HeroSection />
      <Banner />
      <Partners />
      <WhatWeDo />
      <TalentAcquisition />
      <Testimonial />
      <Team />
      <HireTalent />
      <Newsletter />
    </main>
  );
}
