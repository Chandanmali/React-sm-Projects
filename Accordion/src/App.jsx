import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Data from "./assets/data.json"

function App() {
  const [openPara, setOpenPara] = useState(null)

  const toggle = (index) => {
    if(openPara === index)
      {
        return setOpenPara(null)
      }
    else
    {
      return setOpenPara(index)
    }
    
  }

  return (
    <>
      <div className=''>
        <div className='w-2/4 flex flex-col justify-center items-center border border-gray-400 bg-gray-200  rounded-xl mx-auto mt-5 px-10 py-10 gap-5 shadow-xl'>
          {
            Data.map((elem, index) => {
              return(
                <div key={index} className='w-full shadow-lg  border border-gray-400 rounded-lg'>
                  
                  <button onClick={() => toggle(index)} className=' rounded-t-lg px-4 py-2 font-bold text-xl border-gray-400'>{elem.heading}</button>

                  {openPara === index && <p className='bg-white rounded-b-lg px-4 py-2 '>{elem.paragraph}</p>}
                </div>
                
              )
            }
            )
          }
        </div>
        
      </div>
    </>
  )
}

export default App
