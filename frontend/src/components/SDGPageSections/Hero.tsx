import SDGHeroImage from '@/assets/SDGPage/sdg-hero.webp';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative w-full flex flex-col items-center py-14 px-6 md:px-20 lg:px-40">
            {/* Background Image */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    src={SDGHeroImage}
                    alt="People holding up UN Sustainable Development Goals signs"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full pt-2.5 pb-8">
                {/* Title */}
                <div className="flex items-center justify-center w-full">
                    <h1 
                        id="sdg-title" 
                        className="font-roboto font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center"
                    >
                        A Better World for All
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="flex items-center justify-center px-7 max-w-4xl">
                    <p className="font-roboto font-bold text-white text-lg md:text-xl leading-relaxed text-center">
                        "a world free from poverty and inequality"
                    </p>
                </div>

                {/* Buttons Container */}
                <div className="flex gap-6 items-center justify-center">
                    <Link to="/get-involved">
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-5 sm:p-6 text-lg"
                        >
                            Get Involved
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
