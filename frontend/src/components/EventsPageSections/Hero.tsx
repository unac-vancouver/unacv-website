import EventsHeroImage from '@/assets/EventsPages/EventsHeroBg.webp'
import { BodyLarge, H1 } from '@/components/ui/Typographies'

export default function Hero() {
    return (
        <section
            id="events-hero"
            className="relative w-full flex flex-col items-center py-14 pb-14 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image and Overlay */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    alt="Events background image"
                    className="absolute inset-0 w-full h-full object-center object-cover"
                    src={EventsHeroImage}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center w-full pt-2.5 pb-8">
                {/* Heading */}
                <div className="flex items-center justify-center w-full">
                    <H1 className="text-[var(--color-neutral-0)] text-center">
                        UNAC Vancouver Events
                    </H1>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center px-7 max-w-4xl">
                    <BodyLarge className="text-[var(--color-neutral-0)] text-center">
                        Connect with your community and take action. Join us at our events and make a difference in Vancouver.
                    </BodyLarge>
                </div>
            </div>
        </section>
    )
}
