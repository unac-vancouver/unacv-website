import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';

export default function CallToAction() {
    return (
        <section
            id="resources-cta"
            className="bg-[#5471c6] w-full flex flex-col items-center py-12 md:py-16 px-6 md:px-12 lg:px-28"
        >
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl text-center">
                {/* Heading */}
                <H2 className="text-white text-2xl md:text-3xl lg:text-4xl">
                    Turn Knowledge into Action
                </H2>

                {/* Description */}
                <Body className="text-white/90 text-[15px] max-w-3xl">
                    Your time and support help us strengthen our local impact. Explore how you can get involved through volunteering, memberships, and community-led action.
                </Body>

                {/* CTA Button */}
                <Link to="/get-involved">
                    <CTAButton
                        variant="solidWhite"
                        size="lg"
                        className="px-6 py-2.5 text-[13.5px] shadow-[0px_8px_13px_-3px_rgba(0,0,0,0.1),0px_3px_5px_-3px_rgba(0,0,0,0.1)]"
                    >
                        Get Involved
                    </CTAButton>
                </Link>
            </div>
        </section>
    );
}
