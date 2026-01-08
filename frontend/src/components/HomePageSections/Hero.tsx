import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '@/assets/HomePage/HeroImage.webp'
import TGLLImage from '@/assets/HomePage/TGLL-2024-Group-Shot.webp'
import RichardSplaneImage from '@/assets/HomePage/Richard-Splane-Lecture-2025.jpg'
import { Display } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'

const HERO_SLIDES = [
    {
        image: HeroImage,
        text: "Advocating for and promoting the values and goals of the United Nations within Vancouver.",
    },
    {
        image: TGLLImage,
        text: "TGLL is fast approaching. Register now for tickets at a discounted rate.",
    },
    {
        image: RichardSplaneImage,
        text: "Join us for the Richard Splane Lecture 2025. Stay tuned for more details.",
    }
];

const SLIDE_DURATION = 8000; // 8 seconds
//Changing SLIDE_DURATION will also require changing index.css to match the animation duration

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
            setKey((prev) => prev + 1);
        }, SLIDE_DURATION);

        return () => clearInterval(interval);
    }, [activeSlide]);
    return (
        <section 
            id="hero" 
            className="relative w-full h-[30rem] flex flex-col items-center "
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
            <div className="relative flex gap-2 h-1 items-center mb-10">
                {HERO_SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveSlide(index);
                            setKey((prev) => prev + 1);
                        }}
                        className={`h-full w-8 sm:w-10 transition-colors duration-300 cursor-pointer relative overflow-hidden ${
                            index === activeSlide ? 'bg-white/30' : 'bg-[#B7B7B7]/74 hover:bg-[#B7B7B7]/90'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === activeSlide && (
                            <div 
                                key={key}
                                className="absolute inset-0 bg-white h-full w-0 animate-[fillBar_8s_linear_forwards]"
                            />
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}