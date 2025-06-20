import React, { useState } from 'react'

function Intro({toggleVar, val1, val2}) {

  

  return (
    <div>
      <div className='flex pl-10'>
        <div className={` ${toggleVar ? "text-white" : "text-black"} w-1/2  pt-24 text-start font-bold text-6xl `}>
            <p>The Worlds's leading Decentralized Digital Exchange.</p>
            
            <p className={`${toggleVar ? "text-white" : "text-black"} font-semibold text-xl pt-7`}>Crypto exchange platform is the premier digital currency exchange licensed in and for state of India</p>

            <div className='py-16 flex gap-5'>
                <button className='border px-7 py-3 rounded-2xl text-3xl bg-yellow-400 text-black'>Get Started</button>

                <button onClick={val1} className={`${toggleVar ? "text-white" : "text-black bg-yellow-400"} border px-8 py-2 rounded-2xl text-3xl`}><i class="fa-solid fa-sun"></i></button>

                <button onClick={val2} className={`${toggleVar ? "text-white bg-yellow-400" : "text-black"} border px-8 py-2 rounded-2xl text-3xl`}><i class="fa-solid fa-moon"></i></button>
            </div>
            
           
            
            
        </div>
        <div className='w-1/2 items-start pl-10'>
            <img className='w-[35rem]' src="/Bitcoin.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Intro
