import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import TakeActionBg from '@/assets/SDGPage/take-action-bg.webp';

export default function TakeAction() {
    return (
        <section className="relative w-full flex justify-center py-16 md:py-24 px-6 md:px-12 lg:px-28">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={TakeActionBg}
                    alt="Hands reaching up together"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center text-center w-full max-w-2xl">
                {/* Header */}
                <H2 className="text-white text-3xl md:text-4xl">
                    Take Action
                </H2>

                {/* Quote */}
                <Body className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                    "Together, we can make a difference - locally and globally."
                </Body>

                {/* Button */}
                <Link to="/get-involved">
                    <CTAButton
                        variant="solidWhite"
                        size="lg"
                        className="p-5 sm:p-6 text-lg"
                    >
                        Get Involved
                    </CTAButton>
                </Link>
            </div>
        </section>
    );
}
