import FeaturedEvent1 from '@/assets/EventsPages/FeaturedEvent1.webp'
import FeaturedEvent2 from '@/assets/EventsPages/FeaturedEvent2.webp'
import FeaturedEvent3 from '@/assets/EventsPages/FeaturedEvent3.webp'
import CalendarIcon from '@/assets/calendar-icon.svg'
import ClockIcon from '@/assets/clock-icon.svg'
import LocationIcon from '@/assets/location-icon.svg'
import ArrowRightBlue from '@/assets/arrow-right-blue.svg'
import { Body, BodySmall, H2 } from '@/components/ui/Typographies'

interface FeaturedEvent {
    id: number
    category: string
    title: string
    date: string
    time: string
    location: string
    description: string
    image: string
}

const FEATURED_EVENTS: FeaturedEvent[] = [
    {
        id: 1,
        category: 'Climate Action',
        title: 'Youth Climate Action Summit',
        date: 'November 12, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: FeaturedEvent1
    },
    {
        id: 2,
        category: 'Volunteer',
        title: 'Community Service Day',
        date: 'November 15, 2025',
        time: '12:00 PM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: FeaturedEvent2
    },
    {
        id: 3,
        category: 'Education',
        title: 'Youth Leadership Workshop',
        date: 'November 18, 2025',
        time: '8:00 AM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: FeaturedEvent3
    }
];

export default function FeaturedEvents() {
    return (
        <section 
            id="past" 
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-16 md:py-20"
        >
            <div className="flex flex-col items-start justify-center w-full gap-10">
                {/* Header */}
                <div className="flex flex-col gap-4 items-start w-full">
                    <div className="flex items-start justify-center w-full">
                        <H2 className="flex-1 text-[var(--color-primary-blue-10)] text-center">
                            Happening Now & This Week
                        </H2>
                    </div>
                    <div className="flex items-start justify-center w-full">
                        <Body className="flex-1 text-[var(--color-neutral-9)] text-center text-lg leading-8">
                            Discover opportunities to engage with the community and advance the Global Goals in Vancouver.
                        </Body>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                    {FEATURED_EVENTS.map((event) => (
                        <div 
                            key={event.id}
                            className="border border-[var(--color-primary-blue-1)] rounded-xl flex flex-col overflow-hidden"
                        >
                            {/* Event Image */}
                            <div className="h-44 w-full overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Event Content */}
                            <div className="flex flex-col gap-3 px-4 py-6">
                                {/* Category Badge and Title */}
                                <div className="flex flex-col gap-4">
                                    <span className="bg-[var(--color-primary-blue-05)] px-2 py-0.5 rounded-md text-xs font-medium text-[var(--color-primary-blue-10)] leading-4 w-fit">
                                        {event.category}
                                    </span>
                                    <h3 className="font-semibold text-lg text-[var(--color-primary-blue-10)] tracking-tight leading-tight">
                                        {event.title}
                                    </h3>
                                </div>

                                {/* Event Details */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        {/* Date */}
                                        <div className="flex gap-2 items-center min-h-6">
                                            <img src={CalendarIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.date}
                                            </BodySmall>
                                        </div>
                                        {/* Time */}
                                        <div className="flex gap-2 items-center min-h-6">
                                            <img src={ClockIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.time}
                                            </BodySmall>
                                        </div>
                                        {/* Location */}
                                        <div className="flex gap-2 items-center min-h-6">
                                            <img src={LocationIcon} alt="" className="w-4 h-4 flex-shrink-0" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.location}
                                            </BodySmall>
                                        </div>
                                    </div>

                                    {/* Description and Link */}
                                    <div className="flex flex-col gap-2">
                                        <Body className="text-[var(--color-neutral-9)] leading-relaxed">
                                            {event.description}
                                        </Body>
                                        <a 
                                            href={`/events/${event.id}`}
                                            className="text-xs font-medium text-[var(--color-primary-blue-9)] underline decoration-solid leading-5 tracking-tight hover:opacity-80 transition-opacity"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Link */}
                <div className="flex gap-2 items-center justify-center w-full">
                    <a 
                        href="/allEvents" 
                        className="flex gap-2 items-center hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-lg text-[var(--color-primary-blue-9)] tracking-tight leading-5 underline decoration-solid">
                            See All Events
                        </span>
                        <img src={ArrowRightBlue} alt="" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
