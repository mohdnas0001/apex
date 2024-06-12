import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/Banner'));
const Footer = dynamic(() => import('@/components/Footer'));
const HeroSection = dynamic(() => import('@/components/HeroSection'));
const HireTalent = dynamic(() => import('@/components/HireTalent'));
const Newsletter = dynamic(() => import('@/components/Newsletter'));
const Partners = dynamic(() => import('@/components/Partners'));
const TalentAcquisition = dynamic(() => import('@/components/TalentAcquisition'));
const Team = dynamic(() => import('@/components/Team'));
const Testimonial = dynamic(() => import('@/components/Testimonial'));
const TestimonialSection = dynamic(() => import('@/components/TestimonialSection'));
const WhatWeDo = dynamic(() => import('@/components/WhatWeDo'));

export default function Home() {
  return (
    <main className="flex h-full w-full max-w-7xl flex-col">
      <HeroSection />
      <Banner />
      <Partners />
      <WhatWeDo />
      <TalentAcquisition />
      <TestimonialSection />
      <HireTalent />
      <Newsletter />
    </main>
  );
}
