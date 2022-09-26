import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import Contact from './components/Contact'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'

function App() {

  return (
    <div className='overflow-hidden'>
    <div className='bg-header vh-100'>
    <Navbar/>
    <Header/>
    </div>
    <Skills/>
    <Proyectos/>
    <SobreMi/>
    <Contact/>
    <ContactInfo/>
    <Footer/>
    </div>
  )
}

export default App
