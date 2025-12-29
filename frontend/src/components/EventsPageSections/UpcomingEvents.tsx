import UpcomingEvent1 from '@/assets/upcoming-event-1.webp'
import UpcomingEvent2 from '@/assets/upcoming-event-2.webp'
import SdgGoal3 from '@/assets/sdgGoal3.webp'
import SdgGoal4 from '@/assets/sdgGoal4.webp'
import SdgGoal11 from '@/assets/sdgGoal11.webp'
import CalendarIcon from '@/assets/calendar-icon.svg'
import ClockIcon from '@/assets/clock-icon.svg'
import LocationIcon from '@/assets/location-icon.svg'
import ArrowRightBlue from '@/assets/arrow-right-blue-events.svg'
import { H2, H3, Body } from '@/components/ui/Typographies'

interface Event {
    id: number
    category: string
    title: string
    description: string
    date: string
    time: string
    location: string
    image: string
    sdgGoals: string[]
}

const UPCOMING_EVENTS: Event[] = [
    {
        id: 1,
        category: 'Community Engagement',
        title: 'Monthly Community Meetup',
        description: `Join us for our monthly community gathering where we discuss local initiatives, share ideas, and build connections. This is a great opportunity to meet fellow UNAC members, learn about ongoing projects, and discover how you can contribute to our mission of advancing the UN's values in Vancouver.`,
        date: 'December 3, 2024',
        time: '6:00 PM - 8:00 PM',
        location: 'UNAC Vancouver Office',
        image: UpcomingEvent1,
        sdgGoals: [SdgGoal3, SdgGoal4, SdgGoal11]
    },
    {
        id: 2,
        category: 'Community Engagement',
        title: 'Monthly Community Meetup',
        description: `Join us for our monthly community gathering where we discuss local initiatives, share ideas, and build connections. This is a great opportunity to meet fellow UNAC members, learn about ongoing projects, and discover how you can contribute to our mission of advancing the UN's values in Vancouver.`,
        date: 'December 3, 2024',
        time: '6:00 PM - 8:00 PM',
        location: 'UNAC Vancouver Office',
        image: UpcomingEvent2,
        sdgGoals: [SdgGoal3, SdgGoal4, SdgGoal11]
    }
];

export default function UpcomingEvents() {
    return (
        <section 
            id="upcoming-events" 
            className="bg-[var(--color-primary-blue-05)] w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-16 md:py-20"
        >
            <div className="flex flex-col gap-16 items-start justify-center w-full max-w-screen-xl">
                {/* Section Title */}
                <div className="flex items-start w-full">
                    <H2 className="text-[var(--color-primary-blue-10)]">
                        Upcoming Events
                    </H2>
                </div>

                {/* Events List */}
                <div className="flex flex-col gap-24 w-full">
                    {UPCOMING_EVENTS.map((event, index) => (
                        <div 
                            key={event.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start w-full`}
                        >
                            {/* Event Image */}
                            <div className="flex-1 min-w-0">
                                <div className="w-full h-96 lg:h-full min-h-96 rounded-xl overflow-hidden">
                                    <img 
                                        src={event.image} 
                                        alt={event.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="flex flex-col gap-5 w-full lg:w-96 flex-shrink-0">
                                {/* Category Badge */}
                                <div className="bg-[var(--color-neutral-0)] px-3 py-1 rounded-md w-fit">
                                    <span className="text-xs font-medium text-[var(--color-primary-blue-10)] leading-4">
                                        {event.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <H3 className="text-[var(--color-primary-blue-10)]">
                                    {event.title}
                                </H3>

                                {/* Description */}
                                <Body className="text-[var(--color-neutral-9)] leading-6">
                                    {event.description}
                                </Body>

                                {/* Event Info */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-3 items-center">
                                        <img src={CalendarIcon} alt="" className="w-5 h-5" />
                                        <span className="font-medium text-base text-[var(--color-primary-blue-10)] leading-6">
                                            {event.date}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <img src={ClockIcon} alt="" className="w-5 h-5" />
                                        <span className="font-medium text-base text-[var(--color-primary-blue-10)] leading-6">
                                            {event.time}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <img src={LocationIcon} alt="" className="w-5 h-5" />
                                        <span className="font-medium text-base text-[var(--color-primary-blue-10)] leading-6">
                                            {event.location}
                                        </span>
                                    </div>
                                </div>

                                {/* SDG Goals */}
                                <div className="bg-[var(--color-neutral-0)] border border-[var(--color-primary-blue-1)] rounded-xl flex gap-5 items-center px-6 py-3 h-28">
                                    {event.sdgGoals.map((goal, idx) => (
                                        <div key={idx} className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                            <img 
                                                src={goal} 
                                                alt={`SDG Goal ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Register Button */}
                                <button className="bg-[var(--color-primary-blue-8)] hover:bg-[var(--color-primary-blue-9)] text-[var(--color-neutral-0)] font-medium text-lg px-6 py-3 rounded-lg h-14 transition-colors w-fit">
                                    Register for Event
                                </button>
                            </div>
                        </div>
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
