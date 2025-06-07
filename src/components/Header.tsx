import logo from '../assets/Progo logo Icon-01.png'

const Header = ({isNavOpen, setIsNavOpen}:any) => {

    const handleShowNavbar = () => {
        setIsNavOpen(!isNavOpen)
    }


  return (

    <div className={`flex justify-center relative z-50 `}>

        <div className={`fixed lg:w-[100%] w-[100%] lg:px-[15rem] px-5 backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <div className='flex items-center '>
                <div className='flex items-center gap-2'>
                    <img src={logo} className='w-16'/>
                </div>

                <ul className='flex items-center ml-auto text-sm gap-6'>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>About</li>
                </ul>
            </div>
        </div>
        

        {isNavOpen === true && 
            <div className={`lg:hidden block fixed backdrop-filter backdrop-blur-3xl bg-opacity-60  left-0 top-[3.5rem] p-10 pt-14  w-full h-screen`}>
                <ul className='flex-col items-center text-2xl ml-auto '>
                    <a href="https://github.com/brightphi210/brightui" target="_blank" rel="noopener noreferrer">
                        <li className='cursor-pointer text-xl mb-8 flex items-center gap-2'>Github</li>
                    </a>

                    <a href="https://t.me/betauilibary" target="_blank" rel="noopener noreferrer">
                        <li className='cursor-pointer text-xl mb-8 flex items-center gap-2'> Telegram</li>
                    </a>

                </ul>
                
            </div>
        }
        
    </div>
  )
}

export default Header