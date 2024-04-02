import React from 'react'

const Cta = () => {
  return (
    <section className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>

        <p className='lg:text-4xl md:text-2xl text-xl font-medium text-center '>Get a free trial lesson today</p>
        <p className='lg:text-2xl md:text-lg text-base font-medium text-center '>Start fullfilling your language dreams with our school</p>

        <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 items-center mt-5">

        <input type="text"  className='text-black px-5 py-5 w-72 lg:w-96 rounded-full outlin-none bg-[#f8fafe] '  placeholder="Enter a email"/>
        <button  className='btn btn-sm bg-[#524fd5] rounded-full border-none lg:btn-lg text-white uppercase'>Send</button>
        
        </div>

    </section>
  )
}

export default Cta