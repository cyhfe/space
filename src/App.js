import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Home from "./pages/Home"
import Technology from "./pages/Technology"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
