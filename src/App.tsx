
import Home from './pages/Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import TourDetail from './pages/TourDetail'
import Tours from './pages/Tours'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        
        <Route path="/tours/:id" element={<TourDetail />} />
         
      </Routes>
    </BrowserRouter>
    </>
  )
} 

export default App