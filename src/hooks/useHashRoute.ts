import { useEffect, useState } from 'react';
import { parseHashRoute, routeToHash } from '../utils/routes';
import type { AppRoute } from '../types/station';

export function useHashRoute() {
  const [route, setRoute] = useState<AppRoute>(() =>
    parseHashRoute(window.location.hash),
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHashRoute(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (nextRoute: AppRoute) => {
    const nextHash = routeToHash(nextRoute);

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setRoute(nextRoute);
    }
  };

  return { route, navigate };
}
