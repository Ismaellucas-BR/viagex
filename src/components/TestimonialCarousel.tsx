
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-center mb-6 italic text-lg leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-semibold text-slate-800 font-poppins text-lg">
                    {testimonial.name}
                  </h4>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Radio button indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-slate-600' : 'bg-slate-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
