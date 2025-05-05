import { BrowserRouter as Router } from "react-router-dom" // If using routing
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/main.css" // Global styles

// Main App component
function App() {
  return (
    // Wrap with Router if using navigation
    <Router>
      <div className="app">
        {/* Component hierarchy */}
        <Navbar />
        <Home />
        <Gallery />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
