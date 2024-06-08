import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import TalentAcquisition from "@/components/TalentAcquisition";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="mt-16 flex h-screen w-full max-w-7xl flex-col p-4 lg:mt-0">
      <HeroSection />
      <Banner />
      <Partners />
      <WhatWeDo />
      <TalentAcquisition />
    </main>
  );
}
