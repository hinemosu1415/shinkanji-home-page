import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>真観寺</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/precinct">境内</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
