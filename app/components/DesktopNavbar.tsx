import React from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DesktopNavbar = () => {
  return (
    <header className="w-[1440px] h-[136px] mx-auto bg-[#FAFAFA] text-white font-montserrat">
      {/* Top Bar */}
      <div className="w-[1439px] h-[58px] flex items-center justify-between px-8 py-2 bg-[#252B42] font-montserrat">
        <div className="flex items-center gap-6">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/Vector.png"
              alt="Phone Icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <h6 className="text-sm font-montserrat">(225) 555-0118</h6>
          </div>
          {/* Email */}
          <div className="w-[240px] h-[44px] flex items-center gap-2 ml-4">
            <Image
              src="/images/email.png"
              alt="Email Icon"
              width={16}
              height={16}
              className="object-contain"
            />
            <span className="text-sm font-montserrat">michelle.rivera@example.com</span>
          </div>
        </div>
        {/* Follow Us Text */}
        <p className="w-[312px] h-[24px] text-sm font-montserrat">Follow Us and get a chance to win 80% off</p>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <span className="w-[83px] h-[24px] text-sm font-montserrat">Follow Us :</span>
          <div className="w-[120px] h-[26px] flex items-center gap-4">
            <Image
              src="/images/insta.png"
              alt="Instagram"
              width={16}
              height={16}
              className="object-contain"
            />
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={16}
              height={16}
              className="object-contain"
            />
            <Image
              src="/images/fb.png"
              alt="Facebook"
              width={16}
              height={16}
              className="object-contain"
            />
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute w-[1437px] h-[58px] top-[70px] flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className='absolute w-[187px] h-[58] left-[38px]'>
          <h1 className="w-[108px] h-[32] top-[13px] font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left text-[#252B42]
  text-lg font-bold">Bandage</h1></div>
        {/* Navbar Links */}

        <div className='absolute w-[1155px] h-[58px] left-[265px]'>
          <ul className="flex w-[361px] h-[25px] top-[16.5] gap-[15px] p-4 text-black">
            <li className='w-[43px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]'>Home</li>
            <li className="w-[63px] h-[25px] flex items-center justify-center gap-2 font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#252B42]">
              Shop
              <RiArrowDropDownLine className="text-[20px]" />
            </li>

            <li className='w-[45px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]'>About</li>
            <li className='w-[33px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]'>Blog</li>
            <li className='w-[58px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]'>Contact</li>
            <li className='w-[44px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]'>Pages</li>
          </ul>
          {/* Right-side Links */}
          <div className="absolute flex items-center w-[324px] h-[54px] top-[2px] left-[832px]">
            <ul className="flex items-center">
              <li className="w-[166px] h-[54px] flex items-center gap-[8px]">
                <Image
                  src="/images/blue.png"
                  alt="Cart"
                  width={12}
                  height={12}
                  className="object-contain"
                />
                <a
                  href="#"
                  className="relative w-[119px] h-[24px] text-[#23A6F0] font-montserrat font-bold leading-[24px] tracking-[0.2px] text-center text-[14px]"
                >
                  Login / Register
                </a>
              </li>

              <li className='w-[46px] h-[46px]'>
                <Image
                  src="/images/searchicon.png"
                  alt="search"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </li >
              <li className='w-[56px] h-[46px]'>
                <Image
                  src="/images/cart.png"
                  alt="cart"
                  width={56}
                  height={46}
                  className="object-contain"
                />
              </li>

              <li className='w-[56px] h-[46px]'>
                <Image
                  src="/images/like.png"
                  alt="like"
                  width={56}
                  height={46}
                  className="object-contain"
                />
              </li>
            </ul>
          </div>

        </div>
      </nav>


      


    </header>
  );
};

export default DesktopNavbar;
