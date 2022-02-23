import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/home">HOME</Link>
      </div>
      <div>
        <Link to="/destination">DESTINATION</Link>
      </div>
      <div>
        <Link to="/crew">CREW</Link>
      </div>
      <div>
        <Link to="technology">TECHNOLOGY</Link>
      </div>
    </nav>
  )
}

export default Navbar
