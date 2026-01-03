import AboutPageHero from '@/assets/AboutPage/about_hero.webp'
import { H1 } from '@/components/ui/Typographies';
import { CTAButton } from '../ui/cta-button';
import { Link } from 'react-router-dom';

export default function Hero() {

    return (
        <section
            id="about-hero"
            className="relative w-full flex flex-col items-center py-14 md:py-24 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image and Overlay */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    alt="About page hero background image"
                    className="absolute inset-0 w-full h-full object-center object-cover"
                    src={AboutPageHero}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full pt-2.5 pb-8">
                {/* Heading */}
                <div className="flex items-center justify-center w-full">
                    <H1 className="text-white text-left sm:text-center font-[420] text-2xl md:text-3xl lg:text-4xl lg:leading-tight w-10/12">
                        UNAC-Vancouver mobilizes local communities to advance the principles and priorities of the United Nations through education, advocacy, and action, fostering a more just, sustainable, and peaceful world.
                    </H1>
                </div>


                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-6 items-left sm:items-center mt-8 w-10/12 sm:justify-center">
                    <Link to="/about">
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-6 text-lg"
                        >
                            Our Mission & Vision
                        </CTAButton>
                    </Link>

                    <Link to="/get-involved">
                        <CTAButton
                            variant="light"
                            size="lg"
                            className="p-6 text-lg"
                            showArrow={false}
                        >
                            Get Involved
                        </CTAButton>
                    </Link>
                </div>
            </div>

        </section>
    )
}