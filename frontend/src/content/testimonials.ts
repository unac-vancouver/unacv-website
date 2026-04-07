export interface Testimonial {
    id: number
    quote: string
    name: string
    role: string
    detail?: string
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        quote:
            "I am very grateful for the opportunity to attend the 2026 TGLL conference. At the event, I was able to speak with representatives from many different organisations. Through this experience, I was able to gain a better understanding of what a career in international relations can look like. As a winner of a coffee chat with Rosio Godomar, I learned what a career in the United Nations entailed through Ms. Godomar's personal experience.",
        name: 'Danielle Dillon',
        role: 'UBC Student & TGLL 2026 Participant',
        detail: 'Coffee chat winner with Rosio Godomar · March 21, 2026',
    },
    {
        id: 2,
        quote:
            'Based in Vancouver, Lauren brings extensive experience in Indigenous relations, public policy, and intergovernmental collaboration across the public sector.',
        name: 'Lauren Farmer',
        role: 'Co-President, UNAC-Vancouver',
        detail: 'Program Manager at CBC/Radio-Canada',
    },
    {
        id: 3,
        quote:
            'Sebastian is passionate about empowering resilient entrepreneurs operating in complex environments, helping them access growth opportunities that promote equitable and inclusive economic development.',
        name: 'Juan Sebastian Mateus',
        role: 'Co-Vice President, UNAC-Vancouver',
    },
]
