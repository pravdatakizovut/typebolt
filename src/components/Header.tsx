import { ChartColumn, Keyboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="h-15 flex items-stretch  justify-between max-w-7xl mx-auto border-b border-b-border-section  mb-15">
      <div className="flex gap-12">
        <NavLink to="/" className="text-white flex items-center gap-2">
          <img src="/logo.png" alt="Typebolt" className="w-8 h-8"></img>
          typebolt.
        </NavLink>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center border-b-2  gap-2 px-4  ${
                isActive
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-secondary hover:text-white'
              }`
            }
          >
            <Keyboard size={21} />
            test
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center border-b-2  gap-2 px-4  transition-colors ease-in ${
                isActive
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-secondary hover:text-white '
              }`
            }
          >
            <ChartColumn size={21} />
            stats
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
