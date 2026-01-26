import { Calendar, MapPinIcon } from 'lucide-react'
import { Body, H4 } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import { type SiteEvent } from '@/content/events'

interface EventCardProps {
    event: SiteEvent
}

export default function EventCard({ event }: EventCardProps) {

    return (
        <div
            className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            style={{ minHeight: '300px' }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Simple Black Overlay */}
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-6 flex flex-col">
                {/* Title - Always at top */}
                <div className="mb-6">
                    <H4 className="text-white leading-tight drop-shadow-lg">
                        {event.title}
                    </H4>
                </div>

                {/* Rest of content - takes remaining space and pushes button to bottom */}
                <div className="flex-1 flex flex-col justify-between">
                    {/* Event Details and Description */}
                    <div className="space-y-4">
                        {/* Event Details */}
                        <div className="space-y-2">
                            {/* Date */}
                            <div className="flex items-center gap-3 text-white">
                                <div className="rounded-full">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <Body className="font-semibold text-white">{event.date}</Body>
                            </div>
                            {/* Location */}
                            {event.location && (
                                <div className="flex items-center gap-3 text-white">
                                    <div className="rounded-full">
                                        <MapPinIcon className="w-5 h-5" />
                                    </div>
                                    <Body className="font-medium text-white">{event.location}</Body>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <Body className="text-white leading-relaxed">
                                {event.shortDescription}
                            </Body>
                        </div>
                    </div>

                    {/* CTA Button - Always at bottom */}
                    <div className="flex justify-start mt-6">
                        <a href={`/events/${event.slug}`}>
                            <CTAButton
                                variant="solid"
                                className="bg-white text-primary hover:bg-blue-50 font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                Learn More
                            </CTAButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}