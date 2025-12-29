import EventPlaceholder from '@/assets/HomePage/EventPlaceholder.webp'
import CalendarIcon from '@/assets/calendar-icon.svg'
import ClockIcon from '@/assets/clock-icon.svg'
import LocationIcon from '@/assets/location-icon.svg'
import ArrowRightDark from '@/assets/arrow-right-dark.svg'
import { H3, Body, BodySmall } from '@/components/ui/Typographies'

interface Event {
    id: number
    category: string
    title: string
    date: string
    time: string
    location: string
    description: string
    image: string
}

const EVENTS: Event[] = [
    {
        id: 1,
        category: 'Climate Action',
        title: 'Youth Climate Action Summit',
        date: 'November 12, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: EventPlaceholder
    },
    {
        id: 2,
        category: 'Climate Action',
        title: 'Youth Climate Action Summit',
        date: 'November 12, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: EventPlaceholder
    },
    {
        id: 3,
        category: 'Climate Action',
        title: 'Youth Climate Action Summit',
        date: 'November 12, 2025',
        time: '2:00 PM - 5:00 PM',
        location: 'Vancouver Convention Centre',
        description: 'Join young leaders and climate advocates for an afternoon of workshops.',
        image: EventPlaceholder
    }
];

export default function EventsPreview() {
    return (
        <section 
            id="events-preview" 
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20"
        >
            <div className="flex flex-col gap-12 items-center w-full">
                {/* Header */}
                <div className="flex flex-col gap-5 items-center w-full">
                    <H3 className="text-[var(--color-primary-blue-10)] text-center">
                        Upcoming Events
                    </H3>
                    <div className="text-center px-2">
                        <Body className="text-[var(--color-neutral-9)]">
                            Connect with your community and take action.
                            <br />
                            Join us at our upcoming events and make a difference in Vancouver.
                        </Body>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
                    {EVENTS.map((event) => (
                        <div 
                            key={event.id}
                            className="border border-[var(--color-primary-blue-1)] rounded-xl flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Event Image */}
                            <div className="h-44 w-full overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Event Content */}
                            <div className="flex flex-col gap-3 p-4">
                                {/* Category Badge and Title */}
                                <div className="flex flex-col gap-4">
                                    <span className="bg-[var(--color-primary-blue-05)] px-2 py-0.5 rounded-md text-xs font-medium text-[var(--color-primary-blue-10)] leading-tight w-fit">
                                        {event.category}
                                    </span>
                                    <h4 className="font-semibold text-lg text-[var(--color-primary-blue-10)] tracking-tight leading-tight">
                                        {event.title}
                                    </h4>
                                </div>

                                {/* Event Details */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        {/* Date */}
                                        <div className="flex gap-2 items-center h-6">
                                            <img src={CalendarIcon} alt="" className="w-4 h-4" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.date}
                                            </BodySmall>
                                        </div>
                                        {/* Time */}
                                        <div className="flex gap-2 items-center h-6">
                                            <img src={ClockIcon} alt="" className="w-4 h-4" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.time}
                                            </BodySmall>
                                        </div>
                                        {/* Location */}
                                        <div className="flex gap-2 items-center h-6">
                                            <img src={LocationIcon} alt="" className="w-4 h-4" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-6">
                                                {event.location}
                                            </BodySmall>
                                        </div>
                                    </div>

                                    {/* Description and Link */}
                                    <div className="flex flex-col gap-2">
                                        <Body className="text-[var(--color-neutral-9)]">
                                            {event.description}
                                        </Body>
                                        <a 
                                            href={`/events/${event.id}`}
                                            className="text-xs font-medium text-[var(--color-primary-blue-9)] underline decoration-solid leading-5 tracking-tight hover:opacity-80 transition-opacity">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Events Link */}
                <a 
                    href="/events" 
                    className="flex gap-2 items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
                >
                    <span className="font-bold text-lg text-[var(--color-primary-blue-10)] tracking-tight leading-5 underline decoration-solid">
                        See All Events
                    </span>
                    <img src={ArrowRightDark} alt="" className="w-5 h-5" />
                </a>
            </div>
        </section>
    )
}
