import { useState } from 'react';
import { Body, BodySmall } from '@/components/ui/Typographies';

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
    email?: string;
    linkedin?: string;
    isActive?: boolean;
}

interface TeamMemberCardProps {
    member: TeamMember;
    onSelect: (member: TeamMember) => void;
}

export default function TeamMemberCard({ member, onSelect }: TeamMemberCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={() => onSelect(member)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col gap-3 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue-7)] focus-visible:ring-offset-2 rounded-lg"
        >
            <div 
                className={`
                    w-full aspect-square rounded-lg overflow-hidden relative
                    transition-all duration-300 ease-out
                    ${member.isActive ? 'ring-4 ring-[var(--color-primary-blue-7)]' : ''}
                    ${isHovered ? 'shadow-xl' : 'shadow-md'}
                `}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className={`
                        w-full h-full object-cover 
                        transition-transform duration-500 ease-out
                        ${isHovered ? 'scale-110' : 'scale-100'}
                    `}
                />
                {/* Hover overlay */}
                <div 
                    className={`
                        absolute inset-0 bg-[var(--color-primary-blue-10)] 
                        transition-opacity duration-300 ease-out
                        ${isHovered ? 'opacity-10' : 'opacity-0'}
                    `}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Body className={`
                    font-semibold text-[var(--color-neutral-10)]
                    transition-colors duration-200
                    ${isHovered ? 'text-[var(--color-primary-blue-8)]' : ''}
                `}>
                    {member.name}
                </Body>
                <BodySmall className="text-[var(--color-neutral-7)]">
                    {member.role}
                </BodySmall>
            </div>
        </button>
    );
}
