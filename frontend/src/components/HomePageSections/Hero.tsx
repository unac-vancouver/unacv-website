import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '@/assets/HomePage/HeroImage.webp'
import { Display } from '@/components/ui/Typographies'
import { CTAButton } from '@/components/ui/cta-button'

const TOTAL_SLIDES = 7;
const SLIDE_DURATION = 8000; // 8 seconds
//Changing SLIDE_DURATION will also require changing index.css to match the animation duration

const SLIDE_CONTENT = [
    "Advocating for and promoting the values and goals of the United Nations within Vancouver.",
    "Building bridges between communities through global understanding and cooperation.",
    "Empowering youth to become tomorrow's leaders in sustainable development.",
    "Promoting human rights and social justice for all members of our community.",
    "Fostering dialogue and collaboration on critical global challenges.",
    "Supporting the United Nations Sustainable Development Goals locally.",
    "Creating opportunities for engagement with international issues and perspectives."
];

export default function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % TOTAL_SLIDES);
            setKey((prev) => prev + 1);
        }, SLIDE_DURATION);

        return () => clearInterval(interval);
    }, []);
    return (
        <section 
            id="hero" 
            className="relative w-full h-[500px] md:h-[610px] flex flex-col items-center pt-20 md:pt-32 pb-10 md:pb-14 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image and Overlay */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <img 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-center cover" 
                    src={HeroImage} 
                />
                <div 
                    className="absolute inset-0 mix-blend-hard-light" 
                    style={{ 
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.172) 0%, rgba(0, 0, 0, 0.2021) 17.457%, rgba(0, 0, 0, 0.2451) 39.818%, rgba(0, 0, 0, 0.2967) 55.342%, rgba(0, 0, 0, 0.3655) 73.823%, rgba(0, 0, 0, 0.3784) 88.422%, rgba(0, 0, 0, 0.43) 100%)" 
                    }} 
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-12 items-center justify-center w-full pt-2.5 pb-8 flex-1">
                {/* Heading */}
                <div className="flex items-center justify-center h-52">
                    <Display className="text-white text-center">
                        {SLIDE_CONTENT[activeSlide]}
                    </Display>
                </div>

                {/* Buttons Container */}
                <div className="flex gap-6 items-center">
                    <Link to="/get-involved">
                        <CTAButton 
                            variant="solid" 
                            size="lg"
                            className="px-5 py-4 text-lg"
                        >
                            Get Involved
                        </CTAButton>
                    </Link>

                    <Link to="/events">
                        <CTAButton 
                            variant="light" 
                            size="lg"
                            className="px-5 py-4 text-lg"
                        >
                            See Events
                        </CTAButton>
                    </Link>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="relative flex gap-2 h-1 items-center -mb-1">
                {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveSlide(index);
                            setKey((prev) => prev + 1);
                        }}
                        className={`h-full w-10 transition-colors duration-300 cursor-pointer relative overflow-hidden ${
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