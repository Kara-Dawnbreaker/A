import { stations } from '../../config/stations';
import type { AppRoute } from '../../types/station';
import StationNavLink from '../navigation/StationNavLink';

interface SidebarProps {
  route: AppRoute;
}

function Sidebar({ route }: SidebarProps) {
  return (
    <aside className="sidebar">
      <a className="brand-lockup" href="#/home" aria-label="The Boredom Machine home">
        <span className="brand-mark" aria-hidden="true">B.</span>
        <span className="brand-copy">
          <strong>THE BOREDOM</strong>
          <span>MACHINE / 001</span>
        </span>
      </a>

      <div className="sidebar-section-label">MACHINE DIRECTORY</div>
      <nav className="station-navigation" aria-label="Main navigation">
        <a
          href="#/home"
          aria-current={route.type === 'home' ? 'page' : undefined}
          className={`station-nav-link home-nav-link ${route.type === 'home' ? 'is-active' : ''}`}
        >
          <span className="station-nav-symbol" aria-hidden="true">⌂</span>
          <span className="station-nav-name">Overview</span>
          {route.type === 'home' && <span className="station-nav-indicator" aria-hidden="true" />}
        </a>
        <div className="station-nav-divider" />
        {stations.map((station) => (
          <StationNavLink
            key={station.id}
            station={station}
            active={route.type === 'station' && route.stationId === station.id}
          />
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        <span>FOUNDATION ONLINE</span>
        <span className="sidebar-version">v0.1</span>
      </div>
    </aside>
  );
}

export default Sidebar;
