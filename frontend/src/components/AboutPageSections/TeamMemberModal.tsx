import { useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { FaLinkedin as Linkedin} from 'react-icons/fa';
import { H3, Body, BodyLarge } from '@/components/ui/Typographies';
import type { TeamMember } from './TeamMemberCard';

interface TeamMemberModalProps {
    member: TeamMember | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!member) return null;

    return (
        <>
            {/* Backdrop with blur */}
            <div
                onClick={onClose}
                className={`
                    fixed inset-0 z-50
                    transition-all duration-400
                    ${isOpen 
                        ? 'backdrop-blur-md bg-black/40' 
                        : 'backdrop-blur-none bg-black/0 pointer-events-none'
                    }
                `}
                style={{
                    WebkitBackdropFilter: isOpen ? 'blur(12px)' : 'blur(0px)',
                }}
            />

            {/* Modal Container */}
            <div
                onClick={onClose}
                className={`
                    fixed inset-0 z-50 flex items-center justify-center p-4
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative
                        transition-all duration-400
                        ${isOpen 
                            ? 'scale-100 opacity-100' 
                            : 'scale-[0.85] opacity-0'
                        }
                    `}
                    style={{
                        transitionTimingFunction: isOpen 
                            ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
                            : 'cubic-bezier(0.4, 0, 1, 1)',
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="
                            absolute top-4 right-4 p-2 rounded-full 
                            bg-[var(--color-neutral-3)] hover:bg-[var(--color-neutral-4)]
                            transition-all duration-200 ease-out
                            hover:scale-110 active:scale-95
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue-7)]
                        "
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 text-[var(--color-neutral-10)]" />
                    </button>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 flex flex-col gap-4">
                            {/* Name and Role */}
                            <div className="flex flex-col gap-2">
                                <H3 className="text-[var(--color-neutral-10)] font-bold">
                                    {member.name}
                                </H3>
                                <Body className="text-[var(--color-primary-blue-8)] font-semibold">
                                    {member.role}
                                </Body>
                            </div>

                            {/* Bio */}
                            {member.bio && (
                                <BodyLarge className="text-[var(--color-neutral-10)] leading-relaxed">
                                    {member.bio}
                                </BodyLarge>
                            )}

                            {/* Contact Links */}
                            {(member.email || member.linkedin) && (
                                <div className="flex flex-col gap-3 mt-2">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="
                                                inline-flex items-center gap-2 text-[var(--color-primary-blue-8)] 
                                                hover:text-[var(--color-primary-blue-10)] 
                                                transition-colors duration-200
                                                group
                                            "
                                        >
                                            <Mail className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                                            <span className="font-medium">{member.email}</span>
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex items-center gap-2 text-[var(--color-primary-blue-8)] 
                                                hover:text-[var(--color-primary-blue-10)] 
                                                transition-colors duration-200
                                                group
                                            "
                                        >
                                            <Linkedin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                                            <span className="font-medium">LinkedIn Profile</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
