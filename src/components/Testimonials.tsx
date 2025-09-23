import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Abdul Matin',
      title: 'Director of Focus Diagnostic Center',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'I engaged Alpine WebS and IT Services for the website design and digital management of my public school, Science Hub Academy. Their exceptional skill, forward-thinking approach, and dedication have profoundly improved our overall Management, enhancing efficiency and service delivery. I highly recommend their expertise.',
    },
    {
      name: 'Noushad Ali Sarkar',
      title: 'Kochian Uzul Uloom Nijamio Madrasha - Secretary',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Our Kachian Darul Uloom Nijamia Madrasha - A Contribution with Alpine WebS for their outstanding work on our website design. Their team showed remarkable expertise, creativity, and commitment, providing us with a visually appealing and highly functional site that exceeded our expectations.',
    },
    {
      name: 'Sarah Johnson',
      title: 'Founder of Science Hub Academy',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'I took website design and digital management support from Alpine WebS and IT Services for Our Institute, Bes An Noor. Their exceptional expertise and dedication have greatly enhanced our Activity. I highly recommend them for their outstanding service across all our branches.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Clients Review</p>
          <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
            What Our Clients Are Raving About!
          </h2>
          <p className="text-alpine-gray-light max-w-3xl mx-auto">
            Alpine WebS and Software has impressed every client with their remarkable attention to detail, seamless communication, 
            and ability to turn visions into reality, making them the go-to partner for innovative and reliable IT services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Current Testimonial */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Testimonial Card */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border/50">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-alpine-warning text-alpine-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-alpine-gray-light leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-alpine-gray">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-alpine-gray-light">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Testimonial Preview */}
            <div className="space-y-6">
              {testimonials
                .filter((_, index) => index !== currentIndex)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft border border-border/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-alpine-gray text-sm">
                          {testimonial.name}
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-alpine-warning text-alpine-warning" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-alpine-gray-light text-sm leading-relaxed">
                      "{testimonial.content.substring(0, 100)}..."
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;