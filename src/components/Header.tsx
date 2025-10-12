// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';
// import SocialMediaDropdown from '@/components/SocialMediaDropdown';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Our Work', href: '/work' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const isActive = (href: string) => location.pathname === href;

//   return (
//     <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <SocialMediaDropdown>
//               <div className="flex items-center space-x-2 hover-glow">
//                 <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center hover-scale">
//                   <span className="text-white font-bold text-sm">AW</span>
//                 </div>
//                 <span className="text-xl font-bold text-alpine-gray">
//                   Alpine WebS
//                 </span>
//               </div>
//             </SocialMediaDropdown>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-primary hover-scale ${
//                   isActive(item.href)
//                     ? 'text-primary'
//                     : 'text-alpine-gray-light hover:text-alpine-gray'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button & Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <Button size="sm" className="hidden sm:inline-flex hover-lift">
//               Get a Quote
//             </Button>

//             {/* Mobile menu button */}
//             <button
//               className="md:hidden p-2 rounded-md text-alpine-gray-light hover:text-alpine-gray hover:bg-accent hover-scale"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden animate-slide-up">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border/40">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`block px-3 py-2 rounded-md text-base font-medium hover-lift ${
//                     isActive(item.href)
//                       ? 'text-primary bg-accent'
//                       : 'text-alpine-gray-light hover:text-alpine-gray hover:bg-accent'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button size="sm" className="w-full hover-lift">
//                   Get a Quote
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;










import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import SocialMediaDropdown from '@/components/SocialMediaDropdown';

// Import your logo
import AlpineLogo from '@/assets/alpine-logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <SocialMediaDropdown>
              <Link to="/" className="flex items-center space-x-3 hover-glow">
                {/* Larger logo without background */}
                <img
                  src={AlpineLogo}
                  alt="Alpine WebS Logo"
                  className="h-16 w-16 object-contain hover-scale"
                />
                {/* Align text */}
                <span className="text-3xl font-bold text-alpine-gray leading-none">
                  Alpine WebS
                </span>
              </Link>
            </SocialMediaDropdown>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary hover-scale ${isActive(item.href)
                    ? 'text-primary'
                    : 'text-alpine-gray-light hover:text-alpine-gray'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button size="sm" className="hidden sm:inline-flex hover-lift">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-alpine-gray-light hover:text-alpine-gray hover:bg-accent hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border/40">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover-lift ${isActive(item.href)
                      ? 'text-primary bg-accent'
                      : 'text-alpine-gray-light hover:text-alpine-gray hover:bg-accent'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full hover-lift">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
