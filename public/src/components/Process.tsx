
const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Consultoria Inicial",
      description: "Tudo começa com uma conversa. Através da nossa venda consultiva, buscamos entender seus desafios e o volume de processos manuais repetitivos.",
      icon: "💬"
    },
    {
      number: "2", 
      title: "Desenvolvimento e Demonstração",
      description: "Nossa equipe desenvolve a solução de automação e, o mais importante, demonstra ela funcionando na prática para você, antes de qualquer investimento.",
      icon: "🔧"
    },
    {
      number: "3",
      title: "Apresentação de Resultados", 
      description: "Apresentamos os resultados da automação e o potencial de retorno que ela pode trazer para sua empresa.",
      icon: "📊"
    },
    {
      number: "4",
      title: "Sua Decisão, Nosso Compromisso",
      description: "Somente após você ver o valor e o potencial, discutimos o investimento.",
      icon: "🤝"
    },
    {
      number: "5",
      title: "Implementação e Suporte Contínuo",
      description: "Após a aprovação, implementamos a solução e iniciamos o acompanhamento constante, com a garantia de eficiência da Auto 0 Matic.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            Da Análise à Automação:
          </h2>
          <h3 className="text-2xl text-primary font-dm-sans">
            Um Processo Transparente e Eficaz
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className={`bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'from-primary/10 to-secondary/10' 
                      : 'from-secondary/10 to-primary/10'
                  } rounded-2xl p-8`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${
                        index % 2 === 0 ? 'bg-primary' : 'bg-secondary'
                      } text-white rounded-full flex items-center justify-center font-bold text-lg mr-4`}>
                        {step.number}
                      </div>
                      <h4 className="text-2xl font-bold text-accent font-poppins">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-accent/80 font-dm-sans leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-32 h-32 flex items-center justify-center">
                  <div className={`w-24 h-24 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
                      : 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                  } rounded-full flex items-center justify-center text-4xl`}>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
