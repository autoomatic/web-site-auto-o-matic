
const ContractSection = () => {
  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+discutir+a+proposta+comercial+da+Auto-o-matic!&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
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
              <button
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-dm-sans font-medium w-full rounded-md"
              >
                Aprovar Proposta e Iniciar Projeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;
