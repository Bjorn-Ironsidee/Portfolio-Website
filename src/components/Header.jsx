
import Navigation from './Navigation';

function Header({ onProjectsClick, onAboutClick, onHomeClick }) {
  return (
    <header className="header">
      <Navigation
        onProjectsClick={onProjectsClick}
        onAboutClick={onAboutClick}
        onHomeClick={onHomeClick}
      />
    </header>
  );
}

export default Header;
