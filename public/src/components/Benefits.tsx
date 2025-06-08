
const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            O Impacto da Automação no Seu Negócio:
          </h2>
          <h3 className="text-2xl text-primary font-dm-sans">
            Menos Custos, Mais Produtividade
          </h3>
          <p className="text-lg text-accent/80 font-dm-sans mt-6 leading-relaxed">
            A automação de tarefas com a Auto 0 Matic proporciona benefícios concretos, liberando sua equipe 
            de tarefas repetitivas e permitindo que foquem em atividades estratégicas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-accent mb-12 font-poppins">
            Confira exemplos reais de sucesso:
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-2xl font-bold text-accent font-poppins">
                  Otimização Radical no Setor Atacadista
                </h4>
              </div>
              <p className="text-accent/80 font-dm-sans leading-relaxed mb-4">
                Um de nossos clientes do setor atacadista enfrentava um grande volume de trabalho manual na entrada de notas.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="font-semibold text-primary">
                  Com nossa solução de automação, eles <strong>reduziram o número de pessoas dedicadas a essa tarefa 
                  de 65 para apenas 15</strong>, gerando uma economia considerável e otimizando drasticamente o processo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💱</span>
                </div>
                <h4 className="text-2xl font-bold text-accent font-poppins">
                  Precisão Diária em Cotações Financeiras
                </h4>
              </div>
              <p className="text-accent/80 font-dm-sans leading-relaxed mb-4">
                Para outro cliente, implementamos um robô que <strong>atualiza diariamente as cotações de moedas</strong> 
                para suas equipes de vendas e compras.
              </p>
              <div className="bg-secondary/5 rounded-lg p-4">
                <p className="font-semibold text-secondary">
                  Mesmo não sendo um processo de alto volume, a automação garante informações precisas e 
                  atualizadas para negociações mais eficazes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-dm-sans leading-relaxed">
              <strong>Mesmo que o payback inicial não seja imediato</strong>, a automação pode ser extremamente 
              vantajosa para operações importantes com potencial de crescimento, gerando redução de custos 
              já nos primeiros meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
