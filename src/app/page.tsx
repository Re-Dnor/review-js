import FAQ from "./components/faq";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import LeadForm from "./components/lead-form";
import Pricing from "./components/pricing";
import Trust from "./components/trust";

export default function Page() {
  return (
    <main>
      <Hero />
      <Trust />
      <HowItWorks />
      <Pricing />
      <LeadForm />
      <FAQ />
    </main>
  );
}
