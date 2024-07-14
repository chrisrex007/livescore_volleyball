import React from 'react'

function Tennis() {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center align-middle text-center bg-gray-900 md:flex-row md:bg-black md:w-[100vw] md:[100vw] ">
        <div className='w-screen flex justify-center md:flex-row md:w-[100%]'>
          <div className="card bg-slate-800 w-[280px] h-[75vh] flex flex-col justify-center align-middle rounded-lg md:flex-row md:h-[200px] md:w-[60vw]">
            <div className="Team1 flex flex-col w-[100%] align-middle md:justify-center">
              <div className='flex flex-row align-middle justify-center'>
                <img src="./public/team1.png" alt="team1" className='w-[135px] rounded-md hover:scale-90 duration-500 ' />
              </div>
              <div className='flex flex-row align-middle justify-center' >
                <span className='inline-block text-center min-w-[60px]  shadow-md shadow-red-700 bg-gray-700 rounded h-6 text-white mt-1 outline-none hover:shadow-tl hover:shadow-red-900 md:hover:shadow-white md:hover:shadow-pl'>team1</span>
              </div>
            </div>
            <div className="score flex flex-col justify-between align-middle md:flex-row md:h-[200px] md:w-auto md:align-middle md:m-y-auto">
              <span className='text-red-700 font-sans font-bold text-[50px] md:mt-16'>1</span>
              <p className='text-red-700 font-sans font-bold text-[50px] md:mt-[58.5px]'>-</p>
              <p className='text-red-700 font-sans font-bold text-[50px] md:mt-16'>2</p>
            </div>
            <div className="Team2 flex flex-col-reverse w-[100%] align-middle md:flex-col md:justify-center ">
              <div className='flex flex-row align-middle justify-center '>
                <img src="./public/team2.png" alt="team2" className='w-[135px] rounded-md hover:scale-90 duration-500 md:h-[127.400px] ' />
              </div>
              <div className='flex flex-row align-middle justify-center' >
                <span className='inline-block text-center min-w-[60px] shadow-md shadow-red-700 bg-gray-700 rounded h-6 text-white mb-1 md:mb-0 md:mt-1 outline-none hover:shadow-pl hover:shadow-red-700 md:hover:shadow-white'>team2</span>
              </div>
            </div>
        </div>
        </div> 
      </div>
  )
}

export default Tennis