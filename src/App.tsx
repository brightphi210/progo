import { useEffect, useState } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import logo from '../src/assets/Progo logo Icon-01.png'



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function App() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  
  const handleLinkClick = (sectionId : any) => {
    setIsNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-stone-950 to-neutral-950 h-screen justify-center flex items-center">
        <img 
          src={logo} 
          className="w-16 animate-zoom" 
          alt="Logo" 
        />
    </div>
    );
  }

  return (
    <div className='bg-[#0e0e11]'>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} handleLinkClick={handleLinkClick}/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
