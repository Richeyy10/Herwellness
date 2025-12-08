import Footer from "@/src/components/footer";
import Impacts from "../../components/impact/impacts";
import Navbar from "@/src/components/navbar";
import Stories from "../../components/impact/stories";


export default function ImpactPage() {
    return (
        <>
            <Navbar />
            <Impacts />
            <Stories />
            <Footer />
        </>
    );
}