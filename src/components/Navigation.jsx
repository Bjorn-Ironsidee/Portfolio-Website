
import '../styles/Navigation.css'

function Navigation({ onProjectsClick, onAboutClick, onHomeClick }) {
  return (
    <nav>
      <ul>
        <li><a onClick={onHomeClick}>Home</a></li>
        <li><a onClick={onAboutClick}>About</a></li>
        <li><a onClick={onProjectsClick}>Projects</a></li>
        <li><a href="https://github.com/Bjorn-Ironsidee" target="_blank">Github</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
