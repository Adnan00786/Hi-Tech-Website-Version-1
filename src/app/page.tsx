import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Hero2 } from "@/components/Hero2";
import { Container } from "@/components/Container";
import Belowbeams from "@/components/Belowbeams";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <Hero2/> */}
    <Container/>
    <Belowbeams/>
    <Footer/>
    </>
  );
}
