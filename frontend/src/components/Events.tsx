import Hero from "@/components/EventsPageSections/Hero";
import FeaturedEvents from "./EventsPageSections/FeaturedEvents";
import UpcomingEvents from "./EventsPageSections/UpcomingEvents";

export default function EventsPage(){
    return (
        <main aria-labelledby="events-title">
            <Hero />
            <FeaturedEvents />
            <UpcomingEvents />
        </main>
    );
}