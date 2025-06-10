import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// import bike from "../assets/bikevideo.mp4"
// import bike from "../assets/bikec.mp4"
import bike from "../assets/bikec.mp4"
// import { OrangeButton, WhiteButton } from "../components/Button"

import bikea from "../assets/a.avif"
import bikeb from "../assets/b.avif"
import bikec from "../assets/c.avif"
import biked from "../assets/d.avif"
import bikee from "../assets/e.avif"
import honest from "../assets/honesty.png"

import { FaLinkedin, FaCopy, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { OrangeButton, WhiteButton } from "../components/Button"

// Typing Effect Hook
const useTypingEffect = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    let i = 0
    setDisplayText("")
    setIsComplete(false)

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copiedField, setCopiedField] = useState("")
  const [showFirstText, setShowFirstText] = useState(false)
  const [showSecondText, setShowSecondText] = useState(false)
  const [startTyping, setStartTyping] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [selectedBikeImage, setSelectedBikeImage] = useState(bikec)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentBikeIndex, setCurrentBikeIndex] = useState(0)
  const [imageTransition, setImageTransition] = useState(false)
  const [changingImageTransition, setChangingImageTransition] = useState(false)

  const bikeImages = [bikea, bikeb, bikec, biked, bikee]
  const changingTexts = [
    "in Africa",
    "for Africa", 
    "by Africa"
  ]

  const typingText = "Let's redefine movement by launching Africa's most affordable electric mobility product. Built for everyday people, powered by innovation."
  const { displayText, isComplete } = useTypingEffect(startTyping ? typingText : "", 30)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })

    // Animation sequence
    setTimeout(() => setShowFirstText(true), 500)
    setTimeout(() => setShowSecondText(true), 1200)
    setTimeout(() => setStartTyping(true), 2000)
  }, [])

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => setShowButtons(true), 500)
    }
  }, [isComplete])

  interface CopyToClipboardFn {
    (text: string, field: keyof AccountDetails): void;
  }

  interface AccountDetails {
    bankName: string;
    accountName: string;
    accountNumber: string;
    sortCode: string;
    swiftCode: string;
  }

  const copyToClipboard: CopyToClipboardFn = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(""), 2000)
    })
  }

  const accountDetails = {
    bankName: "Access Bank",
    accountName: "Progo Mobility Ltd",
    accountNumber: "1234567890",
    sortCode: "044150149",
    swiftCode: "ABNGNGLA"
  }

  const handleImageClick = (image: string, index: number) => {
    console.log(`Image ${index + 1} clicked:`, image)
    if (image !== selectedBikeImage) {
      setImageTransition(true)
      setTimeout(() => {
        setSelectedBikeImage(image)
        setImageTransition(false)
      }, 150)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingImageTransition(true)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % changingTexts.length)
        setCurrentBikeIndex((prev) => (prev + 1) % bikeImages.length)
        setChangingImageTransition(false)
      }, 300); // Increased from 150ms
    }, 5000); // Increased from 3000ms to 5000ms (5 seconds)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <section className="relative w-full h-screen overflow-hidden" data-aos="fade-in">
        {/* Background Video */}
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={bike} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0e0e11] opacity-70"></div>

        {/* Content on top of video */}
        <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
            <div className="lg:px-[20rem] px-0">
              <h1 className={`special text-white text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-6xl font-medium tracking-tight pb-2 transition-all duration-1000 ${showFirstText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Want to go ?
              </h1>

              <h1 className={`special text-white text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-6xl font-medium tracking-tight pb-4 transition-all duration-1000 delay-700 ${showSecondText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                then go like a pro
              </h1>
              
              <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-base sm:text-lg md:text-xl lg:text-lg pt-6 min-h-[120px] lg:min-h-[100px]">
                <p className="text-white leading-relaxed">
                  {displayText}
                  {startTyping && !isComplete && <span className="animate-pulse">|</span>}
                </p>
              </div>
              
              <div className={`flex items-center gap-4 mt-8 flex-wrap transition-all duration-500 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div onClick={() => {
                  const subscribeSection = document.getElementById('subscribe-section');
                  if (subscribeSection) {
                    subscribeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <OrangeButton title="Subscribe" />
                </div>
                <div onClick={() => {
                  const exploreSection = document.getElementById('explore-section');
                  if (exploreSection) {
                    exploreSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <WhiteButton title="Explore" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="special text-3xl sm:text-3xl lg:text-4xl text-center font-extrabold pb-4 text-[#f04c28]" data-aos="fade-up">
            Move like a PRO
          </h2>
          <p
            className="text-black w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[50%] pb-12 text-sm sm:text-sm px-5 lg:text-sm text-center mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            " We think, moving from point A to B should be as cheap as bread. so we are on a journey to launch africas
            most affordable electric mobility product. see what we are building "
          </p>

          <div
            id="explore-section"
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start max-w-6xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {/* Main Image Section - Takes 3 columns on large screens */}
            <div
              className="lg:col-span-3 relative justify-center flex border-2 border-neutral-100 p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm bg-white"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-full">
                <div className="justify-center flex mx-auto px-4 sm:px-8 lg:px-12">
                  <img 
                    src={selectedBikeImage || "/placeholder.svg"} 
                    alt="Selected bike" 
                    className={`w-full h-auto transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      imageTransition ? 'scale-110 opacity-90' : 'scale-100 opacity-100'
                    }`}
                  />
                </div>
                
                {/* Thumbnail Images */}
                <div className="flex justify-center gap-3 sm:gap-4 mt-6 px-3">
                  {bikeImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageClick(image, index)}
                      className={`w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-18 lg:h-18 xl:w-22 xl:h-22 rounded-full overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                        selectedBikeImage === image 
                          ? 'border-[#f04c28] scale-110 shadow-lg' 
                          : 'border-gray-200 hover:border-[#f04c28]'
                      }`}
                    >
                      <img 
                        src={image || "/placeholder.svg"} 
                        alt={`Bike view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Badge */}
              <div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white border border-neutral-200 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 justify-center flex items-center rounded-full shadow-lg z-10"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div>
                  <p className="text-[8px] sm:text-xs text-orange-500 italic text-center font-medium">Launch Price</p>
                  <p className="special text-base sm:text-lg lg:text-lg text-center font-bold tracking-tighter text-black">350k</p>
                </div>
              </div>
            </div>

            {/* Specs Section - Takes 1 column on large screens, stacked vertically */}
            <div
              className="lg:col-span-1 grid grid-cols-2 items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="bg-gray-100 p-3 rounded-lg border border-neutral-100">
                <p className="text-xs text-orange-500 italic text-center pb-1">Weight</p>
                <p className="text-base text-center font-medium text-black">20kg</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-neutral-100">
                <p className="text-xs text-orange-500 italic text-center pb-1">Runtime</p>
                <p className="text-base text-center font-medium text-black">5.4hrs</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg border border-neutral-100">
                <p className="text-xs text-orange-500 italic text-center pb-1">Drive Mode</p>
                <p className="text-base text-center font-medium text-black">Duo Drive</p>
              </div>

              <div className="p-3 rounded-lg border border-neutral-100">
                <button className="bg-black p-3 px-6 rounded-lg text-white text-sm font-medium w-full hover:bg-gray-100 transition-colors">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20 lg:mt-24 py-16 sm:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
            
            <div className="text-center lg:text-left relative z-10 order-2 lg:order-1" data-aos="fade-up">
              <p className="text-gray-600 italic mb-2 text-center text-base sm:text-lg">" Progo isn't one of those imported Products "</p>
              <div className="mb-6">
                <div className="flex items-center gap-2 justify-center">
                  <h2 className="special text-3xl sm:text-3xl lg:text-5xl text-black font-bold">
                    It is built
                  </h2>
                  <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center overflow-hidden min-w-[200px]">
                    <h2 
                      key={currentTextIndex}
                      className="special text-4xl sm:text-5xl lg:text-5xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold animate-slideUp"
                    >
                      {changingTexts[currentTextIndex]}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="order-1 lg:order-2 p-6 sm:p-8 lg:p-10 rounded-2xl relative z-10 bg-white shadow-sm"
              data-aos="fade-up"
            >
              <div className="w-full transition-all duration-500 ease-in-out overflow-hidden rounded-xl">
                <img 
                  key={currentBikeIndex}
                  src={bikeImages[currentBikeIndex] || "/placeholder.svg"} 
                  className={`w-full h-auto transition-all duration-500 ease-in-out transform ${
                    changingImageTransition ? 'scale-110 opacity-90' : 'scale-100 opacity-100'
                  }`}
                  alt="Changing bike view" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">
            
            <div className="rounded-2xl overflow-hidden w-full relative order-2 lg:order-1 shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <img src={honest || "/placeholder.svg"} alt="Founder" className="w-full h-auto" />
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="order-1 lg:order-2">
              <h2 className="special text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-bold pb-6">Meet our founder</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-sm leading-relaxed">
                " Progo is a product of passion, innovation, and a deep understanding of the African market. "
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos unde ratione ea placeat 
                corporis sit fuga doloremque provident suscipit, iure iste, assumenda maxime voluptate debitis 
                possimus? At, tenetur molestias.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <a href="https://www.linkedin.com/in/chibuzor-philip12/" className="group">
                  <div className="group-hover:bg-gray-100 group-hover:text-gray-800 group-hover:border-gray-300 transition-all duration-300 ease-in-out flex rounded-full p-4 text-xl bg-white border border-gray-400 text-gray-600 shadow-sm">
                    <FaLinkedin />
                  </div>
                </a>
                <a href="https://x.com/chibuzorphilip7" className="group">
                  <div className="group-hover:bg-gray-100 group-hover:text-gray-800 group-hover:border-gray-300 transition-all duration-300 ease-in-out flex rounded-full p-4 text-xl bg-white border border-gray-400 text-gray-600 shadow-sm">
                    <FaXTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe-section" className="text-center bg-gray-50 py-20 sm:py-24 lg:py-28">
        <div>
          <h2 className="text-base sm:text-base text-black mb-6">Love what we are doing</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#f04c28] text-white py-4 px-8 rounded-lg text-sm hover:bg-[#e03c1f] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Support us
          </button>
        </div>

        <div className="pt-12 w-full">
          <h2 className="pb-4 lg:text-base text-sm text-black">Be the first to know when we launch</h2>
          <div className="lg:flex lg:flex-row flex-col m-auto w-full justify-center px-4 items-center gap-3 ">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white border lg:w-[30%] border-gray-300 text-black py-4 px-6 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f04c28] focus:border-transparent transition-all duration-300"
            />
            <button className="bg-[#f04c28] lg:w-fit w-[50%] lg:mt-0 mt-3  text-white py-4 px-8 rounded-lg text-sm hover:bg-[#e03c1f] transition-all duration-300 hover:scale-105 shadow-lg">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 w-full max-w-lg mx-auto transform transition-all duration-300 scale-100 animate-fadeIn shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="special text-2xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Support Progo
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-sm sm:text-sm mb-6 leading-relaxed">
                Help us build Africa's most affordable electric mobility solution. Every contribution counts!
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-orange-600 font-semibold tracking-wide">BANK NAME</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.bankName, 'bankName')}
                      className="text-gray-400 hover:text-black transition-colors p-1 hover:bg-white rounded"
                    >
                      {/* <FaCopy size={14} /> */}
                    </button>
                  </div>
                  <p className="text-black font-medium text-base">{accountDetails.bankName}</p>
                  {copiedField === 'bankName' && <span className="text-green-500 text-sm font-medium">Copied!</span>}
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-orange-600 font-semibold tracking-wide">ACCOUNT NAME</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.accountName, 'accountName')}
                      className="text-gray-400 hover:text-black transition-colors p-1 hover:bg-white rounded"
                    >
                      {/* <FaCopy size={14} /> */}
                    </button>
                  </div>
                  <p className="text-black font-medium text-base">{accountDetails.accountName}</p>
                  {copiedField === 'accountName' && <span className="text-green-500 text-sm font-medium">Copied!</span>}
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-orange-600 font-semibold tracking-wide">ACCOUNT NUMBER</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.accountNumber, 'accountNumber')}
                      className="text-gray-400 hover:text-black transition-colors p-1 hover:bg-white rounded"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                  <p className="text-black font-medium font-mono text-base tracking-wider">{accountDetails.accountNumber}</p>
                  {copiedField === 'accountNumber' && <span className="text-green-500 text-sm font-medium">Copied!</span>}
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">
                  Click any field to copy to clipboard
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0);
            opacity: 1;
          }
          90% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 3s ease-in-out;
        }
        
        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #f04c28;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #e03c1f;
        }
      `}</style>
    </div>
  )
}

export default Home
