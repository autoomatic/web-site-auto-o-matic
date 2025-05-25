
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4 font-poppins leading-tight">
            Simplifique sua
            <span className="text-primary block">Transformação Digital</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-primary mb-8 font-dm-sans">
            Automatize tarefas, potencialize talentos.
          </div>
          <p className="text-xl text-accent/80 mb-8 font-dm-sans leading-relaxed max-w-3xl mx-auto">
            Com nossa metodologia auto-o-matic, transformamos a complexidade em simplicidade. 
            Automação inteligente em semanas, não meses, com resultados garantidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-dm-sans font-medium"
            >
              Comece sua Transformação
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-dm-sans font-medium"
              onClick={() => {
                const element = document.getElementById('methodology');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça Nossa Metodologia
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">70%</div>
              <p className="text-accent/70 font-dm-sans">Redução no tempo operacional</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">95%</div>
              <p className="text-accent/70 font-dm-sans">Diminuição de erros</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2 font-poppins">24/7</div>
              <p className="text-accent/70 font-dm-sans">Suporte especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
