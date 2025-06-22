"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";


export default function Home() {
  const [searchString, setSearchString] = useState("");

  // Catching search values on frontend
  function handleSearchChange(event) {
    setSearchString(event.target.value);
  }

  // Search button Icon click handler
  function handleSearchClick() {
    // Handle search logic here
    alert(searchString);
    setSearchString("");
  }

  // handling entr key press for search string

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      // Handle search logic here
      alert(searchString);
      setSearchString("");
    }
  }


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows: true,       // ✅ Enable arrows
    autoplay: true,     // ✅ Enable autoplay
    autoplaySpeed: 3000 // Time between slides (ms)
  };

  return (
    <>
      {/* Top Strip */}

      <div className="lg:flex hidden bg-[#3BB77E] lg:bg-[#ffff]  justify-center lg:justify-between border-b-[2px] border-b-[#eeee] select-none text-gray-500 items-center px-4 text-[14px] py-1.5 font-[500] ">
        <div className=" gap-1 hidden lg:flex ">
          <span className="hover:cursor-pointer pr-2 rounded border-[gray] hover:text-[#181818]">
            About Us
          </span>
          <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">
            My Account
          </span>
          <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">
            Wishlist
          </span>
          <span className="hover:cursor-pointer border-l-[2px] px-2 hover:text-[#181818] border-[#eeee]">
            Order Tracking
          </span>
        </div>

        <div className="flex  justify-center items-center text-[15px] -ml-2 font-semibold gap-1   text-white lg:text-[gray]  ">
          <span>Get upto 50% off on electronics</span>
          <FaLongArrowAltRight
            size={18}
            className="mt-0.5 text-white lg:text-[#3BB77E] hover:cursor-pointer hover:ml-1 transition-all duration-[100ms]"
          />
        </div>

        <div className=" hidden lg:flex justify-center items-center gap-2.5">
          <span>
            Need help? Call Us :{" "}
            <a
              href="tel:+916388079667"
              className="font-semibold text-[#35B178]"
            >
              +91 6388079667
            </a>
          </span>
          <span className="flex justify-center items-center gap-0.5 border-l-[2px] pl-2 border-[#dddd] hover:cursor-pointer hover:text-[#181818]">
            <RiGlobalLine size={16} />
            English
          </span>
        </div>
      </div>

      {/* Closing of top strip */}

      {/* Nav Starting  */}

      <div className="lg:px-2 pl-1 lg:pl-2 pr-3 lg:pr-2 flex justify-between items-center border-b-0 pb-1 border-[#ECECEC] shadow-sm lg:shadow-none">

        <div className="inline lg:hidden">
          <SortRoundedIcon  fontSize="large"  className="text-[#80858e] hover:cursor-pointer"/>
        </div>

        <Image
          src="/logo.png" // image in public folder
          alt="Vercel Logo"
          width={175}
          height={60}
        />

        <div className="border-[2px] hidden lg:flex text-[#133B50] rounded font-[600]  justify-center items-center border-[#ECECEC]  pl-2 pr-3  py-3 ml-5 ">
          <button className="border-r-3 hover:cursor-pointer flex justify-center items-center pr-2 border-[#ECECEC] ">
            &nbsp;&nbsp;All Categories
            <IoIosArrowDown className="ml-0.5" size={16} color="#181818" />
          </button>

          <input
            onKeyDown={handleKeyDown}
            value={searchString}
            onChange={handleSearchChange}
            type="text"
            className="outline-0  w-[450px]  px-3"
            placeholder="Search for items..."
          />

          <button
            onClick={handleSearchClick}
            className="flex hover:cursor-pointer justify-center transition-all duration-75 items-center "
          >
            <IoSearch
              size={20}
              className="hover:text-[#35B178] text-[#181818]"
            />
          </button>
        </div>

        <div className="font-[600]  text-[#7E7E7E] flex justify-center items-center gap-6">


             


          <div className="hover:cursor-pointer  hover:text-[#3BB77E]">
            <Badge
              badgeContent={1}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#3BB77E", // your custom color
                  color: "white", // text color inside badge
                },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
            <span className="hidden lg:inline" >Cart</span>
          </div>


              <div className="pr-2 hidden lg:flex hover:cursor-pointer hover:text-[#3BB77E] ">
                <PermIdentityOutlinedIcon fontSize="medium"  />
                
                <span className="pt-0.5">Account</span>
              </div>

          
        </div>
      </div>

      {/* Nav Closing */}

      {/* Main Nav Starting */}

              <nav className="px-3 bg-white font-[600] sticky top-0 border-y-[2px] flex justify-between  items-center border-[#ECECEC] py-2">

                <div>
                    <button className="flex justify-center bg-[#0CB85E] px-2 py-2 rounded shadow text-white items-center">
                      <CategoryOutlinedIcon/>
                      Browse All Categories
                      <KeyboardArrowDownOutlinedIcon/>
                      </button>
                </div>

                <ul className="flex justify-between  items-center  gap-3 w-[60%]">

                  <li>
                    <button className="flex hover:cursor-pointer hover:text-[#0CB85E]  justify-center items-center">
                      <LocalFireDepartmentOutlinedIcon className="text-[#0CB85E]"/>
                      Hot Deals
                    </button>
                  </li>

                  

                  <li>
                    <button className="flex hover:cursor-pointer hover:text-[#0CB85E]  justify-center items-center">
                      New Arrivals
                    </button>
                  </li>

                  <li>
                    <button className="flex hover:cursor-pointer hover:text-[#0CB85E]  justify-center items-center">
                      Offers / Coupons
                    </button>
                  </li>


                  <li>
                    <button className="flex hover:cursor-pointer hover:text-[#0CB85E]  justify-center items-center">
                      About Us
                    </button>
                  </li>


                   <li>
                    <button className="flex hover:cursor-pointer hover:text-[#0CB85E] justify-center items-center">
                      Contact Us
                    </button>
                  </li>


                </ul>

                <div className="flex justify-center items-center gap-1">
                      <HeadsetMicOutlinedIcon fontSize="large" className="text-[#253D4E]"/>
                      <div className="flex flex-col justify-center items-center">
                        <div className="text-[#0CB85E] text-[20px]">1800 - 9936</div>
                        <div className="text-[#6A7282] text-[14px] -mt-1">24/7 Helpdesk</div>
                      </div>
                </div>

              </nav>


      {/* Main Nav Closing */}


              {/* Carousel */}

           

       
                


          
            
         


              {/* Carousel Closing */}



              {/* Featured Categories */}

              
              <div className="px-3 mt-8">
                <h1 className="text-[#253D4E] text-[28px] font-[700] mb-6 ">Featured Categories</h1>

                <div className="flex items-center gap-4 overflow-x-scroll">

                    
                    <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>



                    


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>

                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>

                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>


                     <div className="bg-[#fff3ff] hover:cursor-pointer hover:border-[1.5px] border-[#0CB85E] h-[170px] rounded-lg hover:shadow-sm w-[140px]">

                    </div>

                    

                </div>

              </div>
      
    </>
  );
}
