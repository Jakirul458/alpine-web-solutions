import { Code, Smartphone, TrendingUp, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Professional and responsive websites designed to serve your branding needs with modern technologies.',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Software Development',
      description: 'Business-oriented software solutions that are scalable, dependable, and tailored to your requirements.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Digital Marketing & SEO',
      description: 'Improve the outreach of your website with targeted SEO strategies and comprehensive digital marketing.',
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: '24/7 Fast Support',
      description: 'Reliable assistance to ensure your business stays operational with round-the-clock technical support.',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Our Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
            Alpine WebS Provides You a Better Digital Solution
          </h2>
          <p className="text-alpine-gray-light max-w-2xl mx-auto">
            Alpine WebS is dedicated to providing cutting-edge digital solutions that cater to businesses of all sizes. 
            Our focus is on leveraging technology to streamline operations, enhance customer engagement, and drive growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-alpine-gray mb-3">
                {feature.title}
              </h3>
              <p className="text-alpine-gray-light leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4">
                <button className="text-primary font-medium text-sm hover:text-primary-dark transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;