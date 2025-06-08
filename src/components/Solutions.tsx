
const Solutions = () => {
  const solutions = [
    {
      title: "auto-o-matic serviços RPA",
      description: "Identificamos e transformamos oportunidades em resultados. Nossa análise especializada mapeia processos críticos do seu BackOffice, recomendando templates específicos que maximizam o retorno sobre investimento. Com implementação rápida e ROI mensurável, nossos templates pré-configurados garantem automação inteligente em semanas, não meses.",
      icon: "🤖",
      color: "primary"
    },
    {
      title: "Auto Discovery & Smart Templates",
      description: "Antes de qualquer desenvolvimento, nossa metodologia prioriza um entendimento profundo e documentado de cada processo. Esta fase fundamental garante que cada automação seja não apenas eficiente, mas perfeitamente alinhada às necessidades reais do seu negócio. Revolucionamos a implementação com nossa biblioteca de templates inteligentes.",
      icon: "🔍",
      color: "secondary"
    },
    {
      title: "Auto Support & Performance Analytics",
      description: "Excelência em suporte e monitoramento contínuo. Nossa equipe não apenas automatiza, mas garante o desempenho ideal dos seus processos com monitoramento 24/7 e suporte especializado em três níveis. Combinamos suporte especializado com análise avançada de performance, garantindo que seus templates operem sempre com máxima eficiência.",
      icon: "📈",
      color: "primary"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-xl text-accent/80 font-dm-sans leading-relaxed">
            Transforme seus processos com nossa biblioteca de templates inteligentes e metodologia comprovada
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-primary/5 to-secondary/5' 
                  : 'bg-gradient-to-r from-secondary/5 to-primary/5'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl`}>{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-accent font-poppins">{solution.title}</h3>
                  </div>
                  <p className="text-accent/80 font-dm-sans leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">BackOffice</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">ROI Mensurável</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">Templates Pré-configurados</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-dm-sans">Smart Templates</span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-dm-sans">Análise Profunda</span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-dm-sans">Implementação Ágil</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">Suporte 24/7</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">Performance Analytics</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-dm-sans">Máxima Eficiência</span>
                      </>
                    )}
                  </div>
                </div>

                <div className={`flex items-center justify-center ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                  <div className={`w-full max-w-md h-64 rounded-xl flex items-center justify-center ${
                    solution.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
                      : 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                  }`}>
                    <div className="text-6xl">{solution.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-poppins">Automação sem Complexidade</h3>
          <p className="text-lg mb-6 font-dm-sans">
            Nossa biblioteca de templates pré-configurados permite implementação ágil e segura de soluções RPA para BackOffice. 
            Do setup ao go-live em poucas semanas, com resultados garantidos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1 font-poppins">Templates</div>
              <p className="text-sm font-dm-sans">Inteligentes e Validados</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1 font-poppins">Semanas</div>
              <p className="text-sm font-dm-sans">Do Setup ao Go-live</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1 font-poppins">Garantidos</div>
              <p className="text-sm font-dm-sans">Resultados Mensuráveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
