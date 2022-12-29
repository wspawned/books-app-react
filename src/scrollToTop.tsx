import { useLocation } from 'react-router-dom'
import React, { useLayoutEffect } from 'react'

const ScrollToTop:React.FC<{ children: React.ReactNode }> = ({children}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.search]);
  return (<React.Fragment>{children}</React.Fragment>);
}

export default ScrollToTop;