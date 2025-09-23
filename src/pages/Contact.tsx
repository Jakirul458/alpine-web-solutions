import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Ready to transform your digital presence? Let's work together to create something amazing. 
                Get in touch with our team to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-alpine-gray mb-4">
                    Let's Work Together
                  </h2>
                  <p className="text-alpine-gray-light">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
                  </p>
                </div>

                <Card className="shadow-medium border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Project Details
                    </CardTitle>
                    <CardDescription>
                      Tell us about your project and we'll provide a customized solution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-alpine-gray mb-2 block">
                          Full Name *
                        </label>
                        <Input placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-alpine-gray mb-2 block">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-alpine-gray mb-2 block">
                          Phone Number
                        </label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-alpine-gray mb-2 block">
                          Project Type *
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website Development</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                            <SelectItem value="app">Mobile App</SelectItem>
                            <SelectItem value="software">Custom Software</SelectItem>
                            <SelectItem value="marketing">Digital Marketing</SelectItem>
                            <SelectItem value="maintenance">Website Maintenance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-alpine-gray mb-2 block">
                        Budget Range
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-alpine-gray mb-2 block">
                        Project Timeline
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-alpine-gray mb-2 block">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                      />
                    </div>

                    <Button size="lg" className="w-full shadow-medium">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-alpine-gray mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-alpine-gray-light mb-8">
                    We're here to help you succeed. Choose the most convenient way to reach us, 
                    and we'll respond promptly to assist with your project needs.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="hover:shadow-medium transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-alpine-gray mb-1">Email Us</h4>
                          <p className="text-alpine-gray-light mb-2">Send us an email anytime</p>
                          <a href="mailto:info@alpinewebs.com" className="text-primary hover:text-primary-dark font-medium">
                            info@alpinewebs.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-alpine-gray mb-1">Call Us</h4>
                          <p className="text-alpine-gray-light mb-2">Monday to Friday, 9 AM to 6 PM</p>
                          <a href="tel:+15551234567" className="text-primary hover:text-primary-dark font-medium">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-alpine-gray mb-1">Visit Us</h4>
                          <p className="text-alpine-gray-light mb-2">Our office location</p>
                          <p className="text-primary font-medium">
                            New York, NY 10001<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-alpine-gray mb-1">Business Hours</h4>
                          <div className="text-alpine-gray-light space-y-1">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Call to Action */}
                <Card className="bg-gradient-primary text-white">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-semibold mb-2">Need Immediate Help?</h4>
                    <p className="text-blue-100 mb-4">
                      For urgent matters or immediate assistance, don't hesitate to call us directly.
                    </p>
                    <Button variant="secondary" size="sm">
                      Call Now: +1 (555) 123-4567
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;