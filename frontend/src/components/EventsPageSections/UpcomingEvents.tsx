import { H2 } from '@/components/ui/Typographies'
import YearlyEventCard from '@/components/YearlyEventCard'
import { getYearlyEvents } from '@/content/events'
import ArrowRightBlue from '@/assets/arrow-right-blue.svg'

const YEARLY_EVENTS = getYearlyEvents();

export default function UpcomingEvents() {
    return (
        <section 
            id="upcoming" 
            className="bg-[#e9eefb] w-full relative flex flex-col items-center px-6 md:px-20 lg:px-40 py-16 md:py-20"
        >
            <div className="flex flex-col gap-4 items-start justify-center w-full max-w-screen-xl relative">
                {/* Section Title */}
                <div className="flex items-start w-full">
                    <H2 className="text-[var(--color-primary-blue-10)]">
                        Yearly Events
                    </H2>
                </div>

                {/* Events List */}
                <div className="flex flex-col w-full">
                    {YEARLY_EVENTS.map((event, index) => (
                        <YearlyEventCard
                            key={event.id}
                            event={event}
                            index={index}
                        />
                    ))}
                </div>

                {/* See More Link */}
                <div className="flex gap-2 items-center justify-center w-full">
                    <a 
                        href="/events" 
                        className="flex gap-2 items-center hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-lg text-[var(--color-primary-blue-9)] tracking-tight leading-5 underline decoration-solid">
                            See more
                        </span>
                        <img src={ArrowRightBlue} alt="" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
