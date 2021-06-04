import React from 'react'

export default function Contact_US() {
    return (
        <div>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Vasu Bansal</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Contact Vasu Bansal if you have any questions about my services before you go and hire me.</p>
                </div>
                <div className="flex flex-wrap">

                <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Email</h2>
                    <p className="leading-relaxed text-base mb-4">You can email me at <span className="font-bold text-blue-500 ">vasubansal314@gmail.com</span> and ask any question you wish... After asking you can directly through the email itself tell me what to do and i'll start the job right away after you sign the agreement </p>

                </div>

                <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Discord</h2>
                    <p className="leading-relaxed text-base mb-4">You can text me using Discord with my ID <span className="font-bold text-blue-500">Confucius#1226</span> and I will respond as fast as I possibly can... You will first have to send me a friend request which I will accept and then can start talking to you. After asking your question you can tell me what to do and i'll start the job right away after you sign the agreement</p>

                </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg" onClick={(e) => {e.preventDefault(); window.location.href='hire-me';}}>Or you can Hire Me right away!</button>
            </div>
            </section>

        </div>
    )
}
