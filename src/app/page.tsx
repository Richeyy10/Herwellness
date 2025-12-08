import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Exist from "../components/exist";
import Focus from "../components/focus";
import Impact from "../components/impact";
import Program from "../components/program";
import GetInvolved from "../components/involved";
import Footer from "../components/footer";
import {Event} from "../components/event";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Exist />
      <Focus />
      <Impact />
      <Event />
      <Program />
      <GetInvolved />
      <Footer />
    </>
  );
}
