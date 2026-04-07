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
            'I am a post-graduate student in Green Business Management and Sustainability at Kwantlen Polytechnic University (KPU). I learned about Think Global Link Local 2026 through KPU. I was the TGLL 2026 coffee-chat winner with George Somerwill of UNAC-Vancouver. His reflections on teamwork and global engagement were insightful and encouraging. His willingness to share his experience and offer guidance made me feel supported, and his words renewed my confidence in the possibilities ahead as I navigate my professional reintegration in Canada.\n\nI really appreciate that UNAC Vancouver provides meaningful networking opportunities through the Think Global Link Local event, both during and after the program. By bringing together individuals with diverse international backgrounds, organizations that do important humanitarian work, and leaders willing to share their experiences, the event fosters valuable network connections for participants. In particular, the one-on-one coffee meetings offer an excellent setting to build these relationships.',
        name: 'Thais Torres Pires',
        role: 'KPU Student & UNAC-Vancouver Think Global Link Local 2026 Participant',
        detail: 'TGLL 2026 coffee-chat winner with George Somerwill',
    },
]
