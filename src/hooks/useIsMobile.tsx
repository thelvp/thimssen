import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  // Source - https://stackoverflow.com/a
  // Posted by Volobot Advanced Systems, modified by community. See post 'Timeline' for change history
  // Retrieved 2025-11-11, License - CC BY-SA 4.0

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  console.log('🚀 ~ useIsMobile ~ isMobile:', isMobile);

  return isMobile;
};
