import React from 'react'
import Head from 'next/head'

export default function overview() {
    return (
        <div>
            <Head>
                <title>My Projects</title>
                <link rel="icon" href="/v.svg" />
            </Head>


            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col lg:flex-row -m-4">
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-visible">
                    <img className="h-auto object-fit w-full object-center" src="../../talktechteentech.png" alt="talktechteentech" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Website</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Talk Tech Teen Tech Website</h1>
                        <p className="leading-relaxed mb-3">A podcast web application with advanced backend integrations that is highly scalable to meet their podcast's growing size</p>
                    </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="h-auto object-fit w-full object-center" src="../../nostopfinance.png" alt="talktechteentech" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Website</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">No Stop Finance</h1>
                        <p className="leading-relaxed mb-3">A website to get access to your favorite investment trackers and apps to make your next purchase of a stock memorable</p>

                    </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="h-auto object-fit w-full object-center" src="../../discordpy.png" alt="blog" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Software</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Dr.Pirocks</h1>
                        <p className="leading-relaxed mb-3">A multipurpose bot created using Discord.py that has features such as economy, database integration, and much more</p>

                    </div>
                    </div>
                </div>
                
                </div>
                <div className="flex flex-col lg:flex-row -m-4 pt-10">
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-visible">
                    <img className="h-auto object-fit w-full object-center" src="../../discordjs.png" alt="talktechteentech" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Software</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">FanduVasu</h1>
                        <p className="leading-relaxed mb-3">A multipurpose bot created using Discord.py that has features such as website integration using Next.js, heavily scalable and much more</p>
                    </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="h-auto object-fit w-full object-center" src="../../swiftuiwargame.png" alt="talktechteentech" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mobile Application</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SwiftUI War Game</h1>
                        <p className="leading-relaxed mb-3">An advanced SwiftUI game that tracks both computer and player score with randomized cards and other advanced features.</p>

                    </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="h-auto object-fit w-full object-center" src="../../swiftuislots.png" alt="blog" />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mobile Application</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SwiftUI Slots Game</h1>
                        <p className="leading-relaxed mb-3">A slots game with an amazing UI which scores slots using advanced syntax in SwiftUI with randomized icon placements</p>

                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            </section>
        </div>
    )
}
