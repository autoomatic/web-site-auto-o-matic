
const ExperimentSection = () => {
  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-accent mb-6 font-poppins flex items-center">
          <span className="text-4xl mr-4">🔬</span>
          3. EXPERIMENTO - Demonstração Prática Antes do Investimento
        </h2>

        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Nosso Diferencial: "Veja Antes de Investir"</h3>
          <p className="text-lg text-accent/80 font-dm-sans leading-relaxed mb-6">
            Desenvolvemos e demonstramos a automação funcionando na prática para você, 
            <strong className="text-primary"> antes de qualquer compromisso financeiro</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Cronograma do Experimento:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-accent">Semana 1-2</h4>
                  <p className="text-accent/70 font-dm-sans">Mapeamento detalhado dos processos atuais</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-accent">Semana 3-4</h4>
                  <p className="text-accent/70 font-dm-sans">Desenvolvimento da automação piloto</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-accent">Semana 5</h4>
                  <p className="text-accent/70 font-dm-sans">Demonstração prática do funcionamento</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-accent mb-4 font-poppins">O que Você Verá:</h3>
            <ul className="space-y-3 text-accent/80 font-dm-sans">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Processo automatizado funcionando</strong> com seus dados reais
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Relatórios de performance</strong> mostrando tempo economizado
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Comparativo antes vs depois</strong> do processo manual
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Projeção de ROI real</strong> baseada nos resultados obtidos
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-primary font-semibold text-center">
                Investimento no Experimento: R$ 0,00
              </p>
              <p className="text-accent/70 text-sm text-center font-dm-sans mt-1">
                Sem custos até você aprovar a solução
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperimentSection;
