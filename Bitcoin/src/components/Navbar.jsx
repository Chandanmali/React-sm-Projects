import React from 'react'

function Navbar({toggleVar}) {
  return (
    <div>
      <div className='flex  items-center justify-between px-10 py-6 '>
        <div className={`${toggleVar ? "text-white" : "text-black"}`}>
            <h1 className='font-bold text-4xl animate-pulse'>crypto<span className='text-amber-500 font-extrabold'>$BIT</span></h1>
        </div>
        <div>
            <ul className={`${toggleVar ? "text-white" : "text-black"} flex gap-16 font-semibold`}>
                <li>Exchange crypto</li>
                <li>NFT</li>
                <li>Invest</li>
                <li>Product</li>
                <li>Learn</li>
                <button className='border px-5 py-2 rounded-2xl'>Sign UP</button>
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
