
import Home from './pages/Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import TourDetail from './pages/TourDetail'
import Tours from './pages/Tours'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Airbnb from './pages/Airbnb'
import Land from './pages/Land'
import Hotels from './pages/Hotels'
import Gallery from './pages/Gallery'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/properties/hotels" element={<Hotels />} />
        <Route path="/properties/land" element={<Land />} />
        <Route path="/airbnb" element={<Airbnb />} />
        
        <Route path='/land' element={<Land />} />
        <Route path="/tours/:id" element={<TourDetail />} />
         
      </Routes>
    </BrowserRouter>
    </>
  )
} 

export default App