import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={elementRef}
      className={`bg-alpine-gray text-white scroll-slide-up ${isVisible ? 'animate' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 hover-scale">
              <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AW</span>
              </div>
              <span className="text-xl font-bold">Alpine WebS</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              At Alpine WebS, we specialize in delivering custom web and software solutions designed to meet the evolving needs of businesses. 
              We provide exclusive web and software solutions that change and grow with the challenges of today's digital world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">New York, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@alpinewebs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors hover-scale">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors hover-scale">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors hover-scale">Services</Link></li>
              <li><Link to="/work" className="text-gray-300 hover:text-primary transition-colors hover-scale">Our Work</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors hover-scale">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Software Development</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
              <li><span className="text-gray-300">E-commerce Solutions</span></li>
              <li><span className="text-gray-300">Mobile App Development</span></li>
              <li><span className="text-gray-300">24/7 Support</span></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and tech insights.
            </p>
            
            <div className="flex space-x-2 mb-6">
              <Input 
                placeholder="Enter your email" 
                className="bg-alpine-gray-light/20 border-alpine-gray-light/30 text-white placeholder:text-gray-400"
              />
              <Button size="sm" className="bg-primary hover:bg-primary-dark hover-lift">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-alpine-gray-light/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover-scale">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-alpine-gray-light/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover-scale">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-alpine-gray-light/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover-scale">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-alpine-gray-light/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors hover-scale">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-alpine-gray-light/20 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              While doing this, we are focusing on helping our society in using technology and thereby growing both small and large businesses online.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-alpine-gray-light/20 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 Alpine WebS. All rights reserved
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors hover-scale">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors hover-scale">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors hover-scale">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;