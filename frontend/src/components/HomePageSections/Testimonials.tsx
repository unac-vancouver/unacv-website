import { Quote } from 'lucide-react'
import { Body, BodyLarge, H2 } from '@/components/ui/Typographies'

interface Testimonial {
    quote: string
    name: string
    role: string
    detail?: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        quote:
            "I am very grateful for the opportunity to attend the 2026 TGLL conference. At the event, I was able to speak with representatives from many different organisations. Through this experience, I was able to gain a better understanding of what a career in international relations can look like. As a winner of a coffee chat with Rosio Godomar, I learned what a career in the United Nations entailed through Ms. Godomar's personal experience.",
        name: 'Danielle Dillon',
        role: 'UBC Student & TGLL 2026 Participant',
        detail: 'Coffee chat winner with Rosio Godomar · March 21, 2026',
    },
]

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-[var(--color-primary-blue-9)] w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-12 md:py-16 lg:py-20"
        >
            <div className="flex flex-col gap-10 items-center w-full max-w-4xl">
                {/* Header */}
                <div className="flex flex-col gap-3 items-center text-center">
                    <H2 className="text-[var(--color-neutral-0)]">
                        Community Voices
                    </H2>
                </div>

                {/* Testimonial Cards */}
                <div className="flex flex-col gap-8 w-full">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={i}
                            className="bg-[var(--color-neutral-0)] rounded-2xl shadow-sm px-8 py-8 flex flex-col gap-5"
                        >
                            <Quote
                                className="w-8 h-8 text-[var(--color-primary-blue-7)] shrink-0 self-start rotate-180"
                                aria-hidden="true"
                            />

                            <blockquote>
                                <BodyLarge className="text-[var(--color-neutral-9)] italic">
                                    {t.quote}
                                </BodyLarge>
                            </blockquote>
                            <Quote
                                className="w-8 h-8 text-[var(--color-primary-blue-7)] shrink-0 self-end"
                                aria-hidden="true"
                            />
                            <figcaption className="flex flex-col gap-1 border-t border-[var(--color-neutral-3)] pt-4">
                                <Body className="font-semibold text-[var(--color-primary-blue-10)]">
                                    {t.name}
                                </Body>
                                <Body className="text-[var(--color-neutral-7)]">{t.role}</Body>
                                {t.detail && (
                                    <Body className="text-[var(--color-neutral-5)] text-sm">
                                        {t.detail}
                                    </Body>
                                )}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
