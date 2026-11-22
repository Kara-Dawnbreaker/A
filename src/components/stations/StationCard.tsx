import type { StationDefinition } from '../../types/station';

interface StationCardProps {
  station: StationDefinition;
  index: number;
}

function StationCard({ station, index }: StationCardProps) {
  return (
    <a className="station-card" href={`#/${station.id}`}>
      <div className="station-card-topline">
        <span className="station-card-number">STATION {station.number}</span>
        <span className="station-card-category">{station.category}</span>
      </div>
      <span className="station-card-symbol" aria-hidden="true">{station.symbol}</span>
      <div className="station-card-copy">
        <h3>{station.name}</h3>
        <p>{station.shortDescription}</p>
      </div>
      <span className="station-card-arrow" aria-hidden="true">↗</span>
      <span className="station-card-index">{String(index + 1).padStart(2, '0')}</span>
    </a>
  );
}

export default StationCard;
