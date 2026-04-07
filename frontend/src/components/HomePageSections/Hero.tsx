import { useEffect, useRef, useState, type FocusEvent, type TouchEvent } from 'react'
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

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocusWithin, setIsFocusWithin] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    const isPaused = isHovered || isFocusWithin;
    const hasMultipleSlides = HERO_SLIDES.length > 1;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleMediaQueryChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleMediaQueryChange();
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

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
    };

    const goToNextSlide = () => {
        setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
        setAnimationKey((prev) => prev + 1);
    };

    const goToPreviousSlide = () => {
        setActiveSlide(
            (current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
        );
        setAnimationKey((prev) => prev + 1);
    };

    const handleProgressAnimationEnd = () => {
        if (!hasMultipleSlides || isMobile) {
            return;
        }
        goToNextSlide();
    };

    const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
        if (!isMobile || !hasMultipleSlides) {
            return;
        }

        const touch = event.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
        if (!isMobile || !hasMultipleSlides || !touchStartRef.current) {
            return;
        }

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartRef.current.x;
        const deltaY = touch.clientY - touchStartRef.current.y;
        touchStartRef.current = null;

        if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) {
            return;
        }

        if (deltaX < 0) {
            goToNextSlide();
            return;
        }

        goToPreviousSlide();
    };

    const handleTouchCancel = () => {
        touchStartRef.current = null;
    };

    return (
        <section 
            id="hero" 
            className="relative w-full h-[30rem] flex flex-col items-center "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocusWithin(true)}
            onBlurCapture={handleBlurCapture}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
        >
            {/* Background Images with Fade Transition */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <img 
                        key={index}
                        alt={`Hero Image ${index + 1}`}
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
                <div className="flex items-center justify-center h-52 w-3/4">
                    <Display 
                        key={activeSlide}
                        className="text-white text-center animate-[fadeIn_0.8s_ease-in-out]"
                    >
                        {HERO_SLIDES[activeSlide].text}
                    </Display>
                </div>

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

            {/* Progress Indicator */}
            {hasMultipleSlides && (
                <div className="relative hidden md:flex gap-2 h-1 items-center mb-10">
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSlideSelect(index)}
                            className={`h-full w-8 sm:w-10 transition-colors duration-300 cursor-pointer relative overflow-hidden ${
                                index === activeSlide ? 'bg-white/30' : 'bg-[#B7B7B7]/74 hover:bg-[#B7B7B7]/90'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === activeSlide ? 'true' : undefined}
                        >
                            {index === activeSlide && (
                                <div 
                                    key={animationKey}
                                    className={`absolute inset-0 bg-white h-full w-0 animate-[fillBar_8s_linear_forwards] ${
                                        isPaused ? '[animation-play-state:paused]' : ''
                                    }`}
                                    onAnimationEnd={handleProgressAnimationEnd}
                                />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}
