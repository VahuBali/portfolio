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
      </Head>

      <Navbar />

      <Landing />
      
      <Services />
      
      <CTA />
      
      <Footer />
    </div>
  );
}
