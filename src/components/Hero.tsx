import { Button } from '@/components/ui/button';
import heroIllustration from '@/assets/hero-illustration.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef}
      className={`relative overflow-hidden bg-gradient-hero min-h-[600px] flex items-center scroll-slide-up ${isVisible ? 'animate' : ''}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Alpine WebS — Beautiful, Fast, and{' '}
              <span className="text-alpine-warning">Effective</span> Websites
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              From corporate sites to e-commerce and landing pages — we build websites that deliver results. Start your project today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-alpine-blue font-semibold hover-lift">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover-scale">
                Book a Consultation
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-alpine-warning rounded-full"></div>
                <span>+91 6294527072</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-alpine-warning rounded-full"></div>
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10 hover-scale">
              <img
                src={heroIllustration}
                alt="Alpine WebS - Web Development Services"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute top-10 -left-4 w-16 h-16 bg-alpine-warning/20 rounded-full blur-xl animate-pulse hover-glow"></div>
            <div className="absolute bottom-10 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse delay-1000 hover-glow"></div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-alpine-success/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;