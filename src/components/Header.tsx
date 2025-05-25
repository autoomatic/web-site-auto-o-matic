
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">a</span>
          </div>
          <span className="text-2xl font-bold text-primary font-poppins">auto-o-matic</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-accent hover:text-primary transition-colors font-dm-sans font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-accent hover:text-primary transition-colors font-dm-sans font-medium"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection('methodology')}
            className="text-accent hover:text-primary transition-colors font-dm-sans font-medium"
          >
            Nossa Metodologia
          </button>
          <button
            onClick={() => scrollToSection('solutions')}
            className="text-accent hover:text-primary transition-colors font-dm-sans font-medium"
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-accent hover:text-primary transition-colors font-dm-sans font-medium"
          >
            Contato
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-dm-sans"
        >
          Fale Conosco
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`w-6 h-0.5 bg-accent transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-accent transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-accent transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-accent hover:text-primary transition-colors font-dm-sans font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-accent hover:text-primary transition-colors font-dm-sans font-medium text-left"
            >
              Quem Somos
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-accent hover:text-primary transition-colors font-dm-sans font-medium text-left"
            >
              Nossa Metodologia
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-accent hover:text-primary transition-colors font-dm-sans font-medium text-left"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-accent hover:text-primary transition-colors font-dm-sans font-medium text-left"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white font-dm-sans w-full"
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
