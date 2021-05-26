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
        <meta name="description" content="Vasu Bansal's PortFolio, Get any full stack job done in no time with competitive pricing" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Python, REST API, GraphQL, Node.js, Django, Flask, Next.js, React.js, SwiftUI, Vasu Bansal, Porfolio" />
        <meta name="author" content="Vasu Bansal" />
      </Head>

      <Navbar />

      <Landing />
      
      <Services />
      
      <CTA />
      
      <Footer />
    </div>
  );
}
