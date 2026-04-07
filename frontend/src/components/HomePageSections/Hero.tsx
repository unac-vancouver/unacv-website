import { useState, type FocusEvent, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '@/assets/HomePage/vancouver_hero.webp'
import { Display } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'
import { getFeaturedEvents } from '@/content/events'

// Get featured events and create hero slides
const featuredEvents = getFeaturedEvents();
const HERO_SLIDES = [
    {
        image: HeroImage,
        text: "Advocating for and promoting the values and goals of the United Nations within Metro Vancouver.",
    },
    ...featuredEvents
        .filter(event => event.promotionalMessage && event.image)
        .map(event => ({
            image: event.image!,
            text: event.promotionalMessage!,
        }))
];

interface HeroProgressControlsProps {
    slidesCount: number;
    activeSlide: number;
    isPaused: boolean;
    animationKey: number;
    onSelectSlide: (index: number) => void;
    onProgressKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onProgressAnimationEnd: () => void;
}

function HeroProgressControls({
    slidesCount,
    activeSlide,
    isPaused,
    animationKey,
    onSelectSlide,
    onProgressKeyDown,
    onProgressAnimationEnd,
}: HeroProgressControlsProps) {
    if (slidesCount <= 1) {
        return null;
    }

    return (
        <div className="relative flex items-center gap-2 mb-10" role="group" aria-label="Slideshow controls">
            {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => onSelectSlide(index)}
                    onKeyDown={onProgressKeyDown}
                    className="relative h-10 w-10 sm:w-12 flex items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                >
                    <span
                        className={`relative h-1 w-8 sm:w-10 overflow-hidden transition-colors duration-300 ${
                            index === activeSlide
                                ? 'bg-white/30'
                                : 'bg-[#B7B7B7]/74 hover:bg-[#B7B7B7]/90'
                        }`}
                    >
                        {index === activeSlide && (
                            <span
                                key={animationKey}
                                className={`absolute inset-y-0 left-0 bg-white h-full w-0 animate-[fillBar_8s_linear_forwards] ${
                                    isPaused ? '[animation-play-state:paused]' : ''
                                }`}
                                onAnimationEnd={onProgressAnimationEnd}
                            />
                        )}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocusWithin, setIsFocusWithin] = useState(false);
    const [liveAnnouncement, setLiveAnnouncement] = useState('');

    const isPaused = isHovered || isFocusWithin;
    const hasMultipleSlides = HERO_SLIDES.length > 1;

    const handleBlurCapture = (event: FocusEvent<HTMLElement>) => {
        const nextFocusTarget = event.relatedTarget as Node | null;
        if (
            !nextFocusTarget ||
            !event.currentTarget.contains(nextFocusTarget)
        ) {
            setIsFocusWithin(false);
        }
    };

    const handleSlideSelect = (index: number) => {
        if (index === activeSlide) {
            return;
        }
        setActiveSlide(index);
        setAnimationKey((prev) => prev + 1);
        setLiveAnnouncement(`Slide ${index + 1} of ${HERO_SLIDES.length}`);
    };

    const goToNextSlide = () => {
        setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
        setAnimationKey((prev) => prev + 1);
    };

    const handleProgressAnimationEnd = () => {
        if (!hasMultipleSlides || isPaused) {
            return;
        }
        goToNextSlide();
    };

    const handleProgressKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            handleSlideSelect((activeSlide + 1) % HERO_SLIDES.length);
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            handleSlideSelect((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
            return;
        }

        if (event.key === 'Home') {
            event.preventDefault();
            handleSlideSelect(0);
            return;
        }

        if (event.key === 'End') {
            event.preventDefault();
            handleSlideSelect(HERO_SLIDES.length - 1);
        }
    };

    return (
        <section 
            id="hero" 
            className="relative w-full h-[30rem] flex flex-col items-center "
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured highlights"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocusWithin(true)}
            onBlurCapture={handleBlurCapture}
        >
            {/* Background Images with Fade Transition */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <img 
                        key={index}
                        alt=""
                        aria-hidden="true"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            activeSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        src={slide.image}
                    />
                ))}
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"                 
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(125% 90% at 50% 45%, rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0.62) 100%)',
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-y-10 items-center justify-center w-full pt-2.5 flex-1">
                {/* Heading with Fade Transition */}
                <div
                    id={`hero-slide-${activeSlide}`}
                    className="flex items-center justify-center h-52 w-3/4"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${activeSlide + 1} of ${HERO_SLIDES.length}`}
                    aria-atomic="true"
                >
                    <Display 
                        key={activeSlide}
                        className="text-white text-center animate-[fadeIn_0.8s_ease-in-out]"
                    >
                        {HERO_SLIDES[activeSlide].text}
                    </Display>
                </div>
                <p className="sr-only" aria-live="polite">{liveAnnouncement}</p>

                {/* Buttons Container */}
                <div className="flex gap-6 items-center">
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
                        >
                            See Events
                        </CTAButton>
                    </Link>
                </div>
            </div>

            <HeroProgressControls
                slidesCount={HERO_SLIDES.length}
                activeSlide={activeSlide}
                isPaused={isPaused}
                animationKey={animationKey}
                onSelectSlide={handleSlideSelect}
                onProgressKeyDown={handleProgressKeyDown}
                onProgressAnimationEnd={handleProgressAnimationEnd}
            />
        </section>
    )
}
