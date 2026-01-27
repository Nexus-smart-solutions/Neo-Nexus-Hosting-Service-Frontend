import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default Home;
