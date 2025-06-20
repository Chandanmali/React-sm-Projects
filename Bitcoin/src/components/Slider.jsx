import React, { useState } from 'react'
import Data from "../assets/data.json"

function Slider({toggleVar, val1, val2}) {

    const [coin, setCoin] = useState(0);

    const backWord = () => {
        setCoin((prev) => {

            if(prev != 0)
            {
                return prev - 1;
            }
            else{
                return Data.length-1;

            }
     })
    }
    
    const forWord = () => {
        setCoin((prev) => {

            if(prev < Data.length-1)
            {
                return prev+1;
            }
            else{
                return 0;

            }
    })
    }

  return (
    <div>
      <div className='pt-32'>
        <div>
            <p className={`${toggleVar ? "text-white" : "text-black"} font-extrabold text-5xl font-serif text-center`}>Types Of Cryptocurrencies</p>
        </div>

        <div className='flex gap-8 justify-center py-13'>
            <button onClick={backWord} className={`${toggleVar ? "text-white" : "text-black"} text-7xl`}><i class="fa-solid fa-caret-left"></i></button>
            <div className='relative w-[60rem] h-[30rem]'>
                {
                    Data.map((elem, index) => {
                        return(
                            <div key={index} className={`absolute top-0 left-0 shadow-2xl ${index === coin ? "opacity-100": "opacity-0"} transition-all delay-500 ease-in-out`}>
                                <img className='w-[60rem] h-[30rem] rounded-3xl' src={elem.image} alt="" />
                            </div>
                        )
                    })

                }
            </div>
            <button onClick={forWord} className={`${toggleVar ? "text-white" : "text-black"} text-7xl`}><i class="fa-solid fa-caret-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Slider
