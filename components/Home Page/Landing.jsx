import React from 'react'
import Image from 'next/image'

function Landing() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full mt-5 xl:pt-0 md:mt-0 sm:pt-16">
      <div className="md:ml-16 md:pr-5 m-auto text-center">
        <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold text-blue-500 leading-relaxed mx-3">My Name is Vasu Bansal and <br />I am a Full Stack Developer</h1>
        <p className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-600 pt-5 mx-5 md:mr-0">I develop all sorts of applications from web to mobile for clients</p>
        <div className="flex flex-col md:flex-row mt-8 w-full">
          <button className="bg-gradient-to-r from-blue-300 to-blue-400 py-4 px-7 rounded-full text-gray-200 text-xl mt-5 m-auto">Check Out My Projects</button>
          <button className="bg-gradient-to-r from-blue-300 to-blue-400 py-4 px-7 rounded-full text-gray-200 text-xl mt-5 m-auto">Check out My Services</button>
        </div>

      </div>
      <div className="md:pr-16 w-full px-5 md:w-1/2 m-auto">
        <Image src="/person.svg" width={600} height={600} className="" />
      </div>
    </div>
  )
}

export default Landing

