import type { StationDefinition } from '../../types/station';

interface StationNavLinkProps {
  station: StationDefinition;
  active: boolean;
  compact?: boolean;
}

function StationNavLink({
  station,
  active,
  compact = false,
}: StationNavLinkProps) {
  return (
    <a
      href={`#/${station.id}`}
      aria-current={active ? 'page' : undefined}
      className={[
        'station-nav-link group',
        active ? 'is-active' : '',
        compact ? 'is-compact' : '',
      ].join(' ')}
      title={station.name}
    >
      <span className="station-nav-symbol" aria-hidden="true">
        {station.symbol}
      </span>
      <span className="station-nav-number">{station.number}</span>
      <span className="station-nav-name">{station.name}</span>
      {active && <span className="station-nav-indicator" aria-hidden="true" />}
    </a>
  );
}

export default StationNavLink;
