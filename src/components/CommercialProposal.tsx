import { Button } from "@/components/ui/button";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

const CommercialProposal = () => {
  const proposalRef = useRef<HTMLDivElement>(null);

  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+discutir+a+proposta+comercial+da+Auto-o-matic!&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  const generatePDF = async () => {
    if (!proposalRef.current) return;

    try {
      const element = proposalRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      // Se a imagem for muito alta, dividir em páginas
      const pageHeight = pdfHeight;
      const totalPages = Math.ceil((imgHeight * ratio) / pageHeight);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();
        
        const sourceY = (pageHeight * i) / ratio;
        const sourceHeight = Math.min(imgHeight - sourceY, pageHeight / ratio);
        
        pdf.addImage(
          imgData,
          'PNG',
          imgX,
          imgY,
          imgWidth * ratio,
          sourceHeight * ratio,
          undefined,
          'FAST',
          0,
          -sourceY * ratio
        );
      }

      pdf.save('Proposta-Comercial-Auto-o-matic.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Botão flutuante para gerar PDF */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={generatePDF}
          className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
          size="lg"
        >
          📄 Gerar PDF
        </Button>
      </div>

      <div ref={proposalRef}>
        {/* Header da Proposta */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 font-poppins">
                Proposta Comercial
              </h1>
              <p className="text-xl font-dm-sans">
                Transformação Digital através da Automação de Processos
              </p>
              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <p className="font-semibold">Auto-o-Matic - Escritório de Automação</p>
                <p>Ribeirão Preto/SP | tecnologia@autoomatic.app | (16) 9 8837-4411</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          {/* SEÇÃO 1: ANÁLISE */}
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

          {/* SEÇÃO 2: PROPOSTA */}
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

          {/* SEÇÃO 3: EXPERIMENTO */}
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

          {/* SEÇÃO 4: CONTRATAÇÃO */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-accent mb-6 font-poppins flex items-center">
                <span className="text-4xl mr-4">🤝</span>
                4. CONTRATAÇÃO - Sua Decisão, Nosso Compromisso
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Condições Contratuais:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-accent">Forma de Pagamento</h4>
                      <p className="text-accent/70 font-dm-sans">
                        30% na assinatura<br/>
                        70% na entrega do projeto<br/>
                        Suporte mensal conforme uso
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-accent">Prazo de Implementação</h4>
                      <p className="text-accent/70 font-dm-sans">
                        4-6 semanas para go-live completo<br/>
                        Acompanhamento nos primeiros 30 dias
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-accent">Garantias</h4>
                      <p className="text-accent/70 font-dm-sans">
                        Garantia de eficiência ou revisão gratuita<br/>
                        Suporte 24/7 durante implementação
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-accent mb-4 font-poppins">Próximos Passos:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <p className="font-dm-sans">Aprovação desta proposta</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <p className="font-dm-sans">Assinatura do contrato</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <p className="font-dm-sans">Início da implementação</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <p className="font-dm-sans">Go-live e acompanhamento</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      onClick={openWhatsApp}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-dm-sans font-medium w-full"
                    >
                      Aprovar Proposta e Iniciar Projeto
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rodapé da Proposta */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Transforme Sua Operação em Semanas, Não Meses</h3>
              <p className="text-lg mb-6 font-dm-sans">
                Esta proposta é válida por 30 dias e representa nosso compromisso com sua transformação digital.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1 font-poppins">Experiência</div>
                  <p className="text-sm font-dm-sans">3 anos especializados em automação</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1 font-poppins">Resultados</div>
                  <p className="text-sm font-dm-sans">70% redução em tempo operacional</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1 font-poppins">Garantia</div>
                  <p className="text-sm font-dm-sans">Eficiência comprovada ou revisão gratuita</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="font-dm-sans">
                  <strong>Auto-o-Matic</strong> - Escritório de Automação<br/>
                  Av. Norma Valério Corrêa - Jardim Botânico - Ribeirão Preto/SP<br/>
                  📞 (16) 9 8837-4411 | ✉️ tecnologia@autoomatic.app
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommercialProposal;
