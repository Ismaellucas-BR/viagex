
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Users, Calendar, Phone, Mail, Instagram, Facebook, Twitter, ChevronDown } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (message = "") => {
    const phoneNumber = "5581993959073";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={reloadPage}>
            <MapPin className="h-8 w-8 text-slate-600" />
            <h1 className="text-2xl font-bold text-slate-800">Viagex</h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
              className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
            >
              Início
            </a>
            <a 
              href="#destinos" 
              onClick={(e) => { e.preventDefault(); scrollToSection('destinos'); }}
              className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
            >
              Destinos
            </a>
            <div className="relative">
              <button
                className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-300"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Empresa
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    <a 
                      href="#sobre" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); setIsDropdownOpen(false); }}
                      className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-300"
                    >
                      Sobre nós
                    </a>
                    <a 
                      href="#equipe" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('equipe'); setIsDropdownOpen(false); }}
                      className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-300"
                    >
                      Nossa equipe
                    </a>
                    <a 
                      href="#depoimentos" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); setIsDropdownOpen(false); }}
                      className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-300"
                    >
                      Depoimentos
                    </a>
                    <a 
                      href="#blog" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('blog'); setIsDropdownOpen(false); }}
                      className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-300"
                    >
                      Blog
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a 
              href="#contato" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}
              className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
            >
              Contato
            </a>
          </nav>
          <Button 
            className="bg-slate-600 hover:bg-slate-700 text-white"
            onClick={() => openWhatsApp("Olá! Gostaria de entrar em contato.")}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-slate-700 to-slate-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 font-playfair">
            Descubra o Mundo com a Viagex
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transformamos seus sonhos de viagem em realidade. Pacotes personalizados, 
            destinos incríveis e experiências inesquecíveis te aguardam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => scrollToSection('destinos')}
            >
              Ver Destinos
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-slate-700 hover:bg-slate-100 border-2 border-white"
              onClick={() => openWhatsApp("Olá! Gostaria de solicitar um orçamento.")}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Destinos Populares */}
      <section id="destinos" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-playfair">Destinos Mais Procurados</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore nossos destinos mais populares e encontre sua próxima aventura
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => openWhatsApp("Olá! Tenho interesse no pacote para Portugal.")}
            >
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{backgroundImage: 'url(/lovable-uploads/0143c18b-bb50-476f-bd80-893fe38bda62.png)'}}></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Portugal Encantador
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  10 dias pelas cidades históricas portuguesas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-600">R$ 6.990</span>
                  <span className="text-sm text-slate-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 18 pessoas
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas mensais
                </div>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => openWhatsApp("Olá! Tenho interesse no pacote para Alemanha.")}
            >
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{backgroundImage: 'url(/lovable-uploads/a87a073b-1036-4df7-9316-fa2331d3e834.png)'}}></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Alemanha Histórica
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  12 dias explorando a rica cultura alemã
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-600">R$ 8.490</span>
                  <span className="text-sm text-slate-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 16 pessoas
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas quinzenais
                </div>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => openWhatsApp("Olá! Tenho interesse no pacote para Alaska.")}
            >
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{backgroundImage: 'url(/lovable-uploads/1c15c7a3-54ef-4528-b59b-8f7251d8a2bb.png)'}}></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Alaska Selvagem
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  14 dias na natureza intocada do Alaska
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-600">R$ 15.990</span>
                  <span className="text-sm text-slate-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 10 pessoas
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas sazonais
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 font-playfair">
                Por que escolher a Viagex?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">15 anos de experiência</h4>
                    <p className="text-slate-600">
                      Mais de uma década criando experiências únicas para nossos clientes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">+10.000 clientes satisfeitos</h4>
                    <p className="text-slate-600">
                      Milhares de viajantes já confiaram em nossos serviços
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">50+ destinos</h4>
                    <p className="text-slate-600">
                      Roteiros exclusivos para os melhores destinos do mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-24 w-24 mx-auto mb-4" />
                <p className="text-xl">Sua próxima aventura começa aqui!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section id="equipe" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-6 font-playfair">Nossa Equipe</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Profissionais especializados em turismo, prontos para tornar sua viagem inesquecível.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-6 font-playfair">Depoimentos</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja o que nossos clientes falam sobre suas experiências conosco.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-6 font-playfair">Blog</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dicas de viagem, roteiros e inspirações para sua próxima aventura.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Pronto para sua próxima aventura?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para o destino dos seus sonhos
          </p>
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => openWhatsApp("Olá! Gostaria de solicitar um orçamento personalizado.")}
          >
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={reloadPage}>
                <MapPin className="h-6 w-6 text-amber-400" />
                <h4 className="text-xl font-bold">Viagex</h4>
              </div>
              <p className="text-slate-400 mb-4">
                Transformando sonhos em realidade há 15 anos
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-slate-400 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
                <Instagram className="h-5 w-5 text-slate-400 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
                <Twitter className="h-5 w-5 text-slate-400 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" />
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Destinos</h5>
              <ul className="space-y-2 text-slate-400">
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => openWhatsApp("Olá! Tenho interesse em destinos na Europa.")}
                >
                  Europa
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => openWhatsApp("Olá! Tenho interesse em destinos na Ásia.")}
                >
                  Ásia
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => openWhatsApp("Olá! Tenho interesse em destinos na América do Norte.")}
                >
                  América do Norte
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => openWhatsApp("Olá! Tenho interesse em destinos no Caribe.")}
                >
                  Caribe
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2 text-slate-400">
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => scrollToSection('sobre')}
                >
                  Sobre nós
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => scrollToSection('equipe')}
                >
                  Nossa equipe
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => scrollToSection('depoimentos')}
                >
                  Depoimentos
                </li>
                <li 
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => scrollToSection('blog')}
                >
                  Blog
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(81) 99395-9073</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-0.5" />
                  <span className="break-words">contato@viagex.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Recife, PE</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Viagex. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
