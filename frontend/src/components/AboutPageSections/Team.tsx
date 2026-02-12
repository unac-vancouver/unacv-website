import { useState } from 'react';
import { H4, Body } from '@/components/ui/Typographies';
import TeamMemberCard from './TeamMemberCard';
import type { TeamMember } from './TeamMemberCard';
import TeamMemberModal from './TeamMemberModal';
import { boardMembers, advisoryMembers } from '@/content/teamMembers';

export default function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMemberSelect = (member: TeamMember) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay clearing the member to allow animation to complete
        setTimeout(() => setSelectedMember(null), 300);
    };

    return (
        <>
            <section
                id="team"
                className="w-full flex flex-col items-center py-14 md:py-24 px-6 md:px-20 lg:px-40 bg-white"
            >
                <div className="flex flex-col gap-16 w-full max-w-7xl">
                    {/* Board of Directors Section */}
                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-24 lg:gap-40">
                            <H4 className="text-[var(--color-neutral-10)] font-semibold whitespace-nowrap">
                                Board of Directors
                            </H4>
                            <Body className="text-[var(--color-neutral-10)] leading-relaxed">
                                UNAC-Vancouver is led and guided by a dedicated team of volunteers that oversee and implement activities, and manage branch operations. The volunteer Board of Directors is elected annually by branch members at an Annual General Meeting in May and serves for a one-year term per the UNAC-Vancouver bylaws.
                            </Body>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                            {boardMembers.map((member) => (
                                <TeamMemberCard 
                                    key={member.id} 
                                    member={member}
                                    onSelect={handleMemberSelect}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Advisory Council Section */}
                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-24 lg:gap-40">
                            <H4 className="text-[var(--color-neutral-10)] font-semibold whitespace-nowrap">
                                Advisory Council
                            </H4>
                            <Body className="text-[var(--color-neutral-10)] leading-relaxed">
                                UNAC-Vancouver Advisory Council members are non-voting members of the Board and are also appointed at the Annual General Meeting.
                            </Body>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                            {advisoryMembers.map((member) => (
                                <TeamMemberCard 
                                    key={member.id} 
                                    member={member}
                                    onSelect={handleMemberSelect}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Member Modal */}
            <TeamMemberModal
                member={selectedMember}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
