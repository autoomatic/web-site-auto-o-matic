
const ProposalFooter = () => {
  return (
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
  );
};

export default ProposalFooter;
