import { stations } from '../config/stations';
import StationCard from '../components/stations/StationCard';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-panel">
        <div className="hero-grid-mark" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span className="status-dot" /> EXPERIMENTAL ENTERTAINMENT SYSTEM</p>
          <h1>BOREDOM IS A<br /><span>DESIGN FLAW.</span></h1>
          <p className="hero-description">
            Eight strange little stations. One machine. Find something to make,
            test, explore or break out of your routine.
          </p>
          <a className="hero-link" href="#stations">
            EXPLORE THE STATIONS <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>TBM</span>
          <strong>001</strong>
          <span>ONLINE</span>
        </div>
      </section>

      <section id="stations" className="station-directory" aria-labelledby="directory-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE MACHINE DIRECTORY</p>
            <h2 id="directory-title">Choose your distraction.</h2>
          </div>
          <span className="section-count">08 / STATIONS</span>
        </div>
        <div className="station-grid">
          {stations.map((station, index) => (
            <StationCard key={station.id} station={station} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
