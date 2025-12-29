import Hero from "@/components/EventsPageSections/Hero";
import FeaturedEvents from "./EventsPageSections/FeaturedEvents";

export default function EventsPage(){
    return (
        <main aria-labelledby="events-title">
            <Hero />
            <FeaturedEvents />
        </main>
    );
}