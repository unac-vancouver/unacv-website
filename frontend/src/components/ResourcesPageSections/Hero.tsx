
import { CTAButton } from '../ui/cta-button';
import { Link } from 'react-router-dom';
import { H1, BodyLarge } from '@/components/ui/Typographies';
import ResourcesHeroImage from '@/assets/ResourcesPage/resources-hero.webp';

export default function Hero() {

    return (
        <section
            id="resources-hero"
            className="relative w-full flex flex-col items-center py-16 md:py-24 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    alt="Resources page hero background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={ResourcesHeroImage}
                />
            </div>

            {/* Background Overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none overflow-hidden bg-[rgba(44,46,51,0.28)]"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-12 items-center justify-center w-full max-w-5xl">
                {/* Title and Subtitle */}
                <div className="flex flex-col gap-6 items-center text-center">
                    <H1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Trusted Resources for Global Learning
                    </H1>

                    <BodyLarge className="text-white/95 font-medium text-lg md:text-xl max-w-2xl">
                        Access credible materials and references that help students, educators, and community members explore the UN's work, Sustainable Development Goals, and global issues.
                    </BodyLarge>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <Link to="/resources#global-resources">
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-[18px] text-lg"
                        >
                            Global Learning Resources
                        </CTAButton>
                    </Link>

                    <a href="https://www.un.org/" target="_blank" rel="noopener noreferrer">
                        <CTAButton
                            variant="light"
                            size="lg"
                            className="p-[18px] text-lg"
                            showArrow={false}
                        >
                            Our National Office
                        </CTAButton>
                    </a>
                </div>
            </div>

        </section>
    )
}