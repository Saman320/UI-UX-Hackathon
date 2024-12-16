import React from 'react'
import Image from 'next/image'
import DesktopNavbar from './DesktopNavbar'

const DesktopHeader = () => {
  return (
    <div className='mx-auto w-[1440px] h-[852px] top-[70px] left-[1px] gap-[30px]'>
        < DesktopNavbar />
    <div className="relative w-[1439px] h-[716px] left-[1px] gap-[30px] rounded-tl-[5px] border-t border-[#DEDEDE]">

    <div className="absolute w-[1044px] h-[651px] top-[170px] left-[197.5px]">
      <div className='absolute w-[1044px] h-[427px] top-[48px]'>
        <div className='w-[599px] h-[331px]'>

          <div className='w-[122px] h-[24px] '>
            <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left gap-[35px] text-[#FFFFFF]">
              SUMMER 2020
            </h5>
          </div>

          <div className='relative w-[548px] h-[80px] top-[32px]'>
            <h1 className=" font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-left text-[#FFFFFF]">
              NEW COLLECTION
            </h1>
          </div>


          <div className='relative w-[376px] h-[60px] top-[50px]'>
            <h4 className="font-montserrat text-[20px] font-semi-bold leading-[30px] tracking-[0.2px] text-left">
              We know how large objects will act, <br />
              but things on a small scale.
            </h4>


          </div>


          <div className="relative w-[221px] h-[62px] gap-[10px] top-[80px] left-[10px]">
            <button className="w-[221px] h-[62px] p-[15px_40px] gap-[10px] rounded-tl-[5px] rounded-br-none bg-[#2DC071] text-[#FFFFFF]">
              <h3 className="w[141px] h-[32px] font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">
                SHOP NOW
              </h3>

            </button>


          </div>


        </div>
      </div>
    </div>
    <Image
      src="/images/hero1.png"
      alt="carousel"
      width={1439}
      height={716}
      className="object-cover"
    />

  </div>

  </div>
  )
}

export default DesktopHeader
