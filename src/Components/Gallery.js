import React from 'react'
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

export const Gallery = ({gallery}) => {

    const [modal,setModal]=useState(false);
    const [tempImgSrc,setTempImgSrc]=useState('');

    const getImgSrc=(imgSrc)=>{
        setTempImgSrc(imgSrc);
        setModal(true);
    }

  return (
    <>
    <div className='max-w-[1200px] w-full mx-auto mt-[100px]'>
            <h1 className='text-center text-2xl md:text-4xl font-semibold mb-[20px]'>PORTFOLIO</h1>
    </div>


    {/* Modal for Single Image Viewer */}
    <div onClick={()=>{setModal(false)}} className={modal ? 'w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black visible opacity-100 scale-100 overflow-hidden z-[999] transition-all duration-500 ease-in rounded-[10px] p-[30px]' : 'w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-black invisible opacity-0 scale-0 overflow-hidden z-[999] transition-all duration-500 ease-in'}>
            <img src={tempImgSrc} className='max-w-[97%] w-auto h-auto max-h-screen block mx-auto box-border rounded-[10px]' />
            <CloseIcon onClick={()=>{setModal(false)}} className='fixed top-[15px] right-[15px] w-[2rem] h-[2rem] bg-black/40 p-[5px] text-white font-bold cursor-pointer' />
    </div>

    <div className='max-w-[1200px] mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 p-[20px]'>        
        {gallery.map((image,index)=>{
            return (
                <div key={index} onClick={()=>{getImgSrc(image.image)}} className='mb-[10px] cursor-pointer hover:opacity-70 hover:scale-105 duration-300'>
                    <img src={image.image} alt={image.title} className='w-full rounded-[10px]' />
                </div>
            );
        })}

    </div>
    </>
  )
}

