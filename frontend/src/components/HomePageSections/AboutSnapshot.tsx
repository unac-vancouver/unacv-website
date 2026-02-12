import { BodyLarge, H2 } from '@/components/ui/Typographies'
import { ArrowRight } from "lucide-react"


export default function AboutSnapshot() {
    return (
        <section
            id="about-snapshot"
            className="bg-[var(--color-neutral-0)] w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 md:py-16 lg:py-20"
        >
            <div className="flex flex-col gap-10 w-full">
                {/* Content Row */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start justify-center w-full">
                    {/* Who We Are Column */}
                    <div className="flex-1 flex flex-col gap-y-4 gap-x-1 items-start w-full">
                        <H2 className="text-[var(--color-primary-blue-10)] w-full">
                            Who We Are
                        </H2>
                        <BodyLarge className="text-[var(--color-neutral-9)] w-full xl:w-10/12">
                            UNAC-Vancouver is a branch of the{' '}
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
                        <a
                            href="/about"
                            className="flex lg:hidden gap-2 items-center rounded-lg hover:opacity-80 transition-opacity"
                        >
                            <span className="font-semibold text-base sm:text-lg text-primary tracking-tight leading-5 underline decoration-solid">
                                Learn More About Us
                            </span>
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </a>
                    </div>

                    {/* What We Focus On Column */}
                    <div className="flex-1 flex flex-col gap-y-4 gap-x-1 items-start w-full">
                        <H2 className="text-[var(--color-primary-blue-10)] w-full">
                            What We Focus On
                        </H2>
                        <BodyLarge className="text-[var(--color-neutral-9)] w-full xl:w-10/12">
                            We focus on community engagement, education, and advancing the{' '}
                            <a
                                href="https://sdgs.un.org/goals"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline decoration-solid"
                            >
                                United Nations Sustainable Development Goals
                            </a>
                            {' '}through meaningful events, partnerships, and awareness initiatives.
                        </BodyLarge>
                        <a
                            href="https://www.unac.org/mission-and-vision/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex lg:hidden gap-2 items-center rounded-lg hover:opacity-80 transition-opacity"
                        >
                            <span className="font-semibold text-base sm:text-lg text-primary tracking-tight leading-5 underline decoration-solid">
                                See Our Mission & Vision
                            </span>
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </a>
                    </div>
                </div>

                {/* Links Row - Horizontally Aligned (Desktop Only) */}
                <div className="hidden lg:flex lg:flex-row gap-24 items-start w-full">
                    <div className="flex-1">
                        <a
                            href="/about"
                            className="flex gap-2 items-center rounded-lg hover:opacity-80 transition-opacity"
                        >
                            <span className="font-semibold text-base sm:text-lg text-primary tracking-tight leading-5 underline decoration-solid">
                                Learn More About Us
                            </span>
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </a>
                    </div>

                    <div className="flex-1">
                        <a
                            href="https://www.unac.org/mission-and-vision/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center rounded-lg hover:opacity-80 transition-opacity"
                        >
                            <span className="font-semibold text-base sm:text-lg text-primary tracking-tight leading-5 underline decoration-solid">
                                See Our Mission & Vision
                            </span>
                            <ArrowRight className="w-5 h-5 text-primary" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
