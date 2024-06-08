import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex h-screen w-full max-w-7xl flex-col items-center p-4">
      <HeroSection />
      <Banner />

      <Banner />

      <Banner />
    </main>
  );
}
