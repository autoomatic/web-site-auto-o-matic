
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <section id="benefits">
        <Benefits />
      </section>
      <section id="process">
        <Process />
      </section>
      <FinalCTA />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
