
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-accent text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">a</span>
              </div>
              <span className="text-2xl font-bold font-poppins">auto-o-matic</span>
            </div>
            <p className="text-white/80 font-dm-sans leading-relaxed mb-6 max-w-md">
              Simplifique sua transformação digital com nossa metodologia exclusiva. 
              Automação inteligente em semanas, não meses, com resultados garantidos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary mb-1 font-poppins">70%</div>
                <p className="text-sm text-white/70 font-dm-sans">Redução no tempo operacional</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1 font-poppins">95%</div>
                <p className="text-sm text-white/70 font-dm-sans">Diminuição de erros</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Nossa Metodologia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contato</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/80 font-dm-sans text-sm">
                  Av. Norma Valério Corrêa<br />
                  Jardim Botânico - Ribeirão Preto/SP
                </p>
              </div>
              <div>
                <p className="text-white/80 font-dm-sans">(16) 9 8837-4411</p>
              </div>
              <div>
                <p className="text-white/80 font-dm-sans">contato@autoomatic.app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-dm-sans text-sm">
              © 2024 auto-o-matic. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-white/60 font-dm-sans text-sm">
                Transformação Digital Simplificada
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
