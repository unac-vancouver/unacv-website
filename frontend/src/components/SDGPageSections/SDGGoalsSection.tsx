import { H2, Body } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import SDGGoalsGrid from '@/assets/SDGPage/sdg-goals-grid.webp';

export default function SDGGoalsSection() {
    return (
        <section className="bg-white w-full flex justify-center py-16 md:py-24 px-6 md:px-12 lg:px-28">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full max-w-7xl">
                {/* Image - Left on desktop */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={SDGGoalsGrid}
                        alt="UN Sustainable Development Goals grid showing all 17 goals"
                        className="w-full h-auto"
                    />
                </div>

                {/* Text Content - Right on desktop */}
                <div className="flex flex-col gap-8 w-full lg:w-1/2">
                    {/* Header */}
                    <H2 className="text-[var(--color-neutral-10)] text-3xl md:text-4xl">
                        Sustainable Development Goals
                    </H2>

                    {/* Description */}
                    <Body className="text-[var(--color-neutral-8)] md:text-xl leading-relaxed font-light">
                        The 2030 Sustainable Development Agenda is subdivided into 17 Goals, 169 Targets, and 232 Indicators. These have been specifically measured by government agencies, business, and civil society so that nations can be compared to their peers. The Agenda is meant to be ambitious and universal, advocating for collective action at a global scale.
                    </Body>

                    {/* Button */}
                    <Link to="/get-involved">
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-5 sm:p-6 text-lg w-fit"
                        >
                            Get Involved
                        </CTAButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
