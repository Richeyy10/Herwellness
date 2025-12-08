import About from "../../components/about/about";
import Approach from "../../components/about/approach";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import Story from "../../components/about/story";
import Vision from "../../components/about/vision";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <About />
            <Vision />
            <Approach />
            <Story />
            <Footer />
        </>
    );
}