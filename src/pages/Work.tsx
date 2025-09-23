import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'Focus Diagnostic Center',
      category: 'Healthcare',
      description: 'Comprehensive diagnostic center website with appointment booking, test results portal, and patient management system.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
      status: 'Live',
      url: '#',
    },
    {
      title: 'Science Hub Academy',
      category: 'Education',
      description: 'Educational institution website with course management, student portal, and online learning management system.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'PHP', 'MySQL', 'LMS'],
      status: 'Live',
      url: '#',
    },
    {
      title: 'Kachian Darul Uloom Madrasha',
      category: 'Education',
      description: 'Religious educational institution website with course information, admission system, and event management.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      status: 'Live',
      url: '#',
    },
    {
      title: 'City Path Lab',
      category: 'Healthcare',
      description: 'Pathology laboratory website with online test booking, report delivery, and lab management system.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Express.js', 'MongoDB', 'AWS'],
      status: 'Live',
      url: '#',
    },
    {
      title: 'E-commerce Fashion Store',
      category: 'E-commerce',
      description: 'Complete online fashion store with inventory management, payment processing, and order tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'PayPal'],
      status: 'Live',
      url: '#',
    },
    {
      title: 'Restaurant Management App',
      category: 'Hospitality',
      description: 'Restaurant management system with online ordering, table booking, and kitchen management.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Square'],
      status: 'In Development',
      url: '#',
    },
  ];

  const categories = ['All', 'Healthcare', 'Education', 'E-commerce', 'Hospitality'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Work
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover our portfolio of successful projects across various industries. 
                Each project represents our commitment to quality, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className="hover:scale-105 transition-transform"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Play className="h-8 w-8" />
                        </div>
                        <div className="text-sm font-medium opacity-90">View Project</div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* External Link */}
                    <div className="absolute top-4 right-4">
                      <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-alpine-gray mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-alpine-gray-light leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto font-medium">
                      View Details →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpine-gray mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-alpine-gray-light max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and create something amazing together. 
              We're here to bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-medium">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;