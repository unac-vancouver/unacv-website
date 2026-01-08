import SDGHeroImage from '@/assets/SDGPage/sdg-hero.webp';
import { CTAButton } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center px-6 md:px-20 lg:px-40">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={SDGHeroImage}
                    alt="People holding up UN Sustainable Development Goals signs"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-8 items-center justify-center w-full max-w-5xl">
                {/* Title */}
                <h1 
                    id="sdg-title" 
                    className="font-roboto font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center"
                >
                    A Better World for All
                </h1>

                {/* Subtitle */}
                <p className="font-roboto font-bold text-white text-lg md:text-xl leading-relaxed text-center">
                    "a world free from poverty and inequality"
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
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
