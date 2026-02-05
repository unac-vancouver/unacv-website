import CalendarIcon from '@/assets/calendar-icon.svg'
import ClockIcon from '@/assets/clock-icon.svg'
import LocationIcon from '@/assets/location-icon.svg'
import { Body, H3 } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import { Link } from 'react-router-dom'
import { type SiteEvent } from '@/content/events'

interface YearlyEventCardProps {
    event: SiteEvent
    index: number
}


export default function YearlyEventCard({ event, index }: YearlyEventCardProps) {


    return (
        <div className={`w-full  relative z-10`}>

            <div className="w-full z-50 relative">

            <div className=" py-12 ">
                <div
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-stretch w-full max-w-screen-xl mx-auto`}
                >
            {/* Event Image */}
            <div className="w-full md:flex-1 md:max-w-md lg:max-w-lg">
                <div className="w-full h-64 md:h-full md:min-h-96 rounded-xl overflow-hidden">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Event Details */}
            <div className="flex flex-col gap-5 w-full md:flex-1">

                {/* Title */}
                <H3 className="text-[var(--color-neutral-9)]">
                    {event.title}
                </H3>

                {/* Description */}
                        <Body className="text-[var(--color-neutral-9)] leading-6">
                            {event.shortDescription ?? event.description}
                        </Body>

                {/* Event Info */}
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <img src={CalendarIcon} alt="calendar icon" className="w-5 h-5" />
                        <span className="font-medium text-base text-[var(--color-primary-blue-10)] leading-6">
                            {event.date}
                        </span>
                    </div>
                    {event.time && (
                        <div className="flex gap-3 items-center">
                            <img src={ClockIcon} alt="clock icon" className="w-5 h-5" />
                            <span className="font-medium text-base text-[var(--color-primary-blue-10)] leading-6">
                                {event.time}
                            </span>
                        </div>
                    )}

                </div>

                {/* Venue Details */}
                {event.venue && event.venue !== event.location && (
                    <div className="flex gap-3 items-start">
                        <img src={LocationIcon} alt="location icon" className="w-5 h-5 mt-0.5" />
                        <div>
                            <p className="font-medium text-base text-[var(--color-primary-blue-10)]">{event.venue}</p>
                        </div>
                    </div>
                )}

                {/* Partners */}
                {event.partners && event.partners.length > 0 && (
                    <div>
                        <span className="font-semibold text-sm text-[var(--color-neutral-7)]">In Partnership With</span>
                        <p className="mt-1 font-medium text-base text-[var(--color-primary-blue-10)]">{event.partners.join(', ')}</p>
                    </div>
                )}

                {/* SDG Goals */}
                {event.sdgGoals && event.sdgGoals.length > 0 && (
                    <div className="bg-[var(--color-neutral-0)] border border-[var(--color-primary-blue-1)] rounded-xl flex gap-5 items-center px-6 py-3 h-28 w-fit">
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
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                    <Link to={`/events/${event.slug}`} className="w-fit">
                        <CTAButton
                            variant="solid"
                            size="lg"
                        >
                            Learn More
                        </CTAButton>
                    </Link>
                    {event.registrationLink && (
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit"
                        >
                            <CTAButton
                                variant="solidWhite"
                                size="lg"
                            >
                                Register
                            </CTAButton>
                        </a>
                    )}
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}