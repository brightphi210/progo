import logo from '../assets/Progo logo Icon-01.png'

const Header = () => {



  return (

    <div className={`flex justify-center relative z-50 `}>

        <div className={`fixed lg:w-[100%] w-[100%] lg:px-[15rem] px-5 backdrop-filter backdrop-blur-3xl bg-opacity-60 `}>
            <div className='flex items-center '>
                <div className='flex items-center gap-2'>
                    <a href={'/'}>
                        <img src={logo} className='w-16'/>
                    </a>
                </div>

                <ul className='flex items-center ml-auto text-sm gap-6'>
                    <a href={'/contact'}>
                        <li className='cursor-pointer text-gray-400 font-semibold text-sm' >Contact</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header