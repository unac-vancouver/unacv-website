import UNACVanLogo from '@/assets/unacvancouver-logo.png'
import AboutSeparator from '@/assets/AboutPage/about_separator.webp'
import { H2, BodyLarge } from '@/components/ui/Typographies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoWeAre() {

    return (
        <div>
            <section
                id="who-we-are"
                className="w-full flex flex-col items-center py-14 md:py-24 px-6 md:px-20 lg:px-40 bg-white"
            >
                {/* Content Container */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start w-full max-w-7xl">
                    {/* Logo Container */}
                    <div className="flex-shrink-0 w-full lg:w-auto">
                        <div className="w-full h-56 lg:w-64 lg:h-64 flex items-center justify-center bg-[#1E3A5F] rounded-xl p-8">
                            <img
                                src={UNACVanLogo}
                                alt="UNAC Vancouver Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 flex-1">
                        {/* Heading */}
                        <H2 className="text-black font-bold">
                            Who We Are
                        </H2>

                        {/* Paragraphs */}
                        <div className="flex flex-col gap-4">
                            <BodyLarge className="text-black leading-relaxed">
                                The Vancouver branch of the <span className="underline decoration-1 underline-offset-2">United Nations Association of Canada</span>, is dedicated to advocating for the values and goals of the United Nations at a local level.
                            </BodyLarge>

                            <BodyLarge className="text-black leading-relaxed">
                                Guided by the UN Sustainable Development Goals (SDGs), we host community events, programs, and partnerships that foster dialogue and action on critical issues such as poverty, gender inequalities, human rights, cross-cultural understanding, environmental degradation, and threats to peace and security.
                            </BodyLarge>
                        </div>

                        {/* Links Container */}
                        <div className="flex flex-row gap-4 sm:gap-8 mt-2">
                            <Link
                                to="/resources"
                                className="inline-flex items-center gap-2 text-black font-medium hover:opacity-80 transition-opacity group"
                            >
                                <span className="underline decoration-1 underline-offset-4">Explore resources</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/events"
                                className="inline-flex items-center gap-2 text-black font-medium hover:opacity-80 transition-opacity group"
                            >
                                <span className="underline decoration-1 underline-offset-4">View upcoming events</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Separator */}
            <div className='w-full h-48 sm:h-60 relative py-8' aria-hidden="true">
                <img className="absolute inset-0 w-full h-full object-center object-cover" src={AboutSeparator} alt="separator image" />
            </div>
        </div>
    )
}
