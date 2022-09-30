import {Link } from 'react-router-dom'
const NavBar = () => {

  return (
    <nav className="navbar">
      <h2>NAVBAR</h2>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/documentation">Documentation</Link>
    </nav>
  )
}


export default NavBar