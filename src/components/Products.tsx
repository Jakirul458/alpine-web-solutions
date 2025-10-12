import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Products = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Golden Future Supportive Trust',
      category: 'Finance',
      description: 'Financial services website with user savings and loan accounts. Users can deposit and withdraw money with real-time email notifications and EMI tracking. Branch managers can manage users, accounts, transactions, and generate reports.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Node Mailer SMTP'],
      status: 'Live',
      url: 'https://gfst.vercel.app/',
    },
    {
      title: 'HLCCT Foundation',
      category: 'NGO',
      description: 'Official website for a non-profit organization focused on community welfare and education. It includes sections for campaigns, donations, volunteer registration, and event updates, all managed through a simple admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      status: 'Live',
      url: 'https://hlcct.vercel.app/',
    },
    {
      title: 'ShaandJ Music',
      category: 'E-Commerce',
      description: 'An online platform for DJs and music producers to showcase and sell albums. Features include digital album purchases, secure payment integration, user authentication, and an admin panel to manage music listings and sales.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      status: 'Live',
      url: 'https://shaandj.vercel.app/',
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
            Our Latest Projects
          </h2>
          <p className="text-alpine-gray-light max-w-3xl mx-auto">
            At Alpine WebS, we deliver tailored software solutions and websites for a variety of industries. Here are some of our recent live projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover-lift border border-border/50"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-alpine-warning text-white text-xs px-2 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-alpine-gray mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-alpine-gray-light leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted/50 text-alpine-gray px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark p-0 h-auto font-medium hover-scale">
                  View Project →
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
