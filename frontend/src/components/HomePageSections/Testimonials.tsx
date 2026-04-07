import { useRef, useState, type FocusEvent, type TouchEvent } from 'react'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/content/testimonials'
import { Body, BodyLarge, H2 } from '@/components/ui/Typographies'

function getDesktopQuoteSizeClasses(quote: string, testimonialId: number) {
    if (testimonialId === 1) {
        return 'md:text-[1.85rem] md:leading-[2.35rem] md:max-w-[94%]'
    }

    if (testimonialId === 2) {
        return 'md:text-lg md:leading-relaxed'
    }

    const length = quote.length

    if (length > 1200) {
        return 'md:text-base md:leading-relaxed'
    }

    if (length > 850) {
        return 'md:text-lg md:leading-relaxed'
    }

    if (length > 600) {
        return 'md:text-xl md:leading-8'
    }

    return 'md:text-2xl md:leading-9'
}

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [animationKey, setAnimationKey] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isFocusWithin, setIsFocusWithin] = useState(false)
    const touchStartRef = useRef<{ x: number; y: number } | null>(null)

    const isPaused = isHovered || isFocusWithin
    const hasMultipleTestimonials = TESTIMONIALS.length > 1
    const activeMobileTestimonial =
        TESTIMONIALS[activeTestimonial] ?? TESTIMONIALS[0]

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

    const goToNextTestimonial = () => {
        if (!hasMultipleTestimonials) {
            return
        }
        setActiveTestimonial((current) => (current + 1) % TESTIMONIALS.length)
        setAnimationKey((prev) => prev + 1)
    }

    const goToPreviousTestimonial = () => {
        if (!hasMultipleTestimonials) {
            return
        }
        setActiveTestimonial(
            (current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        )
        setAnimationKey((prev) => prev + 1)
    }

    const handleProgressAnimationEnd = () => {
        if (!hasMultipleTestimonials) {
            return
        }
        goToNextTestimonial()
    }

    const handleMobileTouchStart = (event: TouchEvent<HTMLElement>) => {
        if (!hasMultipleTestimonials) {
            return
        }

        const touch = event.touches[0]
        touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleMobileTouchEnd = (event: TouchEvent<HTMLElement>) => {
        if (!hasMultipleTestimonials || !touchStartRef.current) {
            return
        }

        const touch = event.changedTouches[0]
        const deltaX = touch.clientX - touchStartRef.current.x
        const deltaY = touch.clientY - touchStartRef.current.y
        touchStartRef.current = null

        if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) {
            return
        }

        if (deltaX < 0) {
            goToNextTestimonial()
            return
        }

        goToPreviousTestimonial()
    }

    const handleMobileTouchCancel = () => {
        touchStartRef.current = null
    }

    return (
        <section
            id="testimonials"
            className="bg-[var(--color-primary-blue-9)] w-full flex flex-col items-center px-5 md:px-16 lg:px-32 py-10 md:py-14 lg:py-16"
        >
            <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
                {/* Header */}
                <div className="flex flex-col gap-3 items-center text-center">
                    <H2 className="text-[var(--color-neutral-0)]">
                        Community Voices
                    </H2>
                </div>

                {/* Testimonial Cards */}
                <div className="flex flex-col gap-6 w-full">
                    <div className="md:hidden w-full">
                        {activeMobileTestimonial && (
                            <figure
                                key={`mobile-${activeMobileTestimonial.id}`}
                                className="bg-[var(--color-neutral-0)] rounded-2xl shadow-sm px-4 py-4 flex flex-col gap-2.5"
                                onTouchStart={handleMobileTouchStart}
                                onTouchEnd={handleMobileTouchEnd}
                                onTouchCancel={handleMobileTouchCancel}
                            >
                                <Quote
                                    className="w-6 h-6 text-[var(--color-primary-blue-7)] shrink-0 self-start rotate-180"
                                    aria-hidden="true"
                                />

                                <blockquote aria-live="polite" className="pr-1">
                                    <BodyLarge className="text-base leading-relaxed text-[var(--color-neutral-9)] italic whitespace-pre-line">
                                        {activeMobileTestimonial.quote}
                                    </BodyLarge>
                                </blockquote>
                                <Quote
                                    className="w-6 h-6 text-[var(--color-primary-blue-7)] shrink-0 self-end"
                                    aria-hidden="true"
                                />
                                <figcaption className="flex flex-col gap-1 border-t border-[var(--color-neutral-3)] pt-2.5">
                                    <Body className="font-semibold text-[var(--color-primary-blue-10)]">
                                        {activeMobileTestimonial.name}
                                    </Body>
                                    <Body className="text-[var(--color-neutral-7)]">
                                        {activeMobileTestimonial.role}
                                    </Body>
                                    {activeMobileTestimonial.detail && (
                                        <Body className="text-[var(--color-neutral-5)] text-sm">
                                            {activeMobileTestimonial.detail}
                                        </Body>
                                    )}
                                </figcaption>
                            </figure>
                        )}

                        {hasMultipleTestimonials && (
                            <div className="mt-4 flex items-center justify-center gap-2">
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <button
                                        key={`mobile-dot-${testimonial.id}`}
                                        onClick={() => handleTestimonialSelect(index)}
                                        className={`h-1.5 w-7 rounded-full transition-colors duration-300 ${
                                            index === activeTestimonial
                                                ? 'bg-[var(--color-neutral-0)]'
                                                : 'bg-[#B7B7B7]/74'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                        aria-current={
                                            index === activeTestimonial
                                                ? 'true'
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div
                        className="hidden md:grid w-full [grid-template-areas:'stack']"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <figure
                                key={testimonial.id}
                                className={`[grid-area:stack] bg-[var(--color-neutral-0)] rounded-2xl shadow-sm px-5 py-5 flex flex-col gap-3 h-full transition-opacity duration-700 ${
                                    index === activeTestimonial
                                        ? 'opacity-100 z-10'
                                        : 'opacity-0 pointer-events-none select-none'
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
                                        className={`text-base leading-relaxed text-[var(--color-neutral-9)] italic whitespace-pre-line ${getDesktopQuoteSizeClasses(testimonial.quote, testimonial.id)}`}
                                    >
                                        {testimonial.quote}
                                    </BodyLarge>
                                </blockquote>
                                <Quote
                                    className="w-7 h-7 text-[var(--color-primary-blue-7)] shrink-0 self-end"
                                    aria-hidden="true"
                                />
                                <figcaption className="flex flex-col gap-1 border-t border-[var(--color-neutral-3)] pt-3">
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
                            className="relative hidden md:flex gap-2 h-1 items-center justify-center"
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
