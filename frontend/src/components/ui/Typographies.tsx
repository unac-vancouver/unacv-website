import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

// Hero / Display - For large hero sections
export function Display({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-roboto font-bold text-foreground",
        "text-4xl leading-tight tracking-tight", // Mobile
        "md:text-5xl md:leading-tight", // Tablet
        "lg:text-6xl lg:leading-[1.1]", // Desktop
        "xl:text-7xl xl:leading-[1.1]", // Large displays
        className
      )}
    >
      {children}
    </h1>
  )
}

// H1 - Main page heading
export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-roboto font-bold text-foreground",
        "text-3xl leading-tight tracking-tight", // Mobile
        "md:text-4xl md:leading-tight", // Tablet
        "lg:text-5xl lg:leading-snug", // Desktop
        className
      )}
    >
      {children}
    </h1>
  )
}

// H2 - Section headings
export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-roboto font-bold text-foreground",
        "text-2xl leading-snug tracking-tight", // Mobile
        "md:text-3xl md:leading-snug", // Tablet
        "lg:text-4xl lg:leading-normal", // Desktop
        className
      )}
    >
      {children}
    </h2>
  )
}

// H3 - Subsection headings
export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-roboto font-semibold text-foreground",
        "text-xl leading-normal tracking-normal", // Mobile
        "md:text-2xl md:leading-normal", // Tablet
        "lg:text-3xl lg:leading-relaxed", // Desktop
        className
      )}
    >
      {children}
    </h3>
  )
}

// H4 - Card titles
export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "font-roboto font-semibold text-foreground",
        "text-lg leading-normal tracking-normal", // Mobile
        "md:text-xl md:leading-normal", // Tablet
        "lg:text-2xl lg:leading-relaxed", // Desktop
        className
      )}
    >
      {children}
    </h4>
  )
}

// Body Large - Intro paragraphs, lead text
export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-roboto font-normal text-foreground",
        "text-base leading-relaxed tracking-normal", // Mobile
        "md:text-lg md:leading-relaxed", // Tablet
        className
      )}
    >
      {children}
    </p>
  )
}

// Body - Standard paragraphs
export function Body({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-roboto font-normal text-foreground",
        "text-sm leading-relaxed tracking-normal", // Mobile
        "md:text-base md:leading-relaxed", // Tablet
        className
      )}
    >
      {children}
    </p>
  )
}

// Body Small - Secondary text, captions
export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-roboto font-normal text-muted-foreground",
        "text-xs leading-normal tracking-normal", // Mobile
        "md:text-sm md:leading-normal", // Tablet
        "lg:text-base lg:leading-normal", // Desktop
        className
      )}
    >
      {children}
    </p>
  )
}

// Label - Form labels, tags
export function Label({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-roboto font-medium text-foreground",
        "text-sm leading-tight tracking-wide uppercase", // Mobile
        "md:text-sm md:leading-tight", // Tablet
        "lg:text-base lg:leading-tight", // Desktop
        className
      )}
    >
      {children}
    </span>
  )
}

// Quote - Pull quotes, testimonials
export function Quote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        "font-roboto font-normal italic text-foreground border-l-4 border-primary pl-6",
        "text-lg leading-relaxed tracking-normal", // Mobile
        "md:text-xl md:leading-relaxed", // Tablet
        "lg:text-2xl lg:leading-loose", // Desktop (43.2px line-height for emphasis)
        "max-w-prose",
        className
      )}
    >
      {children}
    </blockquote>
  )
}