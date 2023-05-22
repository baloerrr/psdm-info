import Activity from './components/Activity'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div
        id="beranda"
        className="bg-slate-100 w-full min-h-screen font-nunito tracking-widest "
      >
        <Navbar />
        <Hero />
        <Activity />
        <Footer />
      </div>
    </Router>
  )
}

export default App
