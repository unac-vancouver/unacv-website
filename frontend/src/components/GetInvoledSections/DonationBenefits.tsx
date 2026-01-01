import { H2, H3, Body } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Globe, Handshake } from 'lucide-react'

import UBCLogo from '@/assets/GetInvolved/ubc_logo.png'
import AntonaLogo from '@/assets/GetInvolved/antona_logo.png'
import SFULogo from '@/assets/GetInvolved/sfu_logo.png'
import HolidayInnLogo from '@/assets/GetInvolved/holiday_inn_logo.png'
import VancouverFoundationLogo from '@/assets/GetInvolved/vancouver_foundation_logo.png'

const PARTNER_LOGOS = [
    { id: 1, name: 'UBC', src: UBCLogo, alt: 'University of British Columbia' },
    { id: 2, name: 'Antona', src: AntonaLogo, alt: 'Antona' },
    { id: 3, name: 'SFU', src: SFULogo, alt: 'Simon Fraser University' },
    { id: 4, name: 'Holiday Inn', src: HolidayInnLogo, alt: 'Holiday Inn Vancouver Centre' },
    { id: 5, name: 'Vancouver Foundation', src: VancouverFoundationLogo, alt: 'Vancouver Foundation' },
]

const DONATION_BENEFITS = [
    {
        id: 1,
        icon: Globe,
        text: 'Supporting events and programs that enable the community to learn about issues being discussed at the UN',
    },
    {
        id: 2,
        icon: Users,
        text: 'Being part of a global community of advocates on the UN SDGs',
    },
    {
        id: 3,
        icon: Handshake,
        text: 'Access to networking events and volunteer opportunities for youth',
    },
]

export default function DonationBenefits() {
    return (
        <section className="bg-[var(--color-neutral-1)] px-6 md:px-20 py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  lg:divide-[var(--color-neutral-5)]">
                    {/* Left Side - Benefits */}
                    <div className="flex flex-col gap-8 lg:pr-8">
                        <div>
                            <H2 className="text-[var(--color-primary-blue-10)] mb-6">
                                Benefits to Donating or Sponsoring
                            </H2>

                            {/* Benefits List */}
                            <div className="flex flex-col gap-5">
                                {DONATION_BENEFITS.map((benefit) => (
                                    <div key={benefit.id} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary-blue-1)] flex items-center justify-center">
                                            <benefit.icon className="w-5 h-5 text-[var(--color-primary-blue-7)]" />
                                        </div>
                                        <Body className="text-[var(--color-neutral-8)] pt-1.5 leading-relaxed">
                                            {benefit.text}
                                        </Body>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/donate">
                                <CTAButton
                                    variant="solid"
                                    size="lg"
                                    className="p-5 border-2 border-primary"
                                >
                                    Donate Now
                                </CTAButton>
                            </Link>

                            <Link to="/contact">
                                <CTAButton
                                    size="lg"
                                    variant="ghost"
                                    className="p-5"
                                    showArrow={false}
                                >
                                    Contact Us
                                </CTAButton>
                            </Link>
                        </div>

                        {/* Become a Partner CTA */}
                        <div className="bg-gradient-to-br from-[var(--color-primary-blue-1)] to-[var(--color-primary-blue-05)] rounded-xl p-5  border border-[var(--color-primary-blue-2)]">
                            <H3 className="text-[var(--color-primary-blue-10)] mb-3">
                                Become a Partner
                            </H3>
                            <Body className="text-[var(--color-neutral-8)] mb-4">
                                Join our network of valued partners supporting UNAC-V's mission.
                            </Body>
                            <a 
                                href="mailto:info@unacvancouver.org" 
                                className="inline-flex items-center gap-2 text-[var(--color-primary-blue-8)] hover:text-[var(--color-primary-blue-10)] font-medium transition-colors"
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Partners */}
                    <div className="flex flex-col gap-8 lg:pl-8">
                        <div>
                            <H2 className="text-[var(--color-primary-blue-10)] mb-8">
                                Special Thanks to Our Friends
                            </H2>

                            {/* Partner Logos Grid */}
                            <div className="grid grid-cols-2 gap-6 md:gap-8">
                                {PARTNER_LOGOS.map((partner) => (
                                    <div
                                        key={partner.id}
                                        className="bg-[var(--color-neutral-0)] rounded-lg p-6 md:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 border border-[var(--color-neutral-3)]"
                                    >
                                        <div className="w-full h-16 md:h-20 flex items-center justify-center">
                                            <img
                                                src={partner.src}
                                                alt={partner.alt}
                                                className="max-w-full max-h-full object-contain transition-all duration-300"
                                          
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
