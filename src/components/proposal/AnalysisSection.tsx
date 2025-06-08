
const AnalysisSection = () => {
  return (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-accent mb-6 font-poppins flex items-center">
          <span className="text-4xl mr-4">🔍</span>
          1. ANÁLISE - Diagnóstico dos Processos Atuais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Processos Identificados para Automação:</h3>
            <ul className="space-y-3 text-accent/80 font-dm-sans">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Entrada de Notas Fiscais:</strong> Processo manual repetitivo de digitação e classificação
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Relatórios Financeiros:</strong> Consolidação manual de dados de múltiplas fontes
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Gestão de Estoque:</strong> Atualização manual de planilhas de controle
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <strong>Cotações de Fornecedores:</strong> Processo manual de coleta e comparação
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Impacto Atual dos Processos Manuais:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-accent">Tempo Perdido</h4>
                <p className="text-accent/80 font-dm-sans">Aproximadamente 40 horas/semana em tarefas repetitivas</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-accent">Margem de Erro</h4>
                <p className="text-accent/80 font-dm-sans">15-20% de retrabalho devido a erros humanos</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-accent">Custo Operacional</h4>
                <p className="text-accent/80 font-dm-sans">R$ 25.000/mês em recursos dedicados apenas para processos manuais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
