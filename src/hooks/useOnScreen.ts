import { useEffect, useRef, useState } from "react";

const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  rootMargin = "0px",
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useRef<IntersectionObserver>();

  const observe = (node: HTMLElement) => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin },
    );

    if (node) {
      observer.current.observe(node);
    }
  };

  useEffect(() => {
    if (ref.current) {
      observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);

  return isIntersecting;
};
export default useOnScreen;
