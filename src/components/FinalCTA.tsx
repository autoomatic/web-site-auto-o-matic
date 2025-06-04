
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+o+Auto-o-matic,+e+entender+como+ele+pode+me+ajudar+!+%3AD&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
            Pronto para Levar Sua Empresa ao Próximo Nível de Eficiência 
            <span className="block mt-2">em Ribeirão Preto?</span>
          </h2>
          
          <p className="text-xl mb-8 font-dm-sans leading-relaxed">
            Chega de perder tempo e dinheiro com processos manuais repetitivos. 
            A Auto-o-Matic está pronta para ser sua parceira estratégica em automação.
          </p>

          <div className="bg-white/10 rounded-2xl p-6 mb-10">
            <p className="text-lg font-dm-sans">
              Atualmente, nossa captação de clientes ocorre principalmente por eventos e indicações, 
              mas estamos expandindo e buscando novas empresas para ajudar a alcançar resultados 
              incríveis através da automação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-dm-sans font-medium"
            >
              Fale com Nossos Especialistas
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-dm-sans font-medium"
            >
              Descubra o Futuro dos Seus Processos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
