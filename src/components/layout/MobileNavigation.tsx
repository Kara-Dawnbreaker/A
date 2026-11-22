import { stations } from '../../config/stations';
import type { AppRoute } from '../../types/station';
import StationNavLink from '../navigation/StationNavLink';

interface MobileNavigationProps {
  route: AppRoute;
}

function MobileNavigation({ route }: MobileNavigationProps) {
  return (
    <nav className="mobile-navigation" aria-label="Station navigation">
      <a
        href="#/home"
        aria-current={route.type === 'home' ? 'page' : undefined}
        className={`mobile-home-link ${route.type === 'home' ? 'is-active' : ''}`}
      >
        <span aria-hidden="true">⌂</span>
        <span>Home</span>
      </a>
      {stations.map((station) => (
        <StationNavLink
          key={station.id}
          station={station}
          active={route.type === 'station' && route.stationId === station.id}
          compact
        />
      ))}
    </nav>
  );
}

export default MobileNavigation;
