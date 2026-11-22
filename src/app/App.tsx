import { useEffect } from 'react';
import AppShell from '../components/layout/AppShell';
import StationPlaceholder from '../components/stations/StationPlaceholder';
import { getStationById } from '../config/stations';
import { useHashRoute } from '../hooks/useHashRoute';
import HomePage from '../pages/HomePage';

function App() {
  const { route } = useHashRoute();
  const station =
    route.type === 'station' ? getStationById(route.stationId) : undefined;

  useEffect(() => {
    document.title = station
      ? `${station.name} — THE BOREDOM MACHINE`
      : 'THE BOREDOM MACHINE';
  }, [station]);

  return (
    <AppShell route={route}>
      {station ? <StationPlaceholder station={station} /> : <HomePage />}
    </AppShell>
  );
}

export default App;
