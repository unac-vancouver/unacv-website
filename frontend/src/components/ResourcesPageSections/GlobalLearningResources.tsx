import { H2, H3, Body } from '@/components/ui/Typographies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import UnResourcesImg from '@/assets/ResourcesPage/un-resources.webp';
import SdgGoalsImg from '@/assets/ResourcesPage/sdg-goals.webp';
import EducationalToolkitsImg from '@/assets/ResourcesPage/educational-toolkits.webp';

const RESOURCES = [
    {
        title: 'UN Official Resources',
        description: 'Access official publications, reports, and educational materials from the United Nations.',
        image: UnResourcesImg,
        link: 'https://www.un.org/en/library',
        bgColor: '#4d65a7'
    },
    {
        title: 'Sustainable Development Goals',
        description: 'Explore in-depth information about the 17 Global Goals and how to take action.',
        image: SdgGoalsImg,
        link: 'https://sdgs.un.org/goals',
        bgColor: '#7693e4'
    },
    {
        title: 'Educational Toolkits',
        description: 'Discover teaching resources, lesson plans, and learning guides for all ages.',
        image: EducationalToolkitsImg,
        link: 'https://unevoc.unesco.org/home/fwd2Toolkits+for+TVET+providers',
        bgColor: '#617cc6'
    }
];

export default function GlobalLearningResources() {
    return (
        <section
            id="global-learning-resources"
            className="bg-gradient-to-b from-[#e9eefb] to-[#dce4f8] w-full flex flex-col items-center py-12 md:py-16 px-6 md:px-12 lg:px-28"
        >
            {/* Header */}
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl mb-12 md:mb-16">
                <div className="flex flex-col items-center gap-3">
                    <H2 className="text-[#0f1f4c] text-center text-2xl md:text-3xl lg:text-4xl">
                        Global Learning Resources
                    </H2>
                    <div className="h-[3px] w-full max-w-md rounded-full bg-gradient-to-r from-[#7693e4] to-[#4d65a7]" />
                </div>
                <Body className="text-[#404040] text-center text-lg md:text-xl max-w-2xl">
                    Start with trusted global sources to deepen your understanding of the UN and its mission.
                </Body>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mb-8">
                {RESOURCES.map((resource, index) => (
                    <Link
                        key={index}
                        to={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.1),0px_2px_3px_-2px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        {/* Image Container */}
                        <div
                            className="h-28 w-full overflow-hidden flex items-center justify-center"
                            style={{ backgroundColor: resource.bgColor }}
                        >
                            <img
                                src={resource.image}
                                alt={resource.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-4 p-6 flex-1">
                            <H3 className="text-[#0f1f4c] text-xl font-medium">
                                {resource.title}
                            </H3>
                            <Body className="text-[#5a5a5a] text-base leading-snug flex-1">
                                {resource.description}
                            </Body>
                            <div className="flex items-center gap-2 text-[#4d65a7] text-sm font-normal">
                                <span>Learn more</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bottom Link */}
            <Link
                to="https://www.un.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4d65a7] hover:opacity-80 transition-opacity"
            >
                <span className="text-[15px] font-normal">Explore All Global Resources</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        </section>
    );
}
