import CanadaMap from '@/assets/AboutPage/canada_map.webp';
import { H2, BodyLarge } from '@/components/ui/Typographies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NationalAffiliations() {
    return (
        <section
            id="affiliations"
            className="relative w-full flex flex-col items-center py-14 md:py-24 px-6 md:px-20 lg:px-40"
        >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden bg-[#A7D9F7]" aria-hidden="true">
                <img
                    src={CanadaMap}
                    alt="Canada map background"
                    className="w-full h-full object-cover"
                
                /> 
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 w-full max-w-5xl">
                {/* Heading */}
                <H2 className="text-[var(--color-neutral-10)] font-bold">
                    Our National Affiliations
                </H2>

                {/* Paragraphs */}
                <div className="flex flex-col gap-4">
                    <BodyLarge className="text-[var(--color-neutral-10)] leading-relaxed">
                        UNAC Vancouver is a local chapter of the United Nations Association in Canada (UNAC), a national, volunteer-based charitable organization dedicated to advocating for and promoting the values and goals of the United Nations within Canada.
                    </BodyLarge>

                    <BodyLarge className="text-[var(--color-neutral-10)] leading-relaxed">
                        Though UNAC is not an official UN office, it is a founding member of the World Federation of United Nations Associations (WFUNA), established in 1946. UNAC -Vancouver contributes to this international network by promoting global awareness and advancing the work of the UN through education, recognition programs, partnerships, and fundraising efforts.
                    </BodyLarge>

                    <BodyLarge className="text-[var(--color-neutral-10)] leading-relaxed">
                        UNAC Vancouver is dedicated to informing, inspiring, and engaging the Metro Vancouver community in advancing the vital work of the United Nations.
                    </BodyLarge>
                </div>

                {/* Link */}
                <div className="mt-2">
                    <Link
                        to="https://unac.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--color-neutral-10)] font-medium hover:opacity-80 transition-opacity group"
                    >
                        <span className="underline decoration-1 underline-offset-4">Learn more about UNAC</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
