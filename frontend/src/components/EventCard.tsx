import { Calendar, MapPinIcon } from 'lucide-react'
import { Body, BodyLarge } from '@/components/ui/Typographies'
import { type SiteEvent } from '@/content/events'
import { CTAButton } from './ui/cta-button'

interface EventCardProps {
    event: SiteEvent
}

export default function EventCard({ event }: EventCardProps) {

    return (
        <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 h-[400px] sm:h-[500px] md:h-[550px]">
            {/* Background Image - Full Card */}
            <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark Overlay at Bottom Center */}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-3 sm:p-4 max-h-72 h-auto sm:max-h-80 sm:h-auto md:max-h-96 md:h-auto lg:max-h-72 lg:h-72 rounded-2xl m-3 sm:m-4 flex flex-col items-start text-left">
                {/* Content wrapper that grows */}
                <div className="flex-1 space-y-4">
                    {/* Title */}
                    <BodyLarge className="text-white font-medium leading-tight">
                        {event.title}
                    </BodyLarge>

                    {/* Event Details */}
                    <div className="space-y-2">
                        {/* Date */}
                        <div className="flex items-start gap-2 text-white">
                            <Calendar className="w-5 h-5" />
                            <Body className="font-semibold text-white">{event.date}</Body>
                        </div>
                        {/* Location */}
                        {event.location && (
                            <div className="flex items-start gap-2 text-white">
                                <MapPinIcon className="w-5 h-5" />
                                <Body className="font-medium text-white">{event.location}</Body>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    {event.shortDescription && (
                        <Body className="text-white leading-relaxed max-w-prose">
                            {event.shortDescription}
                        </Body>
                    )}
                </div>

                {/* Learn More Button - Always at bottom */}
                <a 
                    href={`/events/${event.slug}`}
                    className="mt-4"
                >
                    <CTAButton variant='solidWhite'>Learn More</CTAButton>
                </a>
            </div>
        </div>
    )
}