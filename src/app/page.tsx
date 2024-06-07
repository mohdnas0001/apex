import Clients from "@/components/Clients";
import Ellipse from "@/components/Ellipse";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex max-w-7xl w-full h-screen flex-col items-center justify-between gap-10 p-4">
      <Ellipse />
      <Clients/>
      <Services/>
      <Testimonials/>
    </main>
  );
}
