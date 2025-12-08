import ContactPage from "../../components/contact/contact";
import ContactForm from "../../components/contact/contactform";
import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";


export default function Contact() {
    return (
        <>
            <Navbar />
            <ContactPage />
            <ContactForm />
            <Footer />
        </>
    );
}