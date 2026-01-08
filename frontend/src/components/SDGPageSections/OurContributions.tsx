import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';

export default function OurContributions() {
    return (
        <section className="bg-[var(--color-primary-blue-7)] w-full flex justify-center py-16 md:py-24 px-6 md:px-12 lg:px-28">
            <div className="flex flex-col gap-8 w-full max-w-2xl">
                {/* Header */}
                <H2 className="text-white text-3xl md:text-4xl">
                    Our Contributions
                </H2>

                {/* Description */}
                <Body className="text-white text-[24px] leading-[32px] font-light">
                    We are guided by the UN Sustainable Development Goals (SDGs) and host community events, programs, and partnerships that foster dialogue and action on critical issues such as poverty, gender inequalities, human rights, cross-cultural understanding, environmental degradation, and threats to peace and security.
                </Body>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
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
        </section>
    );
}
