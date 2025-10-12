import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import aboutIllustration from '@/assets/about-illustration.png';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'We ensure every project meets the highest standards of quality and performance.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in web development and IT solutions.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Proven Track Record',
      description: 'Successfully delivered 200+ projects across various industries with 99% client satisfaction.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure all projects are delivered on time without compromising quality.',
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
                About Alpine WebS
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We provide any type of website like e-commerce, portfolio, school, college, shop etc. 
                Creating digital solutions that drive success and growth for businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-6">
                  Your Trusted Partner for Digital Solutions
                </h2>
                <p className="text-alpine-gray-light leading-relaxed mb-6">
                  At Alpine WebS, we specialize in creating comprehensive digital solutions that cater to businesses of all sizes. 
                  From simple portfolio websites to complex e-commerce platforms, we have the expertise to bring your vision to life.
                </p>
                <p className="text-alpine-gray-light leading-relaxed mb-6">
                  Our team of experienced developers, designers, and digital marketing specialists work together to ensure 
                  that every project not only looks great but also performs exceptionally well and delivers measurable results.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">Responsive corporate websites</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">E-commerce websites (Shopify, WooCommerce, custom)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">Educational institution websites (schools, colleges)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">Portfolio and landing pages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">Website maintenance & hosting solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-alpine-gray font-medium">SEO setup & performance optimization</span>
                  </div>
                </div>

                <Button size="lg" className="shadow-medium">
                  Get Started with Us
                </Button>
              </div>

              <div className="relative">
                <img
                  src={aboutIllustration}
                  alt="Alpine WebS Team"
                  className="w-full h-auto rounded-2xl shadow-strong"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-alpine-gray mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-alpine-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-alpine-gray-light max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and create a customized solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <Button size="lg" className="shadow-medium">
      Start Your Project
    </Button>
  </Link>
  <Link to="/contact">
    <Button size="lg" variant="outline">
      Schedule Consultation
    </Button>
  </Link>
</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;