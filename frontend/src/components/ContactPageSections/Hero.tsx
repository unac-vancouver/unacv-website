import ContactPageHero from '@/assets/ContactPage/contact-hero.jpg'
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
                    alt="Contact page hero background image"
                    className="absolute inset-0 w-full h-full object-center object-cover"
                    src={ContactPageHero}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full pt-2.5 pb-8">
                {/* Heading */}
                <div className="flex items-center justify-center w-full">
                    <H1 className="text-white text-left sm:text-center font-[420] text-2xl md:text-3xl lg:text-4xl lg:leading-tight tracking-normal w-10/12">
                        Have a question or want to collaborate? We’d love to hear from you.                    
                        </H1>
                </div>


                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-6 items-left sm:items-center mt-8 w-10/12 sm:justify-center">
                    <Link to="/#">
                        <CTAButton
                            variant="solid"
                            size="lg"
                            className="p-6 text-lg"
                        >
                            Send us a Message
                        </CTAButton>
                    </Link>

                    <Link to="/get-involved">
                        <CTAButton
                            variant="light"
                            size="lg"
                            className="py-6 text-lg"
                            showArrow={false}
                        >
                            Interested in Volunteering?
                        </CTAButton>
                    </Link>
                </div>
            </div>

        </section>
    )
}