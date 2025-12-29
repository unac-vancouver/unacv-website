import EventPlaceholder from '@/assets/event-placeholder.webp'
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
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-[24px] md:px-[50px] lg:px-[75px] py-[50px] md:py-[65px] lg:py-[80px]"
        >
            <div className="flex flex-col gap-[50px] items-center w-full">
                {/* Header */}
                <div className="flex flex-col gap-[20px] items-center w-full">
                    <H3 className="text-[var(--color-primary-blue-10)] text-center">
                        Upcoming Events
                    </H3>
                    <div className="text-center px-[9px]">
                        <Body className="text-[var(--color-neutral-9)]">
                            Connect with your community and take action.
                            <br />
                            Join us at our upcoming events and make a difference in Vancouver.
                        </Body>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] w-full">
                    {EVENTS.map((event) => (
                        <div 
                            key={event.id}
                            className="border border-[var(--color-primary-blue-1)] rounded-[10px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Event Image */}
                            <div className="h-[180px] w-full overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Event Content */}
                            <div className="flex flex-col gap-[12px] p-[15px_15px_25px_15px]">
                                {/* Category Badge and Title */}
                                <div className="flex flex-col gap-[16px]">
                                    <span className="bg-[var(--color-primary-blue-05)] px-[9px] py-[2px] rounded-[5px] text-[12px] font-medium text-[var(--color-primary-blue-10)] leading-[16px] w-fit">
                                        {event.category}
                                    </span>
                                    <h4 className="font-semibold text-[18px] text-[var(--color-primary-blue-10)] tracking-[-0.3125px] leading-[16px]">
                                        {event.title}
                                    </h4>
                                </div>

                                {/* Event Details */}
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex flex-col gap-[4px]">
                                        {/* Date */}
                                        <div className="flex gap-[8px] items-center h-[24px]">
                                            <img src={CalendarIcon} alt="" className="w-[16px] h-[16px]" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-[24px]">
                                                {event.date}
                                            </BodySmall>
                                        </div>
                                        {/* Time */}
                                        <div className="flex gap-[8px] items-center h-[24px]">
                                            <img src={ClockIcon} alt="" className="w-[16px] h-[16px]" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-[24px]">
                                                {event.time}
                                            </BodySmall>
                                        </div>
                                        {/* Location */}
                                        <div className="flex gap-[8px] items-center h-[24px]">
                                            <img src={LocationIcon} alt="" className="w-[16px] h-[16px]" />
                                            <BodySmall className="text-[var(--color-neutral-8)] leading-[24px]">
                                                {event.location}
                                            </BodySmall>
                                        </div>
                                    </div>

                                    {/* Description and Link */}
                                    <div className="flex flex-col gap-[8px]">
                                        <Body className="text-[var(--color-neutral-9)]">
                                            {event.description}
                                        </Body>
                                        <a 
                                            href={`/events/${event.id}`}
                                            className="text-[12px] font-medium text-[var(--color-primary-blue-9)] underline decoration-solid leading-[20px] tracking-[-0.1504px] hover:opacity-80 transition-opacity">
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
                    className="flex gap-[8px] items-center justify-center rounded-[8px] hover:opacity-80 transition-opacity"
                >
                    <span className="font-bold text-[18px] text-[var(--color-primary-blue-10)] tracking-[-0.1504px] leading-[20px] underline decoration-solid">
                        See All Events
                    </span>
                    <img src={ArrowRightDark} alt="" className="w-[20px] h-[20px]" />
                </a>
            </div>
        </section>
    )
}
