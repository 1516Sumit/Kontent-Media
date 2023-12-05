// import React from 'react'
import CollageImage from '../assets/img/collageFrame.png'

function Collage() {
  return (
        <div className="grid content-center justify-items-center grid-cols-1 md:grid-cols-2 gap-0 bg-black py-2 md:py-12" style={{paddingBottom:'8%'}}>
          <div className='order-2 md:order-1 m-4' >
            <img src={CollageImage} className='md:ml-16 md:mt-20 md:w-4/6 xl:ml-20 xl:mt-28 lg:ml-20 lg:mt-28 sm:ml-20 sm:mt-10 sm:w-4/6 xxs:ml-2 xxs:mt-0 w-56 sm:w-4/6 xs:w-4/6 xs:ml-12 xs:mt-10'/>
          </div>
          <div className='flex items-center justify-center m-4' >
           <h1 className='font-black lg:text-7xl md:text-5xl sm:text-4xl text-4xl' style={{color:'white', lineHeight:1.2, fontFamily:'Archivo'}}>Newest <br/><span style={{color:'#FFD93D'}}>Jobs </span>For <span style={{color:'#7F00FF'}}>You</span></h1>
   
          </div>
        </div>
  )
}

export default Collage