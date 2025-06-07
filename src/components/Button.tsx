import React from 'react'
import { IoArrowForward } from 'react-icons/io5'


interface ButtonProps{
    title: string;
    action?: () => void;
}


interface Button3Props{
  title: string;
}
export const WhiteButton: React.FC<ButtonProps> = ({title, action} : ButtonProps) => {
  return (
    <button onClick={action} className={`flex gap-3 font-normal text-sm cursor-pointer items-center bg-gray-100 border border-gray-300 text-gray-800 px-5 py-3 justify-center lg:w-fit rounded-md`}>
        {title}
        <IoArrowForward />
    </button>
  )
}



export const OrangeButton: React.FC<Button3Props> = ({title} : Button3Props) => {
  return (
    <button className='flex gap-3 font-semibold text-sm cursor-pointer items-center bg-gradient-to-r from-orange-600 to-orange-700 text-white px-10 py-3 rounded-md'>
        {title}
    </button>
  )
}


export const Button3:React.FC<Button3Props> = ({title}:Button3Props) => {
  return (
    <button className='flex gap-3 font-medium ml-auto text-xs cursor-pointer items-center  text-orange-400 rounded-md'>
        {title}
        <IoArrowForward />
    </button>
  )
}