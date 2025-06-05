
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nomeContato: '',
    email: '',
    telefone: '',
    tipoNegocio: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted:', formData);

    try {
      // Template parameters for EmailJS
      const templateParams = {
        to_email: 'tecnologia@autoomatic.app',
        from_name: formData.nomeContato,
        company_name: formData.nomeEmpresa,
        contact_name: formData.nomeContato,
        email: formData.email,
        phone: formData.telefone,
        business_type: formData.tipoNegocio,
        message: formData.mensagem || 'Nenhuma mensagem adicional fornecida',
        subject: `Novo contato: ${formData.nomeEmpresa} - ${formData.nomeContato}`
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        templateParams,
        'YOUR_PUBLIC_KEY' // You'll need to replace this
      );

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos seu contato e entraremos em contato em breve para iniciar sua transformação digital.",
      });

      // Reset form
      setFormData({
        nomeEmpresa: '',
        nomeContato: '',
        email: '',
        telefone: '',
        tipoNegocio: '',
        mensagem: ''
      });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelo telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-6 font-poppins">
              Vamos Transformar Seu <span className="text-primary">Negócio</span>
            </h2>
            <p className="text-xl text-accent/80 font-dm-sans leading-relaxed">
              Preencha o formulário e descubra como nossa metodologia auto-o-matic 
              pode revolucionar seus processos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeEmpresa" className="font-dm-sans">Nome da Empresa *</Label>
                    <Input
                      id="nomeEmpresa"
                      name="nomeEmpresa"
                      value={formData.nomeEmpresa}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="font-dm-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nomeContato" className="font-dm-sans">Nome do Contato *</Label>
                    <Input
                      id="nomeContato"
                      name="nomeContato"
                      value={formData.nomeContato}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="font-dm-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-dm-sans">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="font-dm-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="font-dm-sans">Telefone *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="font-dm-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoNegocio" className="font-dm-sans">Tipo de Negócio *</Label>
                  <select
                    id="tipoNegocio"
                    name="tipoNegocio"
                    value={formData.tipoNegocio}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-2 border border-gray-300 rounded-md font-dm-sans focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                  >
                    <option value="">Selecione o tipo de negócio</option>
                    <option value="industria">Indústria</option>
                    <option value="comercio">Comércio</option>
                    <option value="servicos">Serviços</option>
                    <option value="logistica">Logística</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="saude">Saúde</option>
                    <option value="educacao">Educação</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="font-dm-sans">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="Conte-nos sobre seus principais desafios e processos que gostaria de automatizar..."
                    className="font-dm-sans"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-dm-sans font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Contato"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-6 font-poppins">Nossos Contatos</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent font-poppins">Endereço</h4>
                      <p className="text-accent/70 font-dm-sans">
                        Av. Norma Valério Corrêa<br />
                        Jardim Botânico - Ribeirão Preto/SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent font-poppins">Telefone</h4>
                      <p className="text-accent/70 font-dm-sans">(16) 9 8837-4411</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent font-poppins">Email</h4>
                      <p className="text-accent/70 font-dm-sans">contato@autoomatic.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 font-poppins">Pronto para começar?</h3>
                <p className="font-dm-sans leading-relaxed">
                  Entre em contato conosco e descubra como nossa metodologia auto-o-matic 
                  pode transformar seus processos em semanas, não meses.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold font-poppins">Semanas</div>
                    <p className="text-sm font-dm-sans opacity-90">Para implementação</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-poppins">24/7</div>
                    <p className="text-sm font-dm-sans opacity-90">Suporte contínuo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
