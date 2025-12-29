import ArrowRight from '@/assets/arrow-right-blue-link.svg'
import { BodyLarge, H2 } from '@/components/ui/Typographies'

export default function AboutSnapshot() {
    return (
        <section 
            id="about-snapshot" 
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 md:py-16 lg:py-20"
        >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start justify-center w-full">
                {/* Who We Are Column */}
                <div className="flex-1 flex flex-col gap-5 items-start justify-center w-full">
                    <div className="flex flex-col gap-5 items-start w-full flex-1">
                        <H2 className="text-[var(--color-primary-blue-10)] w-full">
                            Who We Are
                        </H2>
                        <BodyLarge className="text-[var(--color-neutral-9)] w-full">
                            UNAC Vancouver is a branch of the{' '}
                            <a 
                                href="https://unac.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary-blue-9)] underline decoration-solid"
                            >
                                United Nations Association in Canada
                            </a>
                            , dedicated to advancing the UN's mission at the local level.
                        </BodyLarge>
                    </div>
                    <a 
                        href="/about" 
                        className="flex gap-2 items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-lg text-[var(--color-primary-blue-9)] tracking-tight leading-5 underline decoration-solid">
                            Learn More About Us
                        </span>
                        <img src={ArrowRight} alt="" className="w-5 h-5" />
                    </a>
                </div>

                {/* What We Focus On Column */}
                <div className="flex-1 flex flex-col gap-10 items-start justify-center w-full">
                    <div className="flex flex-col gap-5 items-start w-full">
                        <H2 className="text-[var(--color-primary-blue-10)] w-full">
                            What We Focus On
                        </H2>
                        <BodyLarge className="text-[var(--color-neutral-9)] w-full">
                            We focus on community engagement, education, and advancing the{' '}
                            <a 
                                href="https://sdgs.un.org/goals" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--color-primary-blue-9)] underline decoration-solid"
                            >
                                United Nations Sustainable Development Goals
                            </a>
                            {' '}through meaningful events, partnerships, and awareness initiatives.
                        </BodyLarge>
                    </div>
                    <a 
                        href="/mission" 
                        className="flex gap-2 items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-lg text-[var(--color-primary-blue-9)] tracking-tight leading-5 underline decoration-solid">
                            See Our Mission & Vision
                        </span>
                        <img src={ArrowRight} alt="" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
