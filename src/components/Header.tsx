import { Link } from "react-router-dom";
import { NAVIGATE_DATA } from '../constants'

interface NavigateItem {
  link: string
  label: string
}

const Header: React.FC = () => {
  return (
    <nav className="nav-element">
      <h1 className="welcome-text">Todo Tracker</h1>
      <ul className="nav-items">
        {NAVIGATE_DATA.map((item: NavigateItem, index: number) => (
          <li key={index} className="inline">
            <Link to={item.link}>{item.label}</Link> |
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header;
