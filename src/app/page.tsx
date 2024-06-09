import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import HireTalent from "@/components/HireTalent";
import Partners from "@/components/Partners";
import TalentAcquisition from "@/components/TalentAcquisition";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="mt-16 flex h-screen w-full max-w-7xl flex-col lg:mt-0">
      <HeroSection />
      <Banner />
      <Partners />
      <WhatWeDo />
      <TalentAcquisition />
      <Testimonial />
      <Team />
      <HireTalent />
    </main>
  );
}
