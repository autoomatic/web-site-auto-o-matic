
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
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold font-poppins">Auto 0 Matic</span>
            </div>
            <p className="text-white/80 font-dm-sans leading-relaxed mb-6 max-w-md">
              Escritório de automação de tarefas focado em médias e grandes empresas. 
              Transformamos processos manuais repetitivos em eficiência e economia para sua empresa.
            </p>
            <div className="text-sm text-white/60">
              <p>Ribeirão Preto e Região</p>
              <p>3 anos de experiência em automação</p>
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
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-white/80 hover:text-white transition-colors font-dm-sans"
                >
                  Nosso Processo
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
                  Ribeirão Preto/SP<br />
                  e Região
                </p>
              </div>
              <div>
                <p className="text-white/80 font-dm-sans">(16) 9 8837-4411</p>
              </div>
              <div>
                <p className="text-white/80 font-dm-sans">contato@auto0matic.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-dm-sans text-sm">
              © 2024 Auto 0 Matic – Automação Inteligente para Empresas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-white/60 font-dm-sans text-sm">
                Política de Privacidade
              </span>
              <span className="text-white/60 font-dm-sans text-sm">
                Termos de Uso
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
