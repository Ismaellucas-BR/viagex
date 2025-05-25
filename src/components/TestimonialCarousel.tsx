
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    comment: "Viagem incrível para Portugal! A equipe da Viagex organizou tudo perfeitamente. Conhecemos lugares maravilhosos e fizemos memórias inesquecíveis. Super recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    comment: "A viagem para a Alemanha superou todas as expectativas. Roteiro bem planejado, guias excelentes e uma experiência cultural única. Viagex é nota 10!",
    rating: 5
  },
  {
    name: "Ana Costa",
    comment: "Alaska foi um sonho realizado! Paisagens de tirar o fôlego e uma organização impecável. A Viagex tornou nossa aventura ainda mais especial. Obrigada por tudo!",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    comment: "Excelente atendimento desde o primeiro contato. A viagem foi planejada nos mínimos detalhes e tudo saiu como esperado. Já estou planejando a próxima com a Viagex!",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-center mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-semibold text-slate-800 font-poppins">
                    {testimonial.name}
                  </h4>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
