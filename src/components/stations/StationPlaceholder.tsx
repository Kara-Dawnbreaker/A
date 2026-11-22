import type { StationDefinition } from '../../types/station';

interface StationPlaceholderProps {
  station: StationDefinition;
}

function StationPlaceholder({ station }: StationPlaceholderProps) {
  return (
    <section className="station-placeholder" aria-labelledby="station-title">
      <div className="station-placeholder-meta">
        <span>STATION {station.number}</span>
        <span>{station.category}</span>
      </div>
      <div className="station-placeholder-symbol" aria-hidden="true">
        {station.symbol}
      </div>
      <p className="eyebrow">MACHINE DIRECTORY / {station.number}</p>
      <h1 id="station-title">{station.name}</h1>
      <p className="station-description">{station.description}</p>
      <div className="station-coming-soon">
        <span className="status-dot status-dot-muted" />
        <div>
          <strong>STATION NOT YET INSTALLED</strong>
          <p>This station will be implemented in its dedicated development phase. No controls are shown until they work.</p>
        </div>
      </div>
      <a className="text-link" href="#/home">← Return to machine overview</a>
    </section>
  );
}

export default StationPlaceholder;
