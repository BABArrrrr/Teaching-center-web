import Teacher from '../components/Teacher'
import Value from '@/components/Value'
import Navbar from "@/components/Navbar"
import Student from "@/components/Student"
import MoreInfomode from '@/components/MoreInfomod'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'


import Image from "next/image";
export default function Home() {
  return (
    <>
    <div  className="container mx-auto my-10">
      <div className="bg-[#fff5f1] px-6 lg:px-8 py-10 rounded-3xl">

      <Navbar/>
      <div className="flex lg:flex-row flex-col justify-between gap-5 lg:items-center">

        <div className="flex flex-col gap-5 lg:gap-10">

          <p className="sm:text-4xl md:text-5xl lg:text-6xl text-2xl  font-medium lg:justify-between justify-center text-black ">
            A unique appraoch <br className='lg:flex hidden' /> to learning foreign <br className='lg:flex hidden' />languages online
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 ">Learn at your on pace with liftime <br className='lg:flex hidden'/> access on mobile and desktop</p>
          <button className="btn btn-sm lg:btn-lg  bg-[#524fd5] text-white border-none w-36
          lg:w-44 capitalize rounded-full">Get Started </button>
        </div>
        <Image src="/assets/Image.png" width={600} height={600}alt=""/>
      </div>
      </div>
    </div>
    <div id="Value-sec"><Value /></div>
<div id="Teacher-sec"><Teacher /></div>
<div id="Student-sec"><Student /></div>
<div id="MoreInfo-sec"><MoreInfomode /></div>
<div id="Cta-sec"><Cta /></div>
<div id="Footer-sec"><Footer /></div>

   
    </>

  );
}
