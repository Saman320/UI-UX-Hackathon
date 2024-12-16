import React from 'react'
import Image from 'next/image'

const Carusel2 = () => {
  return (
    <div className='mx-auto w-[1440px] h-[709px] gap-[30px] rounded-tl-[5px] border-t border-opacity-0 border border-[#DEDEDE]'>
      <div className='mx-auto w-[1440px] h-[711px] bg-[#23856D]'>
        <div
          className="mx-auto w-[1036px] h-[711px] left-[209px] pt-[112px] pb-[112px] gap-[80px]"
        >
          <div className="flex flex-row w-[1049px] h-[599px] gap-[30px]">

            <div className="w-[509px] h-[432px] pt-[60px] gap-[30px]">

              <div className='w-[154px] h-[30px]'>
                <h5 className="font-montserrat text-[20px] font-bold leading-[30px] tracking-[0.2px] text-left gap-[35px] text-[#FFFFFF]">
                  SUMMER 2020
                </h5>
              </div>

              <div className='relative w-[509px] h-[160px]'>
                <h1 className=" font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-left text-[#FFFFFF]">
                  Vita Classic Product
                </h1>
              </div>

              <div className='relative w-[341px] h-[40px]'>
                <h4 className="font-montserrat text-[20px] font-semi-bold leading-[20px] tracking-[0.2px] text-left text-[#FFFFFF] py-8">
                  We know how large objects will act, <br />
                  but things on a small scale.
                </h4>

                <div className="flex flex-row w-[295px] h-[52px] gap-[40px]">
                  <h3 className="w-[77px] h-[32px] font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center py-10 decoration-none decoration-from-font text-[#FFFFFF]">
                    $16.48
                  </h3>

                  <div
                    className="w-[184px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#2DC071] mt-6"
                  >
                    <button
                      className="w-[104px] h-[22px] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center text-[#FFFFFF]"
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>


              </div>



            </div>
            <div className="w-[510px] h-[685px] gap-0">
              <div className="w-[443px] h-[685px] gap-0 ">
                <Image
                  src="/images/hero2.png"
                  alt="Image description"
                  width={443}
                  height={685}
                  className="object-cover"
                />
              </div>
            </div>


          </div>

        </div>


      </div>
    </div>
  )
}

export default Carusel2
