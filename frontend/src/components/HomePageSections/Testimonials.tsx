import { useState, type FocusEvent } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/content/testimonials'
import { Body, BodyLarge, H2 } from '@/components/ui/Typographies'

function getQuoteSizeClasses(quote: string, testimonialId: number) {
    if (testimonialId === 1) {
        return 'text-xl md:text-[1.9rem] leading-relaxed md:leading-[2.4rem] md:max-w-[94%]'
    }

    if (testimonialId === 2) {
        return 'text-base md:text-lg leading-relaxed'
    }

    const length = quote.length

    if (length > 1200) {
        return 'text-sm md:text-base leading-relaxed'
    }

    if (length > 850) {
        return 'text-base md:text-lg leading-relaxed'
    }

    if (length > 600) {
        return 'text-lg md:text-xl leading-relaxed md:leading-8'
    }

    return 'text-xl md:text-2xl leading-relaxed md:leading-9'
}

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [animationKey, setAnimationKey] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isFocusWithin, setIsFocusWithin] = useState(false)

    const isPaused = isHovered || isFocusWithin
    const hasMultipleTestimonials = TESTIMONIALS.length > 1

    const handleBlurCapture = (event: FocusEvent<HTMLElement>) => {
        const nextFocusTarget = event.relatedTarget as Node | null
        if (
            !nextFocusTarget ||
            !event.currentTarget.contains(nextFocusTarget)
        ) {
            setIsFocusWithin(false)
        }
    }

    const handleTestimonialSelect = (index: number) => {
        if (index === activeTestimonial) {
            return
        }
        setActiveTestimonial(index)
        setAnimationKey((prev) => prev + 1)
    }

    const handleProgressAnimationEnd = () => {
        if (!hasMultipleTestimonials) {
            return
        }
        setActiveTestimonial((current) => (current + 1) % TESTIMONIALS.length)
        setAnimationKey((prev) => prev + 1)
    }

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
                    <div
                        className="grid w-full [grid-template-areas:'stack']"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <figure
                                key={testimonial.id}
                                className={`[grid-area:stack] bg-[var(--color-neutral-0)] rounded-2xl shadow-sm px-5 md:px-7 py-5 md:py-7 flex-col gap-4 h-full transition-opacity duration-700 ${
                                    index === activeTestimonial
                                        ? 'flex opacity-100 z-10'
                                        : 'hidden md:flex md:opacity-0 md:pointer-events-none md:select-none'
                                }`}
                                aria-hidden={index !== activeTestimonial}
                            >
                                <Quote
                                    className="w-7 h-7 text-[var(--color-primary-blue-7)] shrink-0 self-start rotate-180"
                                    aria-hidden="true"
                                />

                                <blockquote
                                    aria-live={
                                        index === activeTestimonial
                                            ? 'polite'
                                            : undefined
                                    }
                                >
                                    <BodyLarge
                                        className={`text-[var(--color-neutral-9)] italic whitespace-pre-line ${getQuoteSizeClasses(testimonial.quote, testimonial.id)}`}
                                    >
                                        {testimonial.quote}
                                    </BodyLarge>
                                </blockquote>
                                <Quote
                                    className="w-7 h-7 text-[var(--color-primary-blue-7)] shrink-0 self-end"
                                    aria-hidden="true"
                                />
                                <figcaption className="mt-auto flex flex-col gap-1 border-t border-[var(--color-neutral-3)] pt-4">
                                    <Body className="font-semibold text-[var(--color-primary-blue-10)]">
                                        {testimonial.name}
                                    </Body>
                                    <Body className="text-[var(--color-neutral-7)]">
                                        {testimonial.role}
                                    </Body>
                                    {testimonial.detail && (
                                        <Body className="text-[var(--color-neutral-5)] text-sm">
                                            {testimonial.detail}
                                        </Body>
                                    )}
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    {hasMultipleTestimonials && (
                        <div
                            className="relative flex gap-2 h-1 items-center justify-center"
                            onFocusCapture={() => setIsFocusWithin(true)}
                            onBlurCapture={handleBlurCapture}
                        >
                            {TESTIMONIALS.map((testimonial, index) => (
                                <button
                                    key={testimonial.id}
                                    onClick={() => handleTestimonialSelect(index)}
                                    className={`h-full w-8 sm:w-10 transition-colors duration-300 cursor-pointer relative overflow-hidden ${
                                        index === activeTestimonial
                                            ? 'bg-white/30'
                                            : 'bg-[#B7B7B7]/74 hover:bg-[#B7B7B7]/90'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    aria-current={
                                        index === activeTestimonial
                                            ? 'true'
                                            : undefined
                                    }
                                >
                                    {index === activeTestimonial && (
                                        <div
                                            key={animationKey}
                                            className={`absolute inset-0 bg-white h-full w-0 animate-[fillBar_6s_linear_forwards] ${
                                                isPaused
                                                    ? '[animation-play-state:paused]'
                                                    : ''
                                            }`}
                                            onAnimationEnd={
                                                handleProgressAnimationEnd
                                            }
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
