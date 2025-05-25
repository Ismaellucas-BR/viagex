
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Users, Calendar, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">ViagemMágica</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Início</a>
            <a href="#destinos" className="text-gray-600 hover:text-blue-600 transition-colors">Destinos</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="h-4 w-4 mr-2" />
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Descubra o Mundo com a ViagemMágica
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transformamos seus sonhos de viagem em realidade. Pacotes personalizados, 
            destinos incríveis e experiências inesquecíveis te aguardam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Ver Destinos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Destinos Populares */}
      <section id="destinos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Destinos Mais Procurados</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossos destinos mais populares e encontre sua próxima aventura
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Europa Clássica
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  14 dias pelos principais destinos europeus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">R$ 8.990</span>
                  <span className="text-sm text-gray-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 20 pessoas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas mensais
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Caribe Paradisíaco
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  7 dias em praias de águas cristalinas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">R$ 5.490</span>
                  <span className="text-sm text-gray-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 15 pessoas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas semanais
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Ásia Mística
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  21 dias explorando culturas milenares
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">R$ 12.990</span>
                  <span className="text-sm text-gray-500">por pessoa</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Users className="h-4 w-4 mr-2" />
                  Até 12 pessoas
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saídas trimestrais
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Por que escolher a ViagemMágica?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">15 anos de experiência</h4>
                    <p className="text-gray-600">
                      Mais de uma década criando experiências únicas para nossos clientes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">+10.000 clientes satisfeitos</h4>
                    <p className="text-gray-600">
                      Milhares de viajantes já confiaram em nossos serviços
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">50+ destinos</h4>
                    <p className="text-gray-600">
                      Roteiros exclusivos para os melhores destinos do mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-24 w-24 mx-auto mb-4" />
                <p className="text-xl">Sua próxima aventura começa aqui!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para sua próxima aventura?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para o destino dos seus sonhos
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Solicitar Orçamento Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <h4 className="text-xl font-bold">ViagemMágica</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando sonhos em realidade há 15 anos
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Destinos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Europa</li>
                <li>Ásia</li>
                <li>América do Norte</li>
                <li>Caribe</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Nossa equipe</li>
                <li>Depoimentos</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@viagemmagica.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ViagemMágica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
