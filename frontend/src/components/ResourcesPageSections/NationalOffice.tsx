import { H2, Body } from '@/components/ui/Typographies';
import { ArrowRight, Users, MapPin } from 'lucide-react';
import UnBuildingImg from '@/assets/ResourcesPage/un-building.webp';

export default function NationalOffice() {
    return (
        <section
            id="national-office"
            className="bg-white w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 py-12 md:py-16 px-6 md:px-12 lg:px-28"
        >
            {/* Left Content */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2 max-w-xl">
                {/* Header */}
                <div className="flex flex-col gap-3">
                    <H2 className="text-[var(--color-primary-blue-10)] text-2xl md:text-3xl lg:text-4xl">
                        Our National Office
                    </H2>
                    <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-[var(--color-primary-blue-5)] to-[var(--color-primary-blue-7)]" />
                </div>

                {/* Description */}
                <Body className="text-[var(--color-neutral-8)] text-[15px] leading-relaxed">
                    The United Nations Association in Canada is a historic civil society organization that educates and engages Canadians on the work of the United Nations and global issues that affect us all. There are over 12,000 members and{' '}
                    <a
                        href="https://www.unac.org/branches/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-neutral-8)] underline hover:opacity-80 transition-opacity"
                    >
                        13 branches
                    </a>
                    {' '}of UNAC across the country.
                </Body>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Members Card */}
                    <div className="bg-[var(--color-primary-blue-05)] border-l-[3px] border-[var(--color-primary-blue-7)] rounded-lg p-5 flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                            <Users className="w-5 h-5 text-[var(--color-primary-blue-7)]" />
                            <span className="text-[var(--color-primary-blue-10)] text-[25px] font-normal leading-tight">
                                12,000+
                            </span>
                        </div>
                        <span className="text-[var(--color-neutral-7)] text-[13.5px]">
                            Members
                        </span>
                    </div>

                    {/* Branches Card */}
                    <div className="bg-[var(--color-primary-blue-05)] border-l-[3px] border-[var(--color-primary-blue-5)] rounded-lg p-5 flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                            <MapPin className="w-5 h-5 text-[var(--color-primary-blue-5)]" />
                            <span className="text-[var(--color-primary-blue-10)] text-[25px] font-normal leading-tight">
                                13
                            </span>
                        </div>
                        <span className="text-[var(--color-neutral-7)] text-[13.5px]">
                            Branches
                        </span>
                    </div>
                </div>

                <a
                    href="https://www.unac.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-primary-blue-7)] hover:bg-[var(--color-primary-blue-7)]/90 text-white rounded-lg py-2.5 px-5 flex items-center gap-2 text-[13.5px] w-fit transition-colors"
                >
                    <span>About Our National Office</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 max-w-xl">
                <div className="rounded-xl overflow-hidden shadow-[0px_17px_21px_-4px_rgba(0,0,0,0.1),0px_7px_8px_-5px_rgba(0,0,0,0.1)]">
                    <img
                        src={UnBuildingImg}
                        alt="United Nations headquarters building"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
