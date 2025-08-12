import FAQ from "./components/faq";
import { Header } from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import LeadForm from "./components/lead-form";
import Pricing from "./components/pricing";
import Trust from "./components/trust";
import { Analytics } from "@vercel/analytics/next";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Pricing />
        <LeadForm />
        <FAQ />
        <Analytics />
      </main>
    </>
  );
}
