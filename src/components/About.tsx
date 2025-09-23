import aboutIllustration from '@/assets/about-illustration.png';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const stats = [
    { number: '150+', label: 'Satisfied Clients' },
    { number: '200+', label: 'Websites Developed' },
    { number: '100+', label: 'Software Developed' },
    { number: '50+', label: 'Skilled Team Members' },
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-background scroll-slide-up ${isVisible ? 'animate' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">About Alpine WebS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-6">
                Innovative Web Solutions & IT Services
              </h2>
              <p className="text-alpine-gray-light leading-relaxed mb-6">
                At Alpine WebS, we specialize in delivering custom web and software solutions designed to meet the evolving needs of businesses. We provide exclusive web and software solutions that change and grow with the challenges of today's digital world.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">Website Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">Mobile App Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">Digital Marketing & SEO</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">Software Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">Web Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-alpine-gray font-medium">E-commerce Solutions</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="shadow-medium hover-lift">
              More Information
            </Button>
          </div>

          {/* Illustration */}
          <div className="relative hover-scale">
            <img
              src={aboutIllustration}
              alt="Alpine WebS Team"
              className="w-full h-auto rounded-2xl shadow-medium"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center hover-scale">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-alpine-gray-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;