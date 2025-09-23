import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Products = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const products = [
    {
      title: 'Lab Management Software',
      description: 'The Pathological Laboratory Management System is an all-in-one comprehensive solution to optimize lab operations. The pathological lab system along with...',
      date: '30 Dec 2025',
      comments: '5 Comments',
      image: '/api/placeholder/300/200',
      category: 'Healthcare',
    },
    {
      title: 'School Management System',
      description: 'The researcher all-in-one ERP system with powerful features for smooth administration and management that is especially made for schools, colleges, universities, and other...',
      date: '30 Dec 2025',
      comments: '6 Comments',
      image: '/api/placeholder/300/200',
      category: 'Education',
    },
    {
      title: 'Billing Software',
      description: 'Our software and IT services Billing Software is a thorough, integrated platform designed to automate and optimize your financial and billing processes...',
      date: '30 Dec 2025',
      comments: '8 Comments',
      image: '/api/placeholder/300/200',
      category: 'Business',
    },
    {
      title: 'Scrap Management System',
      description: 'The "Scrap Management System" provides a completely integrated, reliable solution for enhancing processes involved in the handling and disposal of wastes in...',
      date: '30 Dec 2025',
      comments: '5 Comments',
      image: '/api/placeholder/300/200',
      category: 'Industrial',
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
          <p className="text-primary font-medium mb-2">From Team Alpine WebS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-4">
            Our Latest Software Development Products
          </h2>
          <p className="text-alpine-gray-light max-w-3xl mx-auto">
            At Alpine WebS, we strive to deliver cutting-edge solutions tailored to the unique needs of various industries. 
            Here's a look at some of our latest software products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover-lift border border-border/50"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold">{product.category.charAt(0)}</span>
                    </div>
                    <div className="text-sm font-medium opacity-90">{product.category}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-alpine-warning text-white text-xs px-2 py-1 rounded-full font-medium">
                    Latest
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-alpine-gray-light mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{product.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{product.comments}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-alpine-gray mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                <p className="text-alpine-gray-light leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto font-medium hover-scale">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;