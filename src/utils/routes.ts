import { getStationById } from '../config/stations';
import type { AppRoute } from '../types/station';

export function parseHashRoute(hash: string): AppRoute {
  const path = hash.replace(/^#\/?/, '').replace(/\/$/, '');

  if (!path || path === 'home') {
    return { type: 'home' };
  }

  const station = getStationById(path);

  return station
    ? { type: 'station', stationId: station.id }
    : { type: 'home' };
}

export function routeToHash(route: AppRoute): string {
  return route.type === 'home' ? '#/home' : `#/${route.stationId}`;
}
