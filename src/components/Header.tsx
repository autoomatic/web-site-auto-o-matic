
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+o+Auto-o-matic,+e+entender+como+ele+pode+me+ajudar+!+%3AD&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b1b826cf-807b-4117-bdfe-6291e8a9352c.png" 
              alt="Auto-o-Matic - Automação Inteligente"
              className="h-8 w-auto"
            />
            <span className="text-sm text-primary font-dm-sans hidden sm:block">Automatize tarefas, potencialize talentos.</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-accent hover:text-primary transition-colors font-dm-sans"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-accent hover:text-primary transition-colors font-dm-sans"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-accent hover:text-primary transition-colors font-dm-sans"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-accent hover:text-primary transition-colors font-dm-sans"
            >
              Nosso Processo
            </button>
            <Button
              onClick={openWhatsApp}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-accent" />
              )}
            </button>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-md p-4">
                <nav className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-accent hover:text-primary transition-colors font-dm-sans"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-accent hover:text-primary transition-colors font-dm-sans"
                  >
                    Quem Somos
                  </button>
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="text-accent hover:text-primary transition-colors font-dm-sans"
                  >
                    Benefícios
                  </button>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="text-accent hover:text-primary transition-colors font-dm-sans"
                  >
                    Nosso Processo
                  </button>
                  <Button
                    onClick={openWhatsApp}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-medium w-full"
                  >
                    Fale Conosco
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
