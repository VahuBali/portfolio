import React from 'react'
import Image from 'next/image'

export default function About_Me() {
    return (
        <div className="container mx-auto md:-mt-16 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen my-auto mx-auto">
                <img className="object-cover object-top" src="code.svg" alt="" />
            </div>
            <div className="flex p-10">
            <div className="my-auto max-w-lg">
                <h1 className="text-3xl uppercase">Vasu Bansal</h1>
                <p className="font-semibold mb-5">Full Stack Developer</p>
                <p>Vasu Bansal is an avid programmer as well as an avid techy. Vasu is 14 and has a heavy interest in programming ever since the age of 10. He started learning HTML and then quickly moved on to Python which was one of his most valuable skillsets. After that he learnt JavaScript for web development which quickly became his passion and his favorite language as well. In between Vasu also has learnt Swift to develop iOS application. His favorite IDE of choice is Nova by Panic but mainly uses Visual Studio Code for its more robust extension library. He runs a podcast and YouTube channel talking all about tech as well...</p>
                <button className="bg-blue-600 rounded-md py-3 px-7 mt-6 text-white" onClick={(e) => {e.preventDefault(); window.location.href='hire-me';}}>Hire Me</button>
            </div>
            </div>
        </div>
        </div>


    )
}
