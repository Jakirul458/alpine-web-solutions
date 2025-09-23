import { useState, useRef, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Github } from 'lucide-react';

interface SocialMediaDropdownProps {
  children: React.ReactNode;
}

const SocialMediaDropdown = ({ children }: SocialMediaDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: 'https://facebook.com/alpinewebs' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: 'https://instagram.com/alpinewebs' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', url: 'https://linkedin.com/company/alpinewebs' },
    { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', url: 'https://twitter.com/alpinewebs' },
    { icon: <Youtube className="h-5 w-5" />, name: 'YouTube', url: 'https://youtube.com/alpinewebs' },
    { icon: <Github className="h-5 w-5" />, name: 'GitHub', url: 'https://github.com/alpinewebs' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover-scale"
      >
        {children}
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-card border border-border/50 rounded-2xl shadow-strong p-4 min-w-[200px] animate-scale-in z-50">
          <div className="text-sm font-medium text-alpine-gray mb-3">Follow us on:</div>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => handleSocialClick(social.url)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors duration-200 text-alpine-gray-light hover:text-primary group"
              >
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </div>
                <span className="text-sm">{social.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;