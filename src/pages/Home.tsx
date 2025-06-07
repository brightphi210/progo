import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTypingEffect } from "../pages/hooks/use-typing-effect"

// import bike from "../assets/bikevideo.mp4"
// import bike from "../assets/bikec.mp4"
import bike from "../assets/newbike.mp4"
import { OrangeButton, WhiteButton } from "../components/Button"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import bikea from "../assets/a.avif"
import bikeb from "../assets/b.avif"
import bikec from "../assets/c.avif"
import biked from "../assets/d.avif"
import bikee from "../assets/e.avif"
import honest from "../assets/honesty.png"

import { FaLinkedin, FaCopy, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import required modules
import { Pagination, Navigation } from "swiper/modules"

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copiedField, setCopiedField] = useState("")

  const typingTexts = [
    "Affordable Mobility for Africans",
    "Built in Africa, for Africa",
  ]

  const typedText = useTypingEffect(typingTexts, 100, 50, 2000)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })
  }, [])

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

  return (
    <div>
      <section className="relative w-full h-[95vh] overflow-hidden" data-aos="fade-in">
        {/* Background Video */}
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={bike} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0e0e11] opacity-70"></div>

        {/* Content on top of video */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div data-aos="fade-up" data-aos-delay="300" className="w-full max-w-4xl">
            <h1 className="special text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight italic flex items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-300 to-[#f04c28] bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </h1>
            <p className="text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] font-semibold text-sm sm:text-base md:text-lg lg:text-xl flex justify-center m-auto pt-5 px-4" data-aos="fade-up" data-aos-delay="600">
              Let's redefine movement by launching Africa's most affordable electric mobility product. Built for
              everyday people, powered by innovation.
            </p>
            <div className="flex items-center gap-4 justify-center mt-5 flex-wrap" data-aos="fade-up" data-aos-delay="900">
              <OrangeButton title="Subscribe" />
              <WhiteButton title="Explore" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 sm:pt-16 lg:pt-20 px-4">
        <h2 className="text-2xl sm:text-3xl text-center font-extrabold pb-3 text-[#f04c28]" data-aos="fade-up">
          Move like a PRO
        </h2>
        <p
          className="text-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[35%] pb-10 text-sm sm:text-base lg:text-xl text-center m-auto justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          " We think, moving from point A to B should be as cheap as bread. so we are on a journey to launch africas
          most affordable electric mobility product. see what we are building "
        </p>

        <div
          className="w-[95%] sm:w-[90%] lg:w-[70%] relative justify-center m-auto flex bg-neutral-950 border-2 border-neutral-800 p-3 sm:p-5 rounded-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="justify-center flex m-auto px-3 sm:px-10 lg:px-20">
                <img src={bikec || "/placeholder.svg"} alt="" className="w-full h-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto px-3 sm:px-10 lg:px-20">
                <img src={bikeb || "/placeholder.svg"} alt="" className="w-full h-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto px-3 sm:px-10 lg:px-20">
                <img src={bikea || "/placeholder.svg"} alt="" className="w-full h-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto px-3 sm:px-10 lg:px-20">
                <img src={biked || "/placeholder.svg"} alt="" className="w-full h-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto px-3 sm:px-10 lg:px-20">
                <img src={bikee || "/placeholder.svg"} alt="" className="w-full h-auto" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className="bg-neutral-900 border border-neutral-800 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 justify-center flex items-center rounded-full absolute top-3 right-3 sm:top-5 sm:right-5 lg:right-10 lg:top-10 z-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <p className="text-[8px] sm:text-[10px] text-yellow-500 italic text-center">Launch Price</p>
              <p className="text-sm sm:text-lg lg:text-2xl text-center font-semibold tracking-tighter">350k</p>
            </div>
          </div>

          <div
            className="bg-neutral-900 p-2 sm:p-4 rounded-md border gap-2 sm:gap-5 grid grid-cols-3 lg:grid-cols-4 justify-center border-neutral-800 absolute bottom-[-10px] bottom-[-50px] w-[90%] sm:w-[80%] z-10"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="border border-neutral-800 p-2 sm:p-3 rounded-md px-2 sm:px-4 w-full">
              <p className="text-[9px] sm:text-[11px] text-yellow-500 italic text-center">Weight:</p>
              <p className="text-sm sm:text-lg text-center font-semibold tracking-tighter">20kg</p>
            </div>

            <div className="border border-neutral-800 p-2 sm:p-3 rounded-md px-2 sm:px-4 w-full">
              <p className="text-[9px] sm:text-[11px] text-yellow-500 italic text-center">Runtime</p>
              <p className="text-sm sm:text-lg text-center font-semibold tracking-tighter">5.4hrs</p>
            </div>

            <div className="border border-neutral-800 p-2 sm:p-3 rounded-md px-2 sm:px-4 w-full">
              <p className="text-[9px] sm:text-[11px] text-yellow-500 italic text-center">Drive Mode</p>
              <p className="text-sm sm:text-lg text-center font-semibold tracking-tighter">Duo Drive</p>
            </div>

            <div className="border border-neutral-800 p-2 sm:p-3 rounded-md px-2 sm:px-4 w-full">
              <button className="bg-white p-2 sm:p-2.5 px-3 sm:px-6 rounded-md text-black text-xs sm:text-sm w-full">See More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:mt-16 lg:mt-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-8 md:px-16 lg:px-[5rem] xl:px-[10rem] 2xl:px-[20rem] relative min-h-[80vh] bg-neutral-900">
        <div className="col-span-1 text-center relative z-10 order-2 lg:order-1" data-aos="fade-up">
          <p className="text-neutral-400 italic mb-4 text-sm sm:text-base">" Progo isnt one of those imported Products "</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold mb-4">It is built in Africa</h2>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold italic">By Africa, for Africa</h2>
        </div>

        <div
          className="col-span-1 bg-neutral-900 border-neutral-800 border-2 p-5 sm:p-8 lg:p-10 rounded-2xl relative z-10 order-1 lg:order-2"
          data-aos="fade-up"
        >
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full">
                <img src={bikec || "/placeholder.svg"} className="w-full h-auto" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={bikeb || "/placeholder.svg"} className="w-full h-auto" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={bikea || "/placeholder.svg"} className="w-full h-auto" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={biked || "/placeholder.svg"} className="w-full h-auto" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={bikee || "/placeholder.svg"} className="w-full h-auto" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-8 md:px-16 lg:px-[5rem] xl:px-[10rem] 2xl:px-[20rem] py-10">
        <div className="rounded-full overflow-hidden w-full lg:w-[90%] h-auto lg:h-[90%] relative order-2 lg:order-1" data-aos="fade-up" data-aos-delay="200">
          <img src={honest} alt="" className="w-full h-auto" />
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold pb-4">Meet our founder</h2>
          <p className="text-neutral-400 italic mb-4 text-sm sm:text-base leading-loose">
            " Progo is a product of passion, innovation, and a deep understanding of the African market. "
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos unde ratione ea placeat 
            corporis sit fuga doloremque provident suscipit, iure iste, assumenda maxime voluptate debitis 
            possimus? At, tenetur molestias.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <a href="https://www.linkedin.com/in/chibuzor-philip12/">
              <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full p-3 sm:p-3.5 lg:p-4 text-base sm:text-lg lg:text-xl bg-none border border-neutral-400"><FaLinkedin /></li>
            </a>
            <a href="https://x.com/chibuzorphilip7">
              <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full p-3 sm:p-3.5 lg:p-4 text-base sm:text-lg lg:text-xl bg-none border border-neutral-400"><FaXTwitter /></li>
            </a>
          </div>
        </div>
      </section>

      <section className="text-center bg-neutral-900 space-y-6 py-20 px-4 sm:px-8 md:px-16 lg:px-[5rem] xl:px-[10rem] 2xl:px-[20rem] gap-8 items-center">
        <div>
          <h2 className="text-base sm:text-lg">Love what we are doing</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#f04c28] text-white p-3 px-6 rounded-lg mt-3 text-sm hover:bg-[#e03c1f] transition-colors"
          >
            Support us
          </button>
        </div>

        <div className="pt-10">
          <h2 className="pb-2 text-sm sm:text-base">Be the first to know when we launch</h2>
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex  gap-2 justify-center m-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-neutral-200 text-black p-3 w-full rounded-md text-sm"
            />
            <button className="bg-[#f04c28] text-white p-3 px-6 rounded-lg text-sm hover:bg-[#e03c1f] transition-colors whitespace-nowrap">Send</button>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 sm:p-8 w-full max-w-md mx-auto transform transition-all duration-300 scale-100 animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                Support Progo
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-neutral-300 text-sm sm:text-base mb-6">
                Help us build Africa's most affordable electric mobility solution. Every contribution counts!
              </p>
              
              <div className="space-y-4">
                <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-yellow-500 font-medium">BANK NAME</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.bankName, 'bankName')}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                  <p className="text-white font-semibold">{accountDetails.bankName}</p>
                  {copiedField === 'bankName' && <span className="text-green-500 text-xs">Copied!</span>}
                </div>

                <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-yellow-500 font-medium">ACCOUNT NAME</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.accountName, 'accountName')}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                  <p className="text-white font-semibold">{accountDetails.accountName}</p>
                  {copiedField === 'accountName' && <span className="text-green-500 text-xs">Copied!</span>}
                </div>

                <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-yellow-500 font-medium">ACCOUNT NUMBER</span>
                    <button 
                      onClick={() => copyToClipboard(accountDetails.accountNumber, 'accountNumber')}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                  <p className="text-white font-semibold font-mono">{accountDetails.accountNumber}</p>
                  {copiedField === 'accountNumber' && <span className="text-green-500 text-xs">Copied!</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-yellow-500 font-medium">SORT CODE</span>
                      <button 
                        onClick={() => copyToClipboard(accountDetails.sortCode, 'sortCode')}
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        <FaCopy size={14} />
                      </button>
                    </div>
                    <p className="text-white font-semibold font-mono text-sm">{accountDetails.sortCode}</p>
                    {copiedField === 'sortCode' && <span className="text-green-500 text-xs">Copied!</span>}
                  </div>

                  <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-yellow-500 font-medium">SWIFT CODE</span>
                      <button 
                        onClick={() => copyToClipboard(accountDetails.swiftCode, 'swiftCode')}
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        <FaCopy size={14} />
                      </button>
                    </div>
                    <p className="text-white font-semibold font-mono text-sm">{accountDetails.swiftCode}</p>
                    {copiedField === 'swiftCode' && <span className="text-green-500 text-xs">Copied!</span>}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700">
                <p className="text-neutral-400 text-xs text-center">
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Home