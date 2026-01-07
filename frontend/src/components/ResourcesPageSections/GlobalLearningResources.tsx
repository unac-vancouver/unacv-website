import { H2, H3, Body } from '@/components/ui/Typographies';
import { ArrowRight } from 'lucide-react';
import UnResourcesImg from '@/assets/ResourcesPage/un-resources.webp';
import SdgGoalsImg from '@/assets/ResourcesPage/sdg-goals.webp';
import EducationalToolkitsImg from '@/assets/ResourcesPage/educational-toolkits.webp';

const RESOURCES = [
    {
        title: 'UN Official Resources',
        description: 'Access official publications, reports, and educational materials from the United Nations.',
        image: UnResourcesImg,
        link: 'https://www.un.org/en/library',
        bgColor: 'var(--color-primary-blue-7)'
    },
    {
        title: 'Sustainable Development Goals',
        description: 'Explore in-depth information about the 17 Global Goals and how to take action.',
        image: SdgGoalsImg,
        link: 'https://sdgs.un.org/goals',
        bgColor: 'var(--color-primary-blue-5)'
    },
    {
        title: 'Educational Toolkits',
        description: 'Discover teaching resources, lesson plans, and learning guides for all ages.',
        image: EducationalToolkitsImg,
        link: 'https://unevoc.unesco.org/home/fwd2Toolkits+for+TVET+providers',
        bgColor: 'var(--color-primary-blue-6)'
    }
];

export default function GlobalLearningResources() {
    return (
        <section
            id="global-learning-resources"
            className="bg-gradient-to-b from-[var(--color-primary-blue-05)] to-[var(--color-primary-blue-1)] w-full flex flex-col items-center py-12 md:py-16 px-6 md:px-12 lg:px-28"
        >
            {/* Header */}
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl mb-12 md:mb-16">
                <div className="flex flex-col items-center gap-3">
                    <H2 className="text-[var(--color-primary-blue-10)] text-center text-2xl md:text-3xl lg:text-4xl">
                        Global Learning Resources
                    </H2>
                </div>
                <Body className="text-[var(--color-neutral-8)] text-center text-lg md:text-xl max-w-2xl">
                    Start with trusted global sources to deepen your understanding of the UN and its mission.
                </Body>
            </div>

            {/* Resource Cards Grid */}
            <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 w-full max-w-7xl mb-8">
                {RESOURCES.map((resource, index) => (
                    <a
                        key={index}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-1 lg:max-w-[300px]"
                    >
                        {/* Image Container */}
                        <div
                            className="h-[192px] lg:h-[120px] w-full flex items-center justify-center overflow-hidden"
                            style={{ backgroundColor: resource.bgColor }}
                        >
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-3 lg:gap-4 p-6 lg:p-[27px] lg:min-h-[168px]">
                            <H3 className="text-[var(--color-primary-blue-10)] text-lg lg:text-xl font-medium leading-tight">
                                {resource.title}
                            </H3>
                            <Body className="text-[var(--color-neutral-7)] text-base leading-normal lg:leading-snug">
                                {resource.description}
                            </Body>
                            <div className="flex items-center gap-2 text-[var(--color-primary-blue-7)] text-base lg:text-[13.5px] font-medium lg:font-normal mt-auto">
                                <span>Learn more</span>
                                <ArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Bottom Link */}
            <a
                href="https://www.un.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-primary-blue-9)] underline decoration-solid leading-5 tracking-tight hover:opacity-80 transition-opacity"
            >
                <span className="text-base font-normal">Explore All Global Resources</span>
                <ArrowRight className="w-4 h-4" />
            </a>
        </section>
    );
}
