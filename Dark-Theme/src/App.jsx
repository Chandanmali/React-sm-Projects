"use client"

import { useState } from "react"

function App() {
  const [theme, setTheme] = useState(true)

  const darkTheme = () => {
    setTheme(false)
  }

  const lightTheme = () => {
    setTheme(true)
  }

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 ${theme ? "bg-white" : "bg-black"}`}>
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 gap-4 md:gap-8 lg:gap-20 py-4 md:py-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              src="/hacker.png"
              alt="Ethical Hacker"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <p
              className={`text-center lg:text-left font-extrabold ${theme ? "text-black" : "text-white"} 
              text-3xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl 
              leading-tight sm:leading-snug mt-4 md:mt-6 lg:mt-10 
              px-2 py-5 xl:py-2 sm:px-4 lg:px-0`}
            >
              Holaa! I am an Ethical Hacker From{" "}
              <span className="bg-gradient-to-r from-[#ff860e] via-blue-400 to-[#0c8801] bg-clip-text text-transparent font-extrabold">
                INDIA..
              </span>
            </p>

            {/* Theme Toggle Buttons */}
            <div className="flex font-bold sm:text-xl md:text-2xl lg:text-3xl mt-6 md:mt-8 lg:mt-10">
              <div
                className={`flex rounded-full p-1 ${theme ? "border-2 border-gray-300" : "border-2 border-gray-600"}`}
              >
                <button
                  onClick={darkTheme}
                  className={`px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 
                    ${theme ? "bg-white text-black hover:bg-gray-100" : "bg-cyan-400 text-black"} 
                    rounded-full transition-all duration-200 text-2xl sm:text-base md:text-lg lg:text-xl`}
                >
                  Dark
                </button>
                <button
                  onClick={lightTheme}
                  className={`px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 
                    ${theme ? "bg-cyan-400 text-black" : "bg-black text-white hover:bg-gray-800"} 
                    rounded-full transition-all duration-200 text-2xl sm:text-base md:text-lg lg:text-xl`}
                >
                  Light
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
