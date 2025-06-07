
const Methodology = () => {
  const steps = [
    {
      title: "Auto Templates",
      subtitle: "O Ponto de Partida",
      description: "Iniciamos com uma biblioteca robusta de templates especializados. Soluções já testadas e validadas, prontas para automatizar seus processos de BackOffice. Cobrimos áreas críticas como Logística, Suprimentos, Recursos Humanos, Fiscal, Financeiro, Contábil e Patrimônio.",
      icon: "📚"
    },
    {
      title: "Auto Deploy",
      subtitle: "Transformando Planos em Realidade",
      description: "Em poucas semanas, transformamos análise em ação. Nossa metodologia ágil garante uma jornada clara: configuração inicial, customizações específicas, testes abrangentes e go-live assistido. Cada passo é monitorado para garantir uma transição suave.",
      icon: "🚀"
    },
    {
      title: "Auto Performance",
      subtitle: "Garantindo Excelência Contínua",
      description: "Com nosso time de monitoramento, você acompanha cada aspecto do desempenho. Métricas que importam: economia gerada, tempo economizado, precisão alcançada. Suporte especializado 24/7 para máxima eficiência.",
      icon: "📊"
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            Nossa <span className="text-primary">Metodologia</span>
          </h2>
          <p className="text-xl text-accent/80 font-dm-sans leading-relaxed">
            A Metodologia <span className="font-semibold text-primary">auto-o-matic</span>: 
            Simplificando a Transformação Digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-accent mb-2 font-poppins">{step.title}</h3>
              <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">{step.subtitle}</h4>
              <p className="text-accent/70 font-dm-sans leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent mb-4 font-poppins">
              Resultados que Transformam
            </h3>
            <p className="text-accent/80 font-dm-sans">
              Nossa metodologia não é apenas um processo; é um compromisso com sua transformação digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary font-poppins">70%</span>
              </div>
              <div>
                <h4 className="font-semibold text-accent font-poppins">Redução no Tempo Operacional</h4>
                <p className="text-accent/70 font-dm-sans">Elimine tarefas repetitivas e foque no estratégico</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary font-poppins">95%</span>
              </div>
              <div>
                <h4 className="font-semibold text-accent font-poppins">Diminuição de Erros</h4>
                <p className="text-accent/70 font-dm-sans">Precisão e confiabilidade em cada processo</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
            <p className="text-center text-accent/80 font-dm-sans leading-relaxed">
              <span className="font-semibold">Cada etapa foi cuidadosamente projetada</span> para eliminar complexidades 
              desnecessárias, permitindo que você foque no que realmente importa: 
              <span className="font-semibold text-primary"> o crescimento do seu negócio</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
