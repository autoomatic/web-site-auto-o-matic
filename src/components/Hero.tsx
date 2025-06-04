
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5516988374411&text=Ol%C3%A1%21+Gostaria+de+conhecer+mais+sobre+o+Auto-o-matic,+e+entender+como+ele+pode+me+ajudar+!+%3AD&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-primary/10 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 font-poppins leading-tight">
            Transforme Seus Processos Repetitivos em
            <span className="text-primary block">Eficiência e Economia</span>
            <span className="block text-3xl md:text-4xl mt-2">com a Auto 0 Matic</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-accent/90 mb-8 font-dm-sans leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              Cansado de tarefas manuais que consomem tempo e recursos? 
            </p>
            <p className="mb-4">
              A Auto 0 Matic é um escritório de automação de tarefas focado em médias e grandes empresas, 
              ajudando você a otimizar operações, reduzir custos e liberar sua equipe para o que realmente importa.
            </p>
            <p className="font-semibold text-primary text-2xl">
              Veja sua automação funcionando <em>antes</em> de qualquer investimento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-dm-sans font-medium"
            >
              Descubra o Potencial da Automação na Sua Empresa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
