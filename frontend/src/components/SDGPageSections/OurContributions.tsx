import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

export default function OurContributions() {
    const events = [
        {
            title: "World Oceans Day",
            description:
                "Since 2018, UNAC-V has partnered annually with the City of Vancouver, the Great Canadian Shoreline Cleanup, Ocean Wise Conservation Association, and Surfrider Vancouver to host a World Oceans Day Celebration at the Plaza of Nations.",
            sdgGoals: ["13", "3", "14", "15"],
            link: "/events",
        },
        {
            title: "World Oceans Day",
            description:
                "Since 2018, UNAC-V has partnered annually with the City of Vancouver, the Great Canadian Shoreline Cleanup, Ocean Wise Conservation Association, and Surfrider Vancouver to host a World Oceans Day Celebration at the Plaza of Nations.",
            sdgGoals: ["13", "3", "14", "15"],
            link: "/events",
        },
        {
            title: "World Oceans Day",
            description:
                "Since 2018, UNAC-V has partnered annually with the City of Vancouver, the Great Canadian Shoreline Cleanup, Ocean Wise Conservation Association, and Surfrider Vancouver to host a World Oceans Day Celebration at the Plaza of Nations.",
            sdgGoals: ["13", "3", "14", "15"],
            link: "/events",
        },
    ];

    return (
        <section className="bg-[var(--color-primary-blue-7)] w-full flex justify-center py-16 md:py-24 px-6 md:px-12 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full max-w-7xl">
                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-start gap-12 w-full lg:w-2/5">
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <H2 className="text-white text-3xl md:text-4xl">
                            Our Contributions
                        </H2>

                        {/* Description */}
                        <Body className="text-white text-[24px] leading-[32px] font-light">
                            We are guided by the UN Sustainable Development Goals (SDGs) and host community events, programs, and partnerships that foster dialogue and action on critical issues such as poverty, gender inequalities, human rights, cross-cultural understanding, environmental degradation, and threats to peace and security.
                        </Body>
                    </div>

                    {/* Buttons Container - Positioned at bottom */}
                    <div className="hidden lg:flex flex-col sm:flex-row gap-6 items-start">
                        <Link to="/get-involved#donate">
                            <CTAButton
                                variant="solidWhite"
                                size="lg"
                                className="p-5 sm:p-6 text-lg"
                            >
                                Donate
                            </CTAButton>
                        </Link>

                        <Link to="/events">
                            <CTAButton
                                variant="light"
                                size="lg"
                                className="p-5 sm:p-6 text-lg"
                                showArrow={false}
                            >
                                See Events
                            </CTAButton>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Event Cards */}
                <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-12 lg:pt-32 lg:pr-0">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`
                                ${index === 1 ? 'lg:-ml-50' : 'lg:ml-50 '}
                                transition-all
                            `}
                        >
                            <EventCard {...event} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
