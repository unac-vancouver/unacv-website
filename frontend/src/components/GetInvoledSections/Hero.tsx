import GetInvolvedHeroImage from '@/assets/GetInvolved/Hero.webp'
import { BodyLarge, H1 } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import DonationModal from '@/components/ui/DonationModal'
import VolunteerModal from '@/components/ui/VolunteerModal'
import { useState } from 'react'

export default function Hero() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

    return (
        <section
            id="membership"
            className="relative w-full flex flex-col items-center py-14 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image and Overlay */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    alt="Get involved page background image"
                    className="absolute inset-0 w-full h-full object-center object-cover"
                    src={GetInvolvedHeroImage}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full pt-2.5 pb-8">
                {/* Heading */}
                <div className="flex items-center justify-center w-full">
                    <H1 className="text-white text-center">
                        Become a Member of UNAC-V
                    </H1>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center px-7 max-w-4xl">
                    <BodyLarge className="text-white font-medium text-center">
                        By becoming a member of UNAC-V, you are helping to mobilize Canadians.
                    </BodyLarge>
                </div>

                {/* Buttons Container */}
                <div className="flex gap-6 items-center">
                    <button onClick={() => setIsVolunteerModalOpen(true)}>
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-5 sm:p-6 text-lg"
                        >
                            Volunteer
                        </CTAButton>
                    </button>

                    <button onClick={() => setIsDonationModalOpen(true)}>
                        <CTAButton
                            variant="light"
                            size="lg"
                            className="p-5 sm:p-6 text-lg"
                            showArrow={false}
                        >
                            Donate
                        </CTAButton>
                    </button>
                </div>
            </div>

            {/* Volunteer Modal */}
            <VolunteerModal
                isOpen={isVolunteerModalOpen}
                onClose={() => setIsVolunteerModalOpen(false)}
            />

            {/* Donation Modal */}
            <DonationModal
                isOpen={isDonationModalOpen}
                onClose={() => setIsDonationModalOpen(false)}
            />
        </section>
    )
}
