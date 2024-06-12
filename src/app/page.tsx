"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Banner = dynamic(() => import("@/components/Banner"));
const Footer = dynamic(() => import("@/components/Footer"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const HireTalent = dynamic(() => import("@/components/HireTalent"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));
const Partners = dynamic(() => import("@/components/Partners"));
const TalentAcquisition = dynamic(
  () => import("@/components/TalentAcquisition")
);
const Team = dynamic(() => import("@/components/Team"));
const Testimonial = dynamic(() => import("@/components/Testimonial"));
const TestimonialSection = dynamic(
  () => import("@/components/TestimonialSection")
);
const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));

const Home = () => {
  const [refHero, inViewHero] = useInView({ triggerOnce: true });
  const [refBanner, inViewBanner] = useInView({ triggerOnce: true });
  const [refPartners, inViewPartners] = useInView({ triggerOnce: true });
  const [refWhatWeDo, inViewWhatWeDo] = useInView({ triggerOnce: true });
  const [refTalentAcquisition, inViewTalentAcquisition] = useInView({
    triggerOnce: true,
  });
  const [refTestimonialSection, inViewTestimonialSection] = useInView({
    triggerOnce: true,
  });
  const [refHireTalent, inViewHireTalent] = useInView({ triggerOnce: true });
    const [refTeam, inTeam] = useInView({ triggerOnce: true });

  const [refNewsletter, inViewNewsletter] = useInView({ triggerOnce: true });

  return (
    <main className="flex h-full w-full max-w-7xl flex-col">
      <motion.div
        ref={refHero}
        animate={{ opacity: inViewHero ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        ref={refBanner}
        animate={{ opacity: inViewBanner ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Banner />
      </motion.div>
      <motion.div
        ref={refPartners}
        animate={{ opacity: inViewPartners ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Partners />
      </motion.div>
      <motion.div
        ref={refWhatWeDo}
        animate={{ opacity: inViewWhatWeDo ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <WhatWeDo />
      </motion.div>
      <motion.div
        ref={refTalentAcquisition}
        animate={{ opacity: inViewTalentAcquisition ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <TalentAcquisition />
      </motion.div>
      <motion.div
        ref={refTestimonialSection}
        animate={{ opacity: inViewTestimonialSection ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <TestimonialSection />
      </motion.div>
      <motion.div
        ref={refHireTalent}
        animate={{ opacity: inViewHireTalent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <HireTalent />
      </motion.div>
      <motion.div
        ref={refTeam}
        animate={{ opacity: inViewNewsletter ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Team/>
      </motion.div>
      <motion.div
        ref={refNewsletter}
        animate={{ opacity: inViewNewsletter ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Newsletter />
      </motion.div>
    </main>
  );
};

export default Home;
