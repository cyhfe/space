import { useState } from "react"
import { Link } from "react-router-dom"

function Desktop() {
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

function Mobile() {
  return (
    <div>
      <ToggleMenu />
    </div>
  )
}

function ToggleMenu() {
  const [showMenu, setShowMenu] = useState(false)
  return showMenu ? (
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
  ) : (
    <div onClick={() => setShowMenu((b) => !b)}>click</div>
  )
}

export default {
  Desktop,
  Mobile,
}
