import { 
  Globe, 
  Code2, 
  Shield, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  TrendingUp, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Web Designing',
      description: 'Modern, responsive, and user-friendly website designs that captivate your audience and drive engagement.',
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies to streamline your business operations.',
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Web Security',
      description: 'Comprehensive security solutions to protect your website and data from cyber threats and vulnerabilities.',
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Digital Marketing & SEO',
      description: 'Strategic digital marketing campaigns and SEO optimization to boost your online visibility and growth.',
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment gateways and inventory management systems.',
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'IT-Driven Business Development',
      description: 'Technology consulting and implementation services to drive your business forward in the digital age.',
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Website Maintenance',
      description: 'Ongoing maintenance and support services to keep your website running smoothly and up-to-date.',
    },
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-muted/30 scroll-slide-up ${isVisible ? 'animate' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
            Alpine WebS — Where Exceptional Service Meets 
            <br className="hidden md:block" />
            Innovative Digital Solutions
          </h2>
          <p className="text-alpine-gray-light max-w-3xl mx-auto">
            At Alpine WebS, service isn't just about delivering solutions—it's about crafting digital experiences that drive growth, 
            inspire trust, and exceed expectations every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover-lift border border-border/50"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-alpine-gray mb-3">
                {service.title}
              </h3>
              
              <p className="text-alpine-gray-light leading-relaxed mb-4">
                {service.description}
              </p>
              
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto font-medium hover-scale">
                Read More →
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="shadow-medium hover-lift">
            More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;