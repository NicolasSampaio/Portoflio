// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

interface ScrollToTopProps {
  children?: React.ReactNode;
}

export function ScrollToTop({ children }: ScrollToTopProps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}
