import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>真観寺</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
