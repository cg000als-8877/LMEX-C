import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export function RouterProvider({ children }) {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (path === '/track-order' || path === '/track-order/') {
      return '/track-order';
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  // Sync on browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/track-order' || path === '/track-order/') {
        setCurrentPath('/track-order');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to) => {
    let target = '/';
    if (to === '/track-order' || to === 'track-order') {
      target = '/track-order';
    } else {
      target = '/';
    }

    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
