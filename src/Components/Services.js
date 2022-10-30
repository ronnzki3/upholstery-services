import React from 'react'
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

export const Services = () => {

  const [modal,setModal]=useState(false);
    const [tempImgSrc,setTempImgSrc]=useState('');

    const getImgSrc=(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModal(true);
    }


  return (
    <>

     {/* Modal for Single Image Viewer */}
     <div  onClick={()=>{setModal(false)}} className={modal ? 'w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black visible opacity-100 scale-100 overflow-hidden z-[999] transition-all duration-500 ease-in rounded-[10px] p-[30px]' : 'w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black invisible opacity-0 scale-0 overflow-hidden z-[999] transition-all duration-500 ease-in'}>
            <img src={tempImgSrc} className='max-w-[97%] w-auto h-auto max-h-screen block mx-auto box-border rounded-[10px]' />
            <CloseIcon  onClick={()=>{setModal(false)}} className='close-x fixed top-[15px] right-[15px] w-[2rem] h-[2rem] bg-black/40 p-[5px] text-white font-bold cursor-pointer' />
    </div>


    <div name="services" className='max-w-[1366px] w-full mx-auto pt-[100px]'>
            <h1 className='text-center text-2xl md:text-4xl font-semibold mb-[20px] text-[#dcdcdc]'>SERVICES</h1>
    </div>

    <div className='max-w-[1366px] w-full mx-auto flex justify-between items-center mt-[20px] md:mt-[20px]'>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/3.jpg')}} src="/Services/3.jpg" alt=""/>
        </div>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/33.jpg')}} src="/Services/33.jpg" alt=""/>
        </div>
    </div>

    <div className='max-w-[1366px] w-full mx-auto flex justify-between items-center mt-[20px] md:mt-[50px]'>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/1.jpg')}} src="/Services/1.jpg" alt=""/>
        </div>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/11.jpg')}} src="/Services/11.jpg" alt=""/>
        </div>
    </div>
    <div className='max-w-[1366px] w-full mx-auto flex justify-between items-center mt-[20px] md:mt-[20px]'>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/2.jpg')}} src="/Services/2.jpg" alt=""/>
        </div>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/22.jpg')}} src="/Services/22.jpg" alt=""/>
        </div>
    </div>
   
    <div className='max-w-[1366px] w-full mx-auto flex justify-between items-center mt-[20px] md:mt-[20px]'>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/4.jpg')}} src="/Services/4.jpg" alt=""/>
        </div>
        <div className='hover:opacity-70 duration-300 cursor-pointer'>
            <img onClick={()=>{getImgSrc('/Services/44.jpg')}} src="/Services/44.jpg" alt=""/>
        </div>
    </div>

 
    </>
  )
}
