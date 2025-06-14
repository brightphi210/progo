import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={` lg:py-[5rem] py-[2rem] pb-[6rem] lg:px-[25rem] px-5 bg-gray-100 text-black`}>

      <p className="text-center text-base pt-5">Get in touch</p>
      <ul className="lg:w-full w-[90%] px-5 m-auto justify-center flex items-center gap-10 mt-5">
        <a href="#">
          <li className="hover:bg-neutral-800 hover:text-neutral-500 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-lg bg-none border border-neutral-400"><FaLinkedin /></li>
        </a>

        <a href="#">
          <li className="hover:bg-neutral-800 hover:text-neutral-500 hover:border-none hover:transition-all ease-in-out delay-75 flex rounded-full lg:p-5 p-3.5 lg:text-xl text-lg bg-none border border-neutral-400"><FaXTwitter /></li>
        </a>
      </ul>
    </div>
  )
}

export default Footer