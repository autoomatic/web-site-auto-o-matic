
const ProposalSection = () => {
  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-accent mb-6 font-poppins flex items-center">
          <span className="text-4xl mr-4">💡</span>
          2. PROPOSTA - Solução de Automação Personalizada
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Metodologia Auto-o-Matic</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-accent font-poppins">Auto Templates</h4>
                <p className="text-sm text-accent/70 font-dm-sans">Templates especializados prontos para implementação</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-accent font-poppins">Auto Deploy</h4>
                <p className="text-sm text-accent/70 font-dm-sans">Implementação ágil em poucas semanas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-accent font-poppins">Auto Performance</h4>
                <p className="text-sm text-accent/70 font-dm-sans">Monitoramento contínuo 24/7</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Benefícios Esperados:</h3>
              <ul className="space-y-3 text-accent/80 font-dm-sans">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <strong>70% de redução</strong> no tempo operacional
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <strong>95% de diminuição</strong> em erros de processo
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <strong>Economia de R$ 17.500/mês</strong> em custos operacionais
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <strong>Liberação da equipe</strong> para atividades estratégicas
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Investimento Proposto:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-accent">Setup Inicial</h4>
                  <p className="text-2xl font-bold text-primary">R$ 45.000</p>
                  <p className="text-sm text-accent/70 font-dm-sans">Configuração, customização e implementação</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-accent">Suporte Mensal</h4>
                  <p className="text-2xl font-bold text-secondary">R$ 3.500</p>
                  <p className="text-sm text-accent/70 font-dm-sans">Monitoramento, manutenção e suporte</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 mt-4">
                  <p className="text-green-700 font-semibold">ROI Estimado: 6-8 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;
