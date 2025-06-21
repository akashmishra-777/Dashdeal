import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export default function Home() {
  return <>
  {/* Top Strip */}

  <div className="flex bg-[#3BB77E] lg:bg-[#ffff]  justify-center lg:justify-between border-b-[2px] border-b-[#eeee] select-none text-gray-500 items-center px-4 text-[14px] py-1.5 font-[500] ">
    
    <div className=" gap-1 hidden lg:flex ">
      <span className="hover:cursor-pointer pr-2 rounded border-[gray] hover:text-[#181818]">About Us</span>
      <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">My Account</span>
      <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">Wishlist</span>
      <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">Order Tracking</span>
    </div>

    <div className="flex  justify-center items-center text-[15px] -ml-2 font-semibold gap-1   text-white lg:text-[gray]  ">
      <span>Get upto 50% off on electronics</span>
      <FaLongArrowAltRight size={18} className="mt-0.5 text-white lg:text-[#3BB77E] hover:cursor-pointer hover:ml-1 transition-all duration-[100ms]" />    
    </div>

    <div className=" hidden lg:flex justify-center items-center gap-2.5">
      <span>Need help? Call Us : <a href="tel:+916388079667" className="font-semibold text-[#35B178]">+91 6388079667</a></span>
      <span className="flex justify-center items-center gap-0.5 border-l-[2px] pl-2 border-[#dddd] hover:cursor-pointer hover:text-[#181818]">
        <RiGlobalLine size={16}/>
        English
      </span>
    </div>

  </div>

  {/* Closing of top strip */}

  </>
}
