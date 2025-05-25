
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Solutions from "@/components/Solutions";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Methodology />
      <Solutions />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
