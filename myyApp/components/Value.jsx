import Image from "next/image"

const Value = () => {
  return (
    <section className='container mx-auto py-20'>
        <p className='lg:text-xl text-base font-semibold text-gray-500 text-center '>WHY CHOOSE US</p>
        <p className='text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3 '>Our Values</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20 ">
            <div className="flex flex-col gap-5 items-center">
                <Image src="/assets/icon1.png" alt="v1" width={80} height={80}/>
                <p className="text-2xl font-semibold text-black">Speaking clubs </p>
                <p className="text-gray-500 text-center">In our school you will practice<br />your speaking skills and just get <br /> a lot of positive emotions</p>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <Image src="/assets/icone2.png" alt="v1" width={65} height={65}/>
                <p className="text-2xl font-semibold text-black">Quality control </p>
                <p className="text-gray-500 text-center">In our school you will practice<br />your speaking skills and just get <br /> a lot of positive emotions</p>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <Image src="/assets/icon3.png" alt="v1" width={80} height={80}/>
                <p className="text-2xl font-semibold text-black">Progress analysis </p>
                <p className="text-gray-500 text-center">In our school you will practice<br />your speaking skills and just get <br /> a lot of positive emotions</p>
            </div>
        </div>

    </section>
  )
}

export default Value