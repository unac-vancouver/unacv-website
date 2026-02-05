import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'
import { getEventBySlug } from '@/content/events'
import { Display, H2, H3, Body, BodyLarge } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import { Badge } from '@/components/ui/badge'
import EventGallery from '@/components/EventGallery'

export default function EventDetailPage() {
    const { slug } = useParams<{ slug: string }>()
    const event = slug ? getEventBySlug(slug) : null

    if (!event) {
        return <Navigate to="/events" replace />
    }

    return (
        <div className="bg-white min-h-screen relative">
            {/* Hero Section with Image */}
            <section className="relative w-full h-96 md:h-[500px]">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-6 md:px-12 lg:px-20 pb-6">
                        <div className="max-w-7xl mx-auto">
                            <Badge className="bg-primary rounded-xl text-white px-4 py-2 mb-4 text-sm border-0">
                                {event.category}
                            </Badge>
                            <Display className="text-white mb-4">
                                {event.title}
                            </Display>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Discreet Back Button */}
                    <Link
                        to="/events"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Events
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Sidebar - Shows first on mobile */}
                        <div className="lg:col-span-1 lg:h-fit order-1 lg:order-2">
                            <div className="bg-gray-50 rounded-2xl p-6 lg:sticky lg:top-24 lg:self-start space-y-6">
                                <H3 className="text-gray-900">Event Details</H3>

                                {/* Date & Time */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-sm text-gray-600 block">Date</span>
                                            <Body className="text-gray-900 font-medium">{event.date}</Body>
                                        </div>
                                    </div>

                                    {event.time && (
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-semibold text-sm text-gray-600 block">Time</span>
                                                <Body className="text-gray-900 font-medium">{event.time}</Body>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-sm text-gray-600 block">Location</span>
                                            <Body className="text-gray-900 font-medium">
                                                {event.venue || event.location}
                                            </Body>
                                        </div>
                                    </div>
                                </div>

                                {/* Registration Button */}
                                {event.registrationLink && (
                                    <div className="pt-4 ">
                                        <a
                                            href={event.registrationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full block"
                                        >
                                            <CTAButton
                                                variant="solid"
                                                size="lg"
                                                className="w-full justify-center"
                                            >
                                                Register Now
                                            </CTAButton>
                                        </a>
                                    </div>
                                )}

                                {/* Social Media Links */}
                                {event.socialMedia && (
                                    <div className="pt-4 space-y-3">
                                        <span className="font-semibold text-sm text-gray-600 block">Links</span>
                                        <div className="flex flex-col gap-2">
                                            {event.socialMedia.website && (
                                                <a
                                                    href={event.socialMedia.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="font-medium text-sm">Organizer Website</span>
                                                </a>
                                            )}
                                            {event.socialMedia.facebook && (
                                                <a
                                                    href={event.socialMedia.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="font-medium text-sm">Facebook</span>
                                                </a>
                                            )}
                                            {event.socialMedia.instagram && (
                                                <a
                                                    href={event.socialMedia.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="font-medium text-sm">Instagram</span>
                                                </a>
                                            )}
                                            {event.socialMedia.twitter && (
                                                <a
                                                    href={event.socialMedia.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="font-medium text-sm">X (Twitter)</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Main Content - Shows second on mobile */}
                        <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                            {/* Description */}
                            <div>
                                <H2 className="text-gray-900 mb-4">About This Event</H2>
                                <BodyLarge className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {event.longDescription || event.description}
                                </BodyLarge>
                            </div>

                            {/* Keynote Speaker */}
                            {event.keynoteSpeaker && (
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                    <div className="flex items-start gap-4">
                                        <div>
                                            <H3 className="text-gray-900 mb-2">Keynote Speaker</H3>
                                            <Body className="text-gray-800 font-medium">
                                                {event.keynoteSpeaker}
                                            </Body>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Gallery */}
                            {event.gallery && event.gallery.length > 0 && (
                                <div>
                                    <H2 className="text-gray-900 mb-4">Event Gallery</H2>
                                    <EventGallery images={event.gallery} eventTitle={event.title} />
                                </div>
                            )}

                            {/* Past Keynotes */}
                            {event.pastKeynotes && event.pastKeynotes.length > 0 && (
                                <div>
                                    <H3 className="text-gray-900 mb-3">Past Keynote Speakers</H3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {[...event.pastKeynotes].reverse().map((speaker, idx) => (
                                            <li key={idx}>
                                                <Body className="text-gray-700 inline">{speaker}</Body>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Past Recipients */}
                            {event.pastRecipients && event.pastRecipients.length > 0 && (
                                <div>
                                    <H3 className="text-gray-900 mb-3">Past Recipients</H3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {[...event.pastRecipients].reverse().map((recipient, idx) => (
                                            <li key={idx}>
                                                <Body className="text-gray-700 inline">{recipient}</Body>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Past Events */}
                            {event.pastEvents && event.pastEvents.length > 0 && (
                                <div>
                                    <H3 className="text-gray-900 mb-4">Previous Lectures</H3>
                                    <div className="space-y-4">
                                        {event.pastEvents.map((pastEvent, idx) => (
                                            <div key={idx} className="bg-gray-50 border-l-4 border-primary p-4 rounded-r-lg">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <span className="font-bold text-primary">{pastEvent.year}</span>
                                                        <Body className="text-gray-800 mt-1">{pastEvent.title}</Body>
                                                    </div>
                                                    {pastEvent.recordingUrl && (
                                                        <a
                                                            href={pastEvent.recordingUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium whitespace-nowrap"
                                                        >
                                                            <ExternalLink className="w-4 h-4" />
                                                            Recording
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Partners */}
                            {event.partners && event.partners.length > 0 && (
                                <div>
                                    <H3 className="text-gray-900 mb-3">In Partnership With</H3>
                                    <div className="flex flex-wrap gap-3">
                                        {event.partners.map((partner, idx) => (
                                            <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg">
                                                <Body className="text-gray-800 font-medium">{partner}</Body>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* SDG Goals */}
                            {event.sdgGoals && event.sdgGoals.length > 0 && (
                                <div>
                                    <H3 className="text-gray-900 mb-4">Related UN Sustainable Development Goals</H3>
                                    <div className="flex flex-wrap gap-4">
                                        {event.sdgGoals.map((goal, idx) => (
                                            <div key={idx} className="w-24 h-24 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                                <img
                                                    src={goal}
                                                    alt={`SDG Goal ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
