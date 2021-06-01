import React from 'react'
import Head from 'next/head'

export default function Hobbies() {
    return (
        <div>

            <Head>
                <title>Vasu Bansal</title>
                <link rel="icon" href="/v.svg" />

                <meta property="og:title" content="My Hobbies" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vasubansal.ml/" />
                <meta property="og:image" content="https://image.flaticon.com/icons/png/512/3522/3522649.png" />
                <meta property="og:description" content="Vasu Bansal's PortFolio, Get any full stack job done in no time with competitive pricing" />
                <meta property="og:author" content="Vasu Bansal" />
                <meta property="og:keywords" content="HTML, CSS, JavaScript, Python, REST API, GraphQL, Node.js, Django, Flask, Next.js, React.js, SwiftUI, Vasu Bansal, Porfolio" />
                <meta name="description" content="Vasu Bansal's favorite hobbies!" />

                <meta name="theme-color" content="#30D5C8" />
            </Head>

            {/* <div>
                <h1 className="text-center pt-16 text-4xl font-semibold mx-auto">My Hobbies</h1>
                <h2 className="text-center pt-5 text-2xl text-gray-600 mx-3">These are all my hobbies besides from coding!</h2>
            </div> */}

            <div className="w-full bg-white p-12 mt-5">
            <div className="header items-end justify-between mb-24">
                <div className="title">
                <p className="text-4xl font-bold text-gray-800 mb-4 text-center">
                    My Hobbies
                </p>
                <p className="text-2xl font-light text-gray-400 text-center">
                    These are all my hobbies besides from coding!
                </p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                    <p className="text-blue-500 text-md font-medium">
                        YouTube
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        YouTube Channel
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        I have a YouTube Channel where I talk about technology and new rumors with daily uploads... You Can check it out <a href="https://www.youtube.com/channel/UCCzfHZSA8nEnx_QTFlq6mHA" className="underline font-bold text-blue-400">here</a>
                    </p>
                    </a><div className="flex items-center mt-4"><a href="https://www.youtube.com/channel/UCCzfHZSA8nEnx_QTFlq6mHA" className="w-full block h-full">
                    </a><a href="https://www.youtube.com/channel/UCCzfHZSA8nEnx_QTFlq6mHA" className="block relative">
                    </a>

                    </div>
                </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                    <p className="text-blue-500 text-md font-medium">
                        Podcast
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Talk Tech Teen Tech
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        I host and found the Talk Tech Teen Tech podcast. This podcast talks about tech but through the eyes of grade school teens to get a different approach on the bleeding-edge of technology. You can listen to this podcast by clicking <a href="https://talktechteentech.tk/" className="underline font-bold text-blue-400">here</a>
                    </p>
                    </a><div className="flex items-center mt-4"><a href="https://talktechteentech.tk/" className="w-full block h-full">
                    </a><a href="https://talktechteentech.tk/" className="block relative">
                    </a>

                    </div>
                </div>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="#" className="w-full block h-full">
                </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                    <p className="text-blue-500 text-md font-medium">
                        Origami
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        Origami Craft
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        One of my longest and most favorite hobbies is origami, I can make really good origami crafts and actually sold them to make a profit.
                    </p>
                    </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
                    </a><a href="#" className="block relative">
                    </a>

                    </div>
                </div>
                </div>



            </div>
            </div>



        </div>
    )
}