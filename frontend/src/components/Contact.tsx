import Hero from "@/components/ContactPageSections/Hero";
import ContactForm from "@/components/ContactPageSections/ContactForm";
import FAQ from "@/components/ContactPageSections/FAQ";

export default function AboutPage(){
    return (
        <main aria-labelledby="contact-title">
            <Hero />
            <ContactForm />
            <FAQ />
        </main>
    );
}