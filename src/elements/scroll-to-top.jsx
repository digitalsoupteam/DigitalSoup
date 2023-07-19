import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const scrollToTop = () => {
//       if (window.scrollY > 0) {
//         window.scrollBy(0, -250);
//         requestAnimationFrame(scrollToTop);
//       }
//     };

//     scrollToTop();
//   }, [pathname]);

//   return null;
// };

export default ScrollToTop;
