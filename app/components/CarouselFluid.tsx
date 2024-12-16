import React from 'react'
import Image from 'next/image'

function Neutral() {
  return (
    <div>
      <section className="w-[1439px] h-[682px] gap-[30px] text-gray-600 body-font pt-0 ml-10">
        <div className="container mx-auto flex px-5 md:py-24 lg:p-0 gap-10 md:flex-row flex-col-reverse items-center  max-w-[1050px]">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="relative object-cover object-center rounded top-[3px]"
              alt="hero"
              src={"/images/Carouselfluid.png"}
              width={725}
              height={774}
            />
          </div>
          <div className="flex flex-col w-[573px] h-[326px] gap-[30px] ml-20">
  <div className="w-[122px] h-[24px]">
    <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left uppercase font-semibold text-[#BDBDBD]">
      Summer 2020
    </h5>
  </div>

  <div className="w-[375px] h-[100px]">
    <h1 className="font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-left text-[#252B42]">
      Part of the Neural Universe
    </h1>
  </div>

  <div className="w-[376px] h-[60px]">
    <h4 className="font-montserrat text-[20px] font-semi-bold leading-[30px] tracking-[0.2px] text-left text-[#737373]">
      We know how large objects will act, <br />
      but things on a small scale.
    </h4>
  </div>

  <div className="w-[339px] h-[52px] flex justify-center gap-[10px]">
    <button className="w-[156px] h-[52px] p-[15px_40px] gap-[10px] rounded-tl-[5px] bg-[#2DC071] text-[#FFFFFF]">
      <h3 className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
        BUY NOW
      </h3>
    </button>

    <button className="w-[173px] h-[52px] p-[15px_40px] gap-[10px] rounded-tl-[5px] bg-[#FFFFFF] text-[#2DC071] border border-solid border-[#2DC071]">
      <h3 className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">
        READ MORE
      </h3>
    </button>
  </div>
</div>

        </div>
      </section>
    </div>
  )
}

export default Neutral