import Head from "next/head";
import Navbar from "../components/Home Page/Navbar";
import Landing from "../components/Home Page/Landing";
import Services from "../components/Home Page/Services"
import Footer from "../components/Home Page/Footer"
import CTA from "../components/Home Page/CTA"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Vasu Bansal</title>
        <link rel="icon" href="/v.svg" />
        
        <meta property="og:title" content="Vasu Bansal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vasubansal.ml/" />
        <meta property="og:image" content="https://image.flaticon.com/icons/png/512/3522/3522649.png" />
        <meta property="og:description" content="Vasu Bansal's PortFolio, Get any full stack job done in no time with competitive pricing" />
        <meta property="og:author" content="Vasu Bansal" />
        <meta property="og:keywords" content="HTML, CSS, JavaScript, Python, REST API, GraphQL, Node.js, Django, Flask, Next.js, React.js, SwiftUI, Vasu Bansal, Porfolio" />
        <meta name="theme-color" content="#30D5C8" />
        
      </Head>

      <Navbar />

      <Landing />
      
      <Services />
      
      <CTA />
      
      <Footer />
    </div>
  );
}
