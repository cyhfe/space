import Navbar from "./Navbar"
import useMedia from "../hooks/useMedia"
function Header() {
  const { isMobile } = useMedia()
  return (
    <div>
      logo
      {isMobile ? <Navbar.Mobile /> : <Navbar.Desktop />}
    </div>
  )
}

export default Header
