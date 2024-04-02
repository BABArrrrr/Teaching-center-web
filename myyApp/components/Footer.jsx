import Image from "next/image"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
const Footer = () => {
  return (
    <section className="container mx-auto my-10">
            <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-10 rounded-3xl items-start">

                    <div className="flex flex-col items-center lg:items-start gap-5 ">
                        <Image src="/assets/end.png" alt="footer logo" width={100} height={100}/>
                        <p className="text-center lg:text-start">20 Osgood Rd, Milford, NH 03655, USA +1233131443</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-5">
                        <p className="text-xl font-medium">Company</p>
                        <p className="text-base">Careers</p>
                        <p className="text-base">Teachers</p>
                        <p className="text-base">Support</p>
                        <p className="text-base">Contact</p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-5">
                        <p className="text-xl font-medium">Product</p>
                        <p className="text-base">Courses</p>
                        <p className="text-base">Pricing</p>
                        <p className="text-base">Blog</p>                        

                    </div>                    
                    <div className="flex flex-col items-center lg:items-start gap-5">
                        <p className="text-xl font-medium">Legal</p>
                        <p className="text-base">Terms & Conditions</p>                        
                        <p className="text-base">Privacy Policy</p>                        
                    </div>

                    <div className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center     gap-5">                        
                        <BsFacebook className="text-3xl text-gray-400"/>
                        <BsTwitter className="text-3xl text-gray-400"/>
                        <BsInstagram className="text-3xl text-gray-400"/>                        
                    </div>
            </div>
    </section>
  )
}

export default Footer