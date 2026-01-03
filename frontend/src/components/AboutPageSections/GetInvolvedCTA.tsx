import { H2, BodyLarge } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';

export default function GetInvolvedCTA() {
    return (
        <section
            id="get-involved-cta"
            className="w-full flex flex-col items-center py-20 md:py-24 px-6 md:px-20 lg:px-40 bg-[var(--color-primary-blue-9)]"
        >
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl text-center">
                {/* Heading */}
                <H2 className="text-white font-bold">
                    Make a Difference 
                </H2>

                {/* Description */}
                <BodyLarge className="text-white leading-relaxed">
                    Your time and support helps us strengthen our local impact through events and programs that educate the Metro Vancouver region on the United Nations and the global challenges it confronts. Together, we can create positive change in Vancouver and contribute to a better world for all.
                </BodyLarge>

                {/* CTA Button */}
                <Link to="/get-involved">
                    <CTAButton
                        variant="solidWhite"
                        size="lg"
                        className="px-8 py-5 sm:py-6 text-lg"
                    >
                        Get Involved
                    </CTAButton>
                </Link>
            </div>
        </section>
    );
}
