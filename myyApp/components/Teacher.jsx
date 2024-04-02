import Image from "next/image"

const Teacher = () => {
    return (
        <section className='container mx-auto py-20 '>
            <p className='text-xl font-medium text-gray-500 uppercase '>key Person</p>
            <p className='text-5xl font-semibold text-gray-500  mt-3 '>Meet our teachers</p>

            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-16 mx-auto py-10 lg:py-20  ">

                <div className="flex flex-col gap-5 ">
                    <Image src="/assets/person1.png" alt="v1" width={300} height={300} />
                    <p className="text-2xl font-semibold text-black">Christian Howard </p>
                    <div className="flex items-center gap-2">
                        <Image src={"/assets/flag1.png"} alt="" width={50} height={50}/>
                        <p className="text-gray-500 ">Italian teacher</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5 ">
                    <Image src="/assets/person2.png" alt="v1" width={300} height={300} />
                    <p className="text-2xl font-semibold text-black">Sandra Wilson </p>
                    <div className="flex items-center gap-2">
                        <Image src={"/assets/flag2.png"} alt="" width={50} height={50}/>
                        <p className="text-gray-500 ">Spanish teacher</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5 ">
                    <Image src="/assets/person3.png" alt="v1" width={300} height={300} />
                    <p className="text-2xl font-semibold text-black">Jimmy Cooper</p>
                    <div className="flex items-center gap-2">
                        <Image src={"/assets/flag3.png"} alt="" width={50} height={50}/>
                        <p className="text-gray-500 ">English teacher</p>
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default Teacher