import { ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Alpine WebS offer?',
      answer: 'Alpine WebS specializes in web development, IT solutions, e-commerce platforms, digital marketing, SEO, web hosting, and maintenance services. We provide tailored solutions to help businesses grow online.',
    },
    {
      question: 'How do I start a project with Alpine WebS?',
      answer: 'Getting started is easy! Simply contact us through our website, phone, or email. We\'ll schedule a consultation to discuss your requirements, provide a detailed proposal, and once approved, begin working on your project.',
    },
    {
      question: 'Do you provide ongoing support after the project is completed?',
      answer: 'Yes, we offer comprehensive post-launch support including website maintenance, updates, security monitoring, and technical assistance to ensure your website continues to perform optimally.',
    },
    {
      question: 'How long does it take to develop a website?',
      answer: 'The timeline varies depending on the complexity and scope of your project. A simple website typically takes 2-4 weeks, while more complex e-commerce or custom applications may take 6-12 weeks.',
    },
    {
      question: 'What is the transfer application process?',
      answer: 'Our transfer process is seamless. We handle domain transfers, hosting migration, and ensure zero downtime during the transition. Our team manages all technical aspects while keeping you informed throughout.',
    },
    {
      question: 'Can Alpine WebS help improve my website\'s search engine rankings?',
      answer: 'Absolutely! We offer comprehensive SEO services including keyword research, on-page optimization, content strategy, and technical SEO to improve your website\'s visibility and search engine rankings.',
    },
    {
      question: 'What industries does Alpine WebS serve?',
      answer: 'We serve diverse industries including healthcare, education, e-commerce, manufacturing, professional services, non-profits, and more. Our team adapts to meet the specific needs of any industry.',
    },
  ];

  const whyChooseUs = [
    { title: 'Complete Solutions', description: 'We provide end to end solution, right from design to execution' },
    { title: 'Apps for Everybody', description: 'We can design apps for any industry i.e. service, manufacturing, retail, wholesale etc.' },
    { title: 'Extensive Research', description: 'We do extensive research before starting the project.' },
    { title: 'Experienced team', description: 'We have an experienced team to handle each project.' },
    { title: 'Reliable Pricing', description: 'Transparent and competitive pricing with no hidden costs.' },
    { title: '24/7 Fast Support', description: 'Round-the-clock technical support and assistance.' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
                Common Frequently Asked Questions (FAQ)
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-soft"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-alpine-gray pr-4">
                      Q: {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-border/30">
                        <p className="text-alpine-gray-light leading-relaxed">
                          <span className="font-medium text-primary">A: </span>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-alpine-gray mb-4 flex items-center">
                <span className="text-primary mr-2">?</span>
                Why Choose Us as Your Development Partner?
              </h3>
            </div>

            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-alpine-success rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alpine-gray mb-1">
                      {item.title}
                    </h4>
                    <p className="text-alpine-gray-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Image/Illustration */}
            <div className="mt-8 bg-gradient-primary rounded-2xl p-8 text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-4">Let's discuss your project and create something amazing together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;