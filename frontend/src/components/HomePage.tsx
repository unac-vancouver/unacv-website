import Hero from "@/components/HomePageSections/Hero";
import AboutSnapshot from "./HomePageSections/AboutSnapshot";
import GlobalGoals from "./HomePageSections/GlobalGoals";
import EventsPreview from "./HomePageSections/EventsPreview";
import GetInvolved from "./HomePageSections/GetInvolved";

export default function HomePage(){
    return (
        <main aria-labelledby="home-title">
            <Hero />
            <AboutSnapshot />
            <GlobalGoals />
            <EventsPreview />
            <GetInvolved />
        </main>
    );
}