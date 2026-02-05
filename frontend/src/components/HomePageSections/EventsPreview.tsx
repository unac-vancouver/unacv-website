import { ArrowRight } from 'lucide-react'
import { BodyLarge, H2 } from '@/components/ui/Typographies'
import { Link } from 'react-router-dom'
import EventCard from '@/components/EventCard'
import { getUpcomingEvents } from '@/content/events'

const EVENTS = getUpcomingEvents();

export default function EventsPreview() {
    return (
        <section 
            id="events-preview" 
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20"
        >
            <div className="flex flex-col gap-12 items-center w-full">
                {/* Header */}
                <div className="flex flex-col gap-5 items-center w-full">
                    <H2 className="text-[var(--color-primary-blue-10)] text-center">
                        Upcoming Events
                    </H2>
                    <div className="text-center px-2">
                        <BodyLarge className="text-[var(--color-neutral-9)]">
                            Connect with your community and take action.
                            <br />
                            Join us at our upcoming events and make a difference in Vancouver.
                        </BodyLarge>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
                    {EVENTS.map((event) => (
                        <EventCard key={event.id} event={event}  />
                    ))}
                </div>

                {/* See All Events Link */}
                <Link 
                    to="/events" 
                    className="flex gap-2 items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
                >
                    <span className="font-bold text-lg text-primary tracking-tight leading-5 underline decoration-solid">
                        See All Events
                    </span>
                    <ArrowRight className="w-5 h-5  text-primary" />
                </Link>
            </div>
        </section>
    )
}
