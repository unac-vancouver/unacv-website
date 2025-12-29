import ArrowRight from '@/assets/arrow-right-blue-link.svg'
import { H2, BodyLarge } from '@/components/ui/Typographies'

export default function AboutSnapshot() {
    return (
        <section 
            id="about-snapshot" 
            className="bg-white w-full flex flex-col items-center px-[24px] md:px-[75px] lg:px-[150px] py-[40px] md:py-[60px] lg:py-[75px]"
        >
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px] items-start justify-center w-full">
                {/* Who We Are Column */}
                <div className="flex-1 flex flex-col gap-[20px] items-start justify-center w-full">
                    <div className="flex flex-col gap-[20px] items-start w-full flex-1">
                        <H2 className="text-[#0c193d] w-full">
                            Who We Are
                        </H2>
                        <BodyLarge className="text-[#2e2e2e] w-full">
                            UNAC Vancouver is a branch of the{' '}
                            <a 
                                href="https://unac.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#12265d] underline decoration-solid"
                            >
                                United Nations Association in Canada
                            </a>
                            , dedicated to advancing the UN's mission at the local level.
                        </BodyLarge>
                    </div>
                    <a 
                        href="/about" 
                        className="flex gap-[8px] items-center justify-center rounded-[8px] hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-[18px] text-[#162d6e] tracking-[-0.1504px] leading-[20px] underline decoration-solid">
                            Learn More About Us
                        </span>
                        <img src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
                    </a>
                </div>

                {/* What We Focus On Column */}
                <div className="flex-1 flex flex-col gap-[40px] items-start justify-center w-full">
                    <div className="flex flex-col gap-[20px] items-start w-full">
                        <H2 className="text-[#0c193d] w-full">
                            What We Focus On
                        </H2>
                        <BodyLarge className="text-[#2e2e2e] w-full">
                            We focus on community engagement, education, and advancing the{' '}
                            <a 
                                href="https://sdgs.un.org/goals" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#12265d] underline decoration-solid"
                            >
                                United Nations Sustainable Development Goals
                            </a>
                            {' '}through meaningful events, partnerships, and awareness initiatives.
                        </BodyLarge>
                    </div>
                    <a 
                        href="/mission" 
                        className="flex gap-[8px] items-center justify-center rounded-[8px] hover:opacity-80 transition-opacity"
                    >
                        <span className="font-bold text-[18px] text-[#162d6e] tracking-[-0.1504px] leading-[20px] underline decoration-solid">
                            See Our Mission & Vision
                        </span>
                        <img src={ArrowRight} alt="" className="w-[20px] h-[20px]" />
                    </a>
                </div>
            </div>
        </section>
    )
}
