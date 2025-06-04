
const About = () => {
  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+o+Auto-o-matic,+e+entender+como+ele+pode+me+ajudar+!+%3AD&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
            Auto 0 Matic: <span className="text-primary">Inovação e Foco em Resultados</span>
          </h2>
          <h3 className="text-2xl text-primary mb-8 font-dm-sans">
            para Empresas em Ribeirão Preto e Região
          </h3>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 text-lg font-dm-sans leading-relaxed">
          <p className="text-accent/80 text-center">
            Somos a Auto 0 Matic, um escritório com três anos de experiência dedicado à automação de tarefas. 
            Nosso objetivo nos próximos 12 meses é claro: nos tornar a referência em automação em Ribeirão Preto e região.
          </p>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
            <p className="text-accent/80 text-xl">
              Atendemos <strong className="text-primary">médias e grandes empresas</strong> que lidam com um 
              <strong className="text-primary"> alto volume de processos manuais repetitivos</strong>, 
              entendendo que seu tempo e recursos são valiosos demais para serem gastos em tarefas que 
              a tecnologia pode executar com mais rapidez e precisão.
            </p>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-accent mb-8 font-poppins">
              A Diferença Auto 0 Matic: <span className="text-primary">Confiança, Transparência e Resultados Comprovados</span>
            </h3>
            <p className="text-accent/80 mb-8">
              Entendemos que investir em automação é uma decisão importante. Por isso, construímos nosso serviço 
              sobre pilares que garantem sua tranquilidade e o sucesso do seu projeto:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
              <h4 className="text-xl font-bold text-accent mb-4 font-poppins">🔍 Veja Antes de Investir</h4>
              <p className="text-accent/70">
                Nosso principal diferencial é a entrega de confiança. Permitimos que você veja o processo 
                automatizado em funcionamento antes de qualquer compromisso financeiro. Nós finalizamos a 
                automação e apresentamos o resultado, para que você comprove o valor.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
              <h4 className="text-xl font-bold text-accent mb-4 font-poppins">📊 Acompanhamento Constante</h4>
              <p className="text-accent/70">
                Não desaparecemos após a implementação. Oferecemos acompanhamento constante à nossa base de clientes, 
                garantindo que a solução continue performando.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
              <h4 className="text-xl font-bold text-accent mb-4 font-poppins">✅ Garantia de Eficiência</h4>
              <p className="text-accent/70">
                Temos tanta confiança em nossas soluções que garantimos que a automação trará eficiência. 
                Caso contrário, revemos o processo para assegurar os resultados esperados.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
              <h4 className="text-xl font-bold text-accent mb-4 font-poppins">💰 Venda Consultiva e Foco no ROI</h4>
              <p className="text-accent/70">
                Trabalhamos com uma abordagem de venda consultiva, buscando entender profundamente suas necessidades. 
                Apresentamos o potencial de retorno sobre o investimento (ROI), estimado geralmente entre seis a oito meses.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-dm-sans font-medium transition-colors"
            >
              Agende uma Demonstração Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
