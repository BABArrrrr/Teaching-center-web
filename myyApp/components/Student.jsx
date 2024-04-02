import Image from "next/image"

const Student = () => {
  return (
    <section className='container mx-auto'>

            <p className='text-gray-500 lg:text-xl text-base font-semibond uppercase'>
                Top Studying
            </p>
            <p className='text-gray-500 text-3xl lg:text-5xl  font-semibond capitalize'>
                Our student say    
            </p>
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center gap-5 items-center py-10 lg:py-20">
                <Image src="/assets/person4.png" alt="v1" width={400} height={400} />
                <div className="flex flex-col gap-5 items-start ">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  ">Martin Watson </p>
                    <div className="flex items-center gap-2">
                        <Image src={"/assets/flag3.png"} alt="" width={50} height={50}/>
                        <p className="text-gray-500 ">B2 course student</p>   
                    </div>
                    <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">There is no way I could have made the same <br /> progress learning Spanish without using Lingua. <br /> The best part is now learning spanish has <br /> become one of my biggest hobbies.</p>
                </div>
            </div>
    </section>
  )
}

export default Student