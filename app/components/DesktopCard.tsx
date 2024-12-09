import React from 'react'
import Image from 'next/image'

const DesktopCard = () => {
  return (
   
    <div className='mx-auto w-[1440px] h-[770px] bg-[#FAFAFA] mb-4'>

    <div className="mx-auto w-[1050px] h-[770px] left-[195px] py-[80px] gap-[48px]">

      <div className='flex flex-col justify-center items-center mx-auto py-20 w-[607px] h-[62px]'>
        <div className=' w-[181px] h-[32px] '>
          <h3 className="text-[#252B42] font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left">
            EDITOR’S PICK
          </h3>
        </div >
        <div className='w-[347px] h-[20px]'>
          <p className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373]">
            Problems trying to resolve the conflict between
          </p>

        </div>


      </div>
  
  <div className='flex w-[1050px] h-[500px] gap-[30px]'>

  <div className="w-[510px] h-[500px] relative">
<Image
src="/images/mens.png"
alt="Example Image"
width={509}
height={500}
className="absolute top-0 left-0 object-cover rounded-md"
/>

<div className="absolute top-[426px] left-[31px] w-[170px] h-[48px] flex items-center justify-center gap-[17px] bg-[#FFFFFF] text-black rounded-md">
<h5 className="w-[40px] h-[24px] top-[12px] left-[64px] font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
MEN
</h5>

</div>
</div>

<div className="w-[240px] h-[500px] relative">
{/* Image */}
<Image
src="/images/womens.png"
alt="Example Image"
width={239}
height={500}
className="object-cover rounded-md"
/>

{/* Women Content */}
<div className="absolute w-[136px] h-[48px] top-[434px] left-[21px] flex items-center justify-center bg-white rounded-md">
<h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
  WOMEN
</h5>
</div>
</div>
<div className="relative w-[240px] h-[500px]">
{/* First Image - Accessories */}
<div className="relative">
<Image 
  src="/images/ladies.png" 
  alt="Ladies Accessories Image" 
  width={239} 
  height={242} 
  className="object-cover rounded-md" 
/>
<div className="absolute w-[170px] h-[48px] top-[171px] left-[14px] px-[26px] py-[12px] bg-white rounded-md flex items-center justify-center">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
    ACCESSORIES
  </h5>
</div>
</div>

{/* Second Image - Kids */}
<div className="relative mt-4">
<Image 
  src="/images/gents.png" 
  alt="Kids Image" 
  width={239} 
  height={242} 
  className="object-cover rounded-md" 
/>
<div className="absolute w-[120px] h-[48px] top-[176px] left-[18px] px-[40px] py-[12px] bg-white rounded-md flex items-center justify-center">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
    KIDS
  </h5>
</div>
</div>
</div>


  </div>



    </div>


  </div>
  )
}

export default DesktopCard
