import type { ReactNode } from 'react';
import type { AppRoute } from '../../types/station';
import MobileNavigation from './MobileNavigation';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface AppShellProps {
  route: AppRoute;
  children: ReactNode;
}

function AppShell({ route, children }: AppShellProps) {
  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar route={route} />
      <div className="app-column">
        <TopBar route={route} />
        <MobileNavigation route={route} />
        <main id="main-content" className="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="app-footer">
          <span>THE BOREDOM MACHINE</span>
          <span>AN EXPERIMENT IN GETTING UNBORED.</span>
        </footer>
      </div>
    </div>
  );
}

export default AppShell;
