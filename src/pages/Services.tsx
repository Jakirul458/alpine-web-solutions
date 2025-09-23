import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Code2, 
  Shield, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  TrendingUp, 
  Settings,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom website development using modern technologies and frameworks.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized structure',
        'Fast loading performance',
        'Content management systems',
        'Custom functionality development'
      ],
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: 'Software Development',
      description: 'Tailored software solutions to streamline your business operations.',
      features: [
        'Custom business applications',
        'Database design and management',
        'API development and integration',
        'Cloud-based solutions',
        'Legacy system modernization'
      ],
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'E-commerce Development',
      description: 'Complete online store solutions with secure payment processing.',
      features: [
        'Shopping cart functionality',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking systems',
        'Multi-vendor capabilities'
      ],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Native and hybrid mobile applications for iOS and Android platforms.',
      features: [
        'Cross-platform development',
        'Native iOS and Android apps',
        'Progressive web apps (PWA)',
        'App store optimization',
        'Ongoing maintenance and updates'
      ],
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Digital Marketing & SEO',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: [
        'Search engine optimization',
        'Pay-per-click advertising',
        'Social media marketing',
        'Content marketing strategy',
        'Analytics and reporting'
      ],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Web Security',
      description: 'Robust security solutions to protect your website and data.',
      features: [
        'SSL certificate installation',
        'Security audits and monitoring',
        'Malware protection',
        'Regular security updates',
        'Backup and recovery solutions'
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Business Development',
      description: 'IT-driven strategies to accelerate your business growth.',
      features: [
        'Digital transformation consulting',
        'Process automation',
        'Technology strategy planning',
        'Performance optimization',
        'Scalability solutions'
      ],
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly.',
      features: [
        'Regular content updates',
        'Security monitoring',
        'Performance optimization',
        'Bug fixes and improvements',
        '24/7 technical support'
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs. From web development to digital marketing, 
                we provide end-to-end services that drive growth and success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white shadow-medium">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-alpine-gray mb-3">
                        {service.title}
                      </h3>
                      <p className="text-alpine-gray-light leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-alpine-success flex-shrink-0" />
                            <span className="text-alpine-gray-light text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto font-medium">
                          Request Quote →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
                Our Development Process
              </h2>
              <p className="text-alpine-gray-light max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { step: '01', title: 'Discovery & Planning', description: '1-2 days: Discuss goals & requirements' },
                { step: '02', title: 'Proposal & Contract', description: 'Detailed proposal with timeline and pricing' },
                { step: '03', title: 'Design & Mockups', description: 'Visual designs with review & revisions' },
                { step: '04', title: 'Development', description: 'Code implementation with regular updates' },
                { step: '05', title: 'Testing & QA', description: 'Comprehensive testing across devices' },
                { step: '06', title: 'Launch & Support', description: 'Deployment with 30 days free support' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-alpine-gray mb-2">{phase.title}</h3>
                  <p className="text-alpine-gray-light text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-alpine-gray-light max-w-2xl mx-auto mb-8">
              Let's discuss your requirements and create a customized solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-medium">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;