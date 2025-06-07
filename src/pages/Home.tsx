"use client"

import { useEffect } from "react"
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

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import required modules
import { Pagination, Navigation } from "swiper/modules"

const Home = () => {
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
        <div className="relative z-10 flex items-center justify-center h-full">
          <div data-aos="fade-up" data-aos-delay="300">
            <h1 className="special text-white text-5xl font-extrabold text-center tracking-tight italic flex items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-300 to-[#f04c28] bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse text-white">|</span>
              </span>
            </h1>
            <p className="text-center w-[60%] font-semibold text-xl flex justify-center m-auto pt-5" data-aos="fade-up" data-aos-delay="600">
              Let's redefine movement by launching Africa's most affordable electric mobility product. Built for
              everyday people, powered by innovation.
            </p>
            <div className="flex items-center gap-4 justify-center mt-5" data-aos="fade-up" data-aos-delay="900">
              <OrangeButton title="Subscribe" />
              <WhiteButton title="Explore" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20" >
        <h2 className="text-3xl text-center font-extrabold pb-3 text-[#f04c28]" data-aos="fade-up">
          Move like a PRO
        </h2>
        <p
          className="text-white lg:w-[35%] w-[95%] pb-10 lg:text-xl text-sm text-center m-auto justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          " We think, moving from point A to B should be as cheap as bread. so we are on a journey to launch africas
          most affordable electric mobility product. see what we are building "
        </p>

        <div
          className="lg:w-[70%] w-[95%] relative justify-center m-auto flex bg-neutral-950 border-2 border-neutral-800 p-5  rounded-lg"
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
              <div className="justify-center flex m-auto lg:px-20 px-3">
                <img src={bikec || "/placeholder.svg"} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto lg:px-20 px-3">
                <img src={bikeb || "/placeholder.svg"} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="justify-center flex m-auto lg:px-20 px-3">
                <img src={bikea || "/placeholder.svg"} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="justify-center flex m-auto lg:px-20 px-3">
                <img src={biked || "/placeholder.svg"} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="justify-center flex m-auto lg:px-20 px-3">
                <img src={bikee || "/placeholder.svg"} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className="bg-neutral-900 border border-neutral-800 lg:w-24 lg:h-24 justify-center flex items-center rounded-full absolute top-5 right-5 lg:right-10 lg:top-10 z-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <p className="text-[10px] text-yellow-500 italic text-center">Launch Price</p>
              <p className="lg:text-2xl text-lg text-center font-semibold tracking-tighter">350k</p>
            </div>
          </div>

          <div
            className="bg-neutral-900 p-4 rounded-md border gap-5 grid lg:grid-cols-4 grid-cols-2 justify-center border-neutral-800 absolute bottom-[-10px] w-[80%] z-10"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="border border-neutral-800 p-3 rounded-md px-4 w-full">
              <p className="text-[11px] text-yellow-500 italic text-center">Weight:</p>
              <p className="text-lg text-center font-semibold tracking-tighter">20kg</p>
            </div>

            <div className="border border-neutral-800 p-3 rounded-md px-4 w-full">
              <p className="text-[11px] text-yellow-500 italic text-center">Runtime</p>
              <p className="text-lg text-center font-semibold tracking-tighter">5.4hrs</p>
            </div>

            <div className="border border-neutral-800 p-3 rounded-md px-4 w-full">
              <p className="text-[11px] text-yellow-500 italic text-center">Drive Mode</p>
              <p className="text-lg text-center font-semibold tracking-tighter">Duo Drive</p>
            </div>

            <div className="border border-neutral-800 p-3 rounded-md px-4 w-full">
              <button className="bg-white p-2.5 px-6 rounded-md text-black text-sm">See More</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-20 py-10 grid grid-cols-2 items-center px-[20rem] relative min-h-[80vh] bg-neutral-900"
      >

        <div className="col-span-1 text-center relative z-10" data-aos="fade-up" >
          <p className="text-neutral-400 italic mb-4 text-base ">" Progo isnt one of those imported Products "</p>
          <h2 className="text-5xl bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold mb-4">It is built in Africa</h2>
          <h2 className="text-3xl text-white font-bold italic">By Africa, for Africa</h2>
        </div>

        <div
          className="col-span-1 bg-neutral-900 border-neutral-800 border-2 p-10 rounded-2xl relative z-10"
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
                <img src={bikec || "/placeholder.svg"} className="w-full" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={bikeb || "/placeholder.svg"} className="w-full" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full">
                <img src={bikea || "/placeholder.svg"} className="w-full" alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full">
                <img src={biked || "/placeholder.svg"} className="w-full" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img src={bikee || "/placeholder.svg"} className="w-full" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>


      <section className="grid grid-cols-2 gap-8 items-center px-[20rem] py-10" >
        <div className="rounded-full overflow-hidden w-[90%] h-[90%] relative" data-aos="fade-up" data-aos-delay="200">
            <img src={honest} alt="" className="w-full"/>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-3xl bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-bold pb-4">Meet our founder</h2>
            <p className="text-neutral-400 italic mb-4 text-base leading-loose">
                " Progo is a product of passion, innovation, and a deep understanding of the African market. "
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quos unde ratione ea placeat 
                corporis sit fuga doloremque provident suscipit, iure iste, assumenda maxime voluptate debitis 
                possimus? At, tenetur molestias.
            </p>
            <div className="flex items-center gap-3 mt-8">
                <a href="https://www.linkedin.com/in/chibuzor-philip12/">
                    <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-4 p-3.5 lg:text-xl text-lg bg-none border border-neutral-400"><FaLinkedin /></li>
                </a>
        
                <a href="https://x.com/chibuzorphilip7">
                    <li className="hover:bg-neutral-800 hover:text-neutral-100 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-4 p-3.5 lg:text-xl text-lg bg-none border border-neutral-400"><FaXTwitter /></li>
                </a>
            </div>
        </div>
      </section>

      <section className="text-center bg-neutral-900 space-y-6 py-20 px-[20rem] gap-8 items-center">
          <div>
            <h2 className="text-lg">Love what we are doing</h2>
            <button className="bg-[#f04c28] text-white p-3 px-6 rounded-lg mt-3 text-sm">Supports us</button>
          </div>

          <div className="mt-10">
            <h2 className="pb-2 ">Be the first to know when we launch</h2>
            <input type="email" placeholder="Enter your email" className="bg-neutral-200 text-black p-3 w-[50%] rounded-md"/>
          </div>
      </section>
    </div>
  )
}

export default Home
