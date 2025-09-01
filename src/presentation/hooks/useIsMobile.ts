"use client"
import { useState, useEffect } from 'react';
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(mobileRegex.test(userAgent) || isSmallScreen);
    };

    checkDevice();
    setIsLoading(false);

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobile, isLoading };
};
