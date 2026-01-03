import Hero from "@/components/AboutPageSections/Hero";
import WhoWeAre from "@/components/AboutPageSections/WhoWeAre";
import Team from "@/components/AboutPageSections/Team";
import NationalAffiliations from "@/components/AboutPageSections/NationalAffiliations";
import GetInvolvedCTA from "@/components/AboutPageSections/GetInvolvedCTA";

export default function AboutPage(){
    return (
        <main aria-labelledby="about-title">
            <Hero />
            <WhoWeAre />
            <Team />
            <NationalAffiliations />
            <GetInvolvedCTA />
        </main>
    );
}