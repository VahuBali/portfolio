import React from 'react'
import Contact_US from '../components/contact-us/Contact-US'
import Navbar from '../components/Home Page/Navbar'
import Head from 'next/head'

export default function contact_me() {
    return (
        <div>

            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="/v.svg" />
                <html lang="en" />
                <meta property="og:title" content="Vasu Bansal" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vasubansal.ml/" />
                <meta property="og:image" content="https://image.flaticon.com/icons/png/512/3522/3522649.png" />
                <meta property="og:description" content="Vasu Bansal's PortFolio, Get any full stack job done in no time with competitive pricing" />
                <meta property="og:author" content="Vasu Bansal" />
                <meta property="og:keywords" content="HTML, CSS, JavaScript, Python, REST API, GraphQL, Node.js, Django, Flask, Next.js, React.js, SwiftUI, Vasu Bansal, Porfolio" />
                <meta name="description" content="Contact Me" />

                <meta name="theme-color" content="#30D5C8" />
                
            </Head>

            <Navbar src="v.svg"/>

            <Contact_US />

        </div>
    )
}
