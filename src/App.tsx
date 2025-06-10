import { useEffect, useState } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import logo from '../src/assets/Progo logo Icon-01.png'



import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
AOS.init();



function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  

  if (isLoading) {
    return (
      <div className="bg-white h-screen justify-center flex items-center">
        <img 
          src={logo} 
          className="w-16 animate-zoom" 
          alt="Logo" 
        />
    </div>
    );
  }

  return (
    <div className='bg-white'>

      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
