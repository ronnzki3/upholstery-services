import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Carousel = ({imagesdata}) => {

    const [currentImageIndex,setCurrentImageIndex]=useState(0);
    const [autoPlay,setAutoPlay]= useState(false);
    let timeOut=null;

    useEffect(()=>{
        timeOut= autoPlay && setTimeout(()=>{
            handleSlideRight();
        },3000);
    });
  
    const handSlideleLeft=()=>{
        setCurrentImageIndex(currentImageIndex=== 0 ? imagesdata.length - 1 : currentImageIndex -1 );
    };

    const handleSlideRight=()=>{
        setCurrentImageIndex(currentImageIndex===imagesdata.length -1 ? 0 : currentImageIndex + 1);
    };

  return (
    <div className='max-w-[1200px] w-[100%] mx-auto h-[700px] flex' onMouseEnter={()=>{setAutoPlay(false); clearTimeout(timeOut);}} onMouseLeave={()=>{setAutoPlay(true)}}>
        <div className='w-full h-full relative'>
            
            {imagesdata.map((image,index)=>{
                return (
                   
                    <div key={index} className={index===currentImageIndex ? 'w-full h-full flex flex-1 absolute overflow-hidden opacity-100 scale-[1] pointer-events-[visible] ' : 'w-full h-full flex flex-1 absolute overflow-hidden opacity-0 scale-[0.8] pointer-events-none duration-500 ease' }>
                        <img className='w-full object-cover' src={image.image} alt={image.title} />
                        <div className='absolute w-full h-full bg-black/30'>
                            {/* <span>{image.title}</span>
                            <br/> {index} */}
                        </div>
                    </div>
                );
            })}
            
            {/* left arrow button */}
            <div onClick={handSlideleLeft} className='absolute top-[50%] w-[30px] h-[30px] text-[40px] bg-white rounded-[50%] flex justify-center items-center translate-x-0 translate-y-[-50%] pb-[7px] cursor-pointer left-[15px] hover:scale-110 duration-500'>&lsaquo;</div>
            
            {/* right arrow button */}
            <div onClick={handleSlideRight} className='absolute top-[50%] w-[30px] h-[30px] text-[40px] bg-white rounded-[50%] flex justify-center items-center translate-x-0 translate-y-[-50%] pb-[7px] cursor-pointer right-[15px] hover:scale-110 duration-500'>&rsaquo;</div>
           
            {/* button pagination */}
            <div className='absolute bottom-[10px] left-[50%] translate-x-[-50%] translate-y-0'>
                {imagesdata.map((_,index)=>{
                    return (

                        // pagination dots
                        <div key={index} onClick={()=>setCurrentImageIndex(index)} className={index===currentImageIndex ? 'h-[15px] w-[15px] bg-blue-700 rounded-[50%] inline-block ml-[10px] cursor-pointer hover:scale-125 duration-500' : 'h-[15px] w-[15px] bg-[#f5f5f5] rounded-[50%] inline-block ml-[10px] cursor-pointer hover:scale-125 duration-500'}>

                        </div>
                    );
                })}
            </div>
        </div>
        
    </div>
  )
}
