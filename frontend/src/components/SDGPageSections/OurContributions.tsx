import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import DonationModal from '@/components/ui/DonationModal';
import { useState } from 'react';
import TGLLImage from '@/assets/EventsPages/TGLL/TGLL-2024.jpg';
import RichardSplaneImage from '@/assets/HomePage/Richard-Splane-Lecture-2025.jpg';
import JohnGibbardImage from '@/assets/EventsPages/John-Gibbard/john-gibbard5.webp';

export default function OurContributions() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    const events = [
        {
            imageSrc: TGLLImage,
            title: "Think Global, Link Local (TGLL)",
            description:
                "Join us for the Annual Think Global, Link Local event fostering connections among students, non-profits, and civil society groups. This inspiring event connects young people with professionals in Canadian and international public‑service fields.",
            sdgGoals: ["4", "5", "10", "17"],
            link: "/events/tgll",
        },
        {
            imageSrc: RichardSplaneImage,
            title: "Dr. Richard B. Splane Lecture",
            description:
                "Each year, the Dr. Richard Splane Lecture is held at UBC's Vancouver Campus as a joint collaboration between the UBC School of Social Work and UNAC-Vancouver, highlighting pressing social policy issues affecting Canadian society.",
            sdgGoals: ["5", "10", "16"],
            link: "/events/richard-splane-lecture",
        },
        {
            imageSrc: JohnGibbardImage,
            title: "John Gibbard Memorial Award",
            description:
                "Presented annually on UN Day, this award recognizes young people in Metro Vancouver who are working to build a more just, peaceful and sustainable world, celebrating youth who embody global citizenship and service to humanity.",
            sdgGoals: ["16"],
            link: "/events/john-gibbard-award",
        },
    ];

    return (
        <section className="bg-[var(--color-primary-blue-9)] w-full flex justify-center py-16 md:py-24 max-md:px-4">
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 w-full max-w-7xl items-center xl:items-start xl:px-4 2xl:px-0 ">
                {/* Left Side - Text Content */}
                <div className="flex flex-col justify-start gap-12 w-full xl:w-2/5 xl:my-auto">
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <H2 className="text-white text-3xl md:text-4xl md:text-center xl:text-left">
                            Our Contributions
                        </H2>

                        {/* Description */}
                        <Body className="text-white md:text-xl md:text-center xl:text-left md:px-12 xl:px-0 leading-[32px] font-light">
                            We are guided by the UN Sustainable Development Goals (SDGs) and host community events, programs, and partnerships that foster dialogue and action on critical issues such as poverty, gender inequalities, human rights, cross-cultural understanding, environmental degradation, and threats to peace and security.
                        </Body>
                    </div>

                    {/* Buttons Container - Positioned at bottom */}
                    <div className="hidden xl:flex flex-col sm:flex-row gap-6 items-start">
                        <button onClick={() => setIsDonationModalOpen(true)}>
                            <CTAButton
                                variant="solid"
                                size="lg"
                                className="p-5 sm:p-6 text-lg border-white border-2 bg-white text-primary hover:bg-white/90"
                            >
                                Donate
                            </CTAButton>
                        </button>

                        <Link to="/events">
                            <CTAButton
                                variant="ghost"
                                size="lg"
                                className="p-5 sm:p-6 text-lg border-white text-white hover:bg-primary"
                                showArrow={false}
                            >
                                See Events
                            </CTAButton>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Event Cards */}
                <div className="w-full xl:w-3/5 flex flex-col gap-6 items-center md:items-center xl:items-stretch xl:gap-2 xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:auto-rows-fr">
                    {/* Card 1 - Top Right */}
                    <div className="xl:col-start-2 xl:row-start-1 xl:self-start xl:justify-self-end">
                        <EventCard {...events[0]} />
                    </div>
                    
                    {/* Card 2 - Left Middle */}
                    <div className="xl:col-start-1 xl:row-start-2 xl:self-center xl:justify-self-start">
                        <EventCard {...events[1]} />
                    </div>
                    
                    {/* Card 3 - Bottom Right */}
                    <div className="xl:col-start-2 xl:row-start-3 xl:self-end xl:justify-self-end">
                        <EventCard {...events[2]} />
                    </div>
                </div>
            </div>

            {/* Donation Modal */}
            <DonationModal
                isOpen={isDonationModalOpen}
                onClose={() => setIsDonationModalOpen(false)}
            />
        </section>
    );
}
