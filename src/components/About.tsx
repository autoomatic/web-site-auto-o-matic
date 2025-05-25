
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="text-lg text-accent/80 font-dm-sans leading-relaxed">
            Somos especialistas em transformação digital através da automação inteligente de processos. 
            Nossa missão é tornar a automação acessível, eficiente e transformadora para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2 font-poppins">Expertise Comprovada</h3>
                <p className="text-accent/70 font-dm-sans">
                  Anos de experiência em automação de processos de BackOffice, com foco em resultados mensuráveis.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-secondary rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2 font-poppins">Metodologia Exclusiva</h3>
                <p className="text-accent/70 font-dm-sans">
                  Nossa abordagem auto-o-matic garante implementação rápida e eficiente, sem complexidades desnecessárias.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2 font-poppins">Suporte Contínuo</h3>
                <p className="text-accent/70 font-dm-sans">
                  Monitoramento 24/7 e suporte especializado para garantir o máximo desempenho das suas automações.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-accent mb-6 font-poppins">Nossa Visão</h3>
            <p className="text-accent/80 font-dm-sans leading-relaxed mb-6">
              Acreditamos que a automação deve ser uma ponte para o crescimento, não um obstáculo. 
              Por isso, desenvolvemos soluções que se adaptam ao seu negócio, não o contrário.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1 font-poppins">100+</div>
                <p className="text-sm text-accent/70 font-dm-sans">Processos Automatizados</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1 font-poppins">50+</div>
                <p className="text-sm text-accent/70 font-dm-sans">Empresas Atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
