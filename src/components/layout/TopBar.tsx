import type { AppRoute } from '../../types/station';
import { getStationById } from '../../config/stations';

interface TopBarProps {
  route: AppRoute;
}

function TopBar({ route }: TopBarProps) {
  const currentStation =
    route.type === 'station' ? getStationById(route.stationId) : undefined;

  return (
    <header className="topbar">
      <div className="topbar-location">
        <span className="topbar-kicker">YOU ARE IN</span>
        <span className="topbar-current">
          {currentStation?.name ?? 'Machine Overview'}
        </span>
      </div>
      <div className="topbar-status" role="status">
        <span className="status-dot" />
        <span>CORE SYSTEM READY</span>
      </div>
    </header>
  );
}

export default TopBar;
