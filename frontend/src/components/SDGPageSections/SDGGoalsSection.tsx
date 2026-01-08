import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import SDGGoalsGrid from '@/assets/SDGPage/sdg-goals-grid.webp';

export default function SDGGoalsSection() {
    return (
        <section className="bg-white w-full flex justify-center py-16 md:py-24 px-6 md:px-12 lg:px-28">
            <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-7xl">
                {/* Header - Always on top */}
                <H2 className="text-[var(--color-neutral-10)] text-3xl md:text-4xl text-center lg:text-left w-full lg:max-w-xl">
                    Sustainable Development Goals
                </H2>

                {/* Mobile/Tablet: Image, then Text */}
                {/* Desktop: Side by side */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
                    {/* Image - Shows first on mobile, right on desktop */}
                    <div className="w-full lg:w-1/2 lg:order-2">
                        <img
                            src={SDGGoalsGrid}
                            alt="UN Sustainable Development Goals grid showing all 17 goals"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Text Content - Shows second on mobile, left on desktop */}
                    <div className="flex flex-col gap-8 w-full lg:w-1/2 max-w-xl lg:order-1">
                        {/* Description */}
                        <Body className="text-[var(--color-neutral-8)] text-[23px] leading-relaxed font-light">
                            The 2030 Sustainable Development Agenda is subdivided into 17 Goals, 169 Targets, and 232 Indicators. These have been specifically measured by government agencies, business, and civil society so that nations can be compared to their peers. The Agenda is meant to be ambitious and universal, advocating for collective action at a global scale.
                        </Body>

                        {/* Button */}
                        <Link to="/get-involved">
                            <CTAButton
                                variant="solid"
                                size="lg"
                                className="p-5 sm:p-6 text-lg w-fit mx-auto lg:mx-0"
                            >
                                Get Involved
                            </CTAButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
