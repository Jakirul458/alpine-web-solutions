import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-6 right-6 z-50 shadow-strong bg-gradient-primary hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;