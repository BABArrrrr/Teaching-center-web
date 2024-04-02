'use client'
import Image from "next/image"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { GiCancel } from "react-icons/gi"

const Navbar = () => {
  const [isClick, setClick] = useState(false)
  return (
    <div className='container mx-auto relative '>
        <div className="flex justify-between items-center">

        <Image src="/assets/Logo.png" width={100} height={100}/>

        <div className="lg:flex items-center gap-10 hidden ">
            <p className="text-black">Course</p>
            <p className="text-black">About Us</p>
            <p className="text-black"> Teachers</p>
            <p className="text-black">Pricing</p>
            <p className="text-black">Careers</p>
            <p className="text-black">Blog</p>

        </div>
        <button className="lg:hidden flex items-end text-black text-2xl" onClick={()=>{setClick(!isClick)}}>
          {
            isClick?<GiCancel />:< FaBars />

          }
        </button>
        
        <button className="btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full lg:flex hidden">Get Started </button>
        </div>
        {
          isClick && (
            <div className="lg:hidden rounded bg-white absolute right-0 w-1/3 text-right">
            
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1  hover:text-white text-xl">Course</p>
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1 hover:text-white text-xl">About</p>
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1 hover:text-white text-xl">Teachers</p>
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1 hover:text-white text-xl">Pricing</p>
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1 hover:text-white text-xl">Careers</p>
              <p className="py-2 hover:bg-[#524FD5] text-[#524FD5] px-1 hover:text-white text-xl">Blog</p>
                                      
            </div>
          )
        }
    </div >
  )
}

export default Navbar