import { Body, H2 } from '@/components/ui/Typographies'
import EventCard from '@/components/EventCard'
import { getFeaturedEvents } from '@/content/events'

const FEATURED_EVENTS = getFeaturedEvents();

export default function FeaturedEvents() {
    return (
        <section 
            id="past" 
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-16 md:py-20"
        >
            <div className="flex flex-col gap-12 items-center w-full">
                {/* Header */}
                <div className="flex flex-col gap-5 items-center w-full">
                    <H2 className="text-[var(--color-primary-blue-10)] text-center">
                        Happening Soon
                    </H2>
                    <div className="text-center px-2">
                        <Body className="text-[var(--color-neutral-9)] text-center text-lg leading-8">
                            Discover opportunities to engage with the community and advance the Global Goals in Vancouver.
                        </Body>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
                    {FEATURED_EVENTS.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

            </div>
        </section>
    )
}
