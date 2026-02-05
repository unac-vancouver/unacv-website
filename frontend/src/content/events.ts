import TGLLImage from '@/assets/EventsPages/TGLL/TGLL-2024.jpg'
import TGLL1 from '@/assets/EventsPages/TGLL/TGLL1.webp'
import TGLL2 from '@/assets/EventsPages/TGLL/TGLL2.webp'
import TGLL3 from '@/assets/EventsPages/TGLL/TGLL3.webp'
import TGLL4 from '@/assets/EventsPages/TGLL/TGLL4.webp'
import TGLL5 from '@/assets/EventsPages/TGLL/TGLL5.webp'
import TGLL6 from '@/assets/EventsPages/TGLL/TGLL6.webp'

import RenateShearer1 from '@/assets/EventsPages/Renate-Shearer/renate-shearer1.png'
import RenateShearer2 from '@/assets/EventsPages/Renate-Shearer/renate-shearer2.png'
import RenateShearer3 from '@/assets/EventsPages/Renate-Shearer/renate-shearer3.png'

import JohnGibbord1 from '@/assets/EventsPages/John-Gibbard/john-gibbard1.webp'
import JohnGibbord2 from '@/assets/EventsPages/John-Gibbard/john-gibbard2.webp'
import JohnGibbord3 from '@/assets/EventsPages/John-Gibbard/john-gibbard3.webp'
import JohnGibbord4 from '@/assets/EventsPages/John-Gibbard/john-gibbard4.webp'
import JohnGibbord5 from '@/assets/EventsPages/John-Gibbard/john-gibbard5.webp'
import JohnGibbord6 from '@/assets/EventsPages/John-Gibbard/john-gibbard6.webp'

import RichardSplaneImage from '@/assets/HomePage/Richard-Splane-Lecture-2025.jpg'
import SdgGoal4 from '@/assets/SDGGoals/E-WEB-Goal-04.png'
import SdgGoal5 from '@/assets/SDGGoals/E-WEB-Goal-05.png'
import SdgGoal10 from '@/assets/SDGGoals/E-WEB-Goal-10.png'
import SdgGoal16 from '@/assets/SDGGoals/E-WEB-Goal-16.png'
import SdgGoal17 from '@/assets/SDGGoals/E-WEB-Goal-17.png'

export interface SiteEvent {
    id: number
    slug: string
    category: string
    title: string
    shortDescription?: string
    description: string
    longDescription?: string
    date: string
    dateISO?: string
    time?: string
    location?: string
    venue?: string
    image?: string
    gallery?: string[]
    sdgGoals?: string[]
    registrationLink?: string
    sourceUrl?: string
    featured?: boolean
    listInYearly?: boolean
    promotionalMessage?: string
    keynoteSpeaker?: string
    pastKeynotes?: string[]
    partners?: string[]
    sponsors?: string[]
    pastRecipients?: string[]
    pastEvents?: Array<{
        year: number
        title: string
        recordingUrl?: string
    }>
    socialMedia?: {
        facebook?: string
        instagram?: string
        twitter?: string
        website?: string
    }
}

export const EVENTS: SiteEvent[] = [
    {
        id: 1,
        slug: 'tgll',
        category: 'Networking Event',
        title: 'Think Global, Link Local (TGLL)',
        shortDescription: 'Join us for the Annual Think Global, Link Local event fostering connections among students, non-profits, and civil society groups.',
        description: `Join us for the Annual Think Global, Link Local (TGLL) event, where we foster links among BC undergraduate and graduate students, non-profit organizations, and local civil society groups with a global reach. This is your opportunity to engage with like-minded individuals, discover new perspectives, and build valuable relationships both internationally and in Canada.`,
        longDescription: `This award event is proudly presented by the United Nations Association in Canada – Vancouver (UNAC‑Vancouver Branch) in collaboration with Kwantlen Polytechnic University (KPU).

Join us for the Annual Think Global, Link Local (TGLL) event, where we foster links among BC undergraduate and graduate students, non-profit organizations, and local civil society groups with a global reach. This inspiring event connects young people with professionals in Canadian and international public‑service fields — including the UN, humanitarian aid, human rights, refugee support, and more. Get ready to connect, learn, and be inspired! This is your opportunity to engage with like-minded individuals, discover new perspectives, and build valuable relationships both internationally and in Canada.

Think Global, Link Local has been recognized by UNESCO's IFIP (International Forum of Inclusion Practitioners) with a Global Inclusion Award in 2024. Since its inception in 2013, TGLL has grown into a key networking platform, bringing together up to 130 recent graduates from colleges and universities across Metro Vancouver to engage with up to 15 Canadian non-profit organizations focused on Canadian and international social impact initiatives. Each year, we feature keynote speakers who are prominent social activists, adding even more depth and insight to this inspiring event.

Join us to discover new perspectives, build valuable connections, and explore innovative ideas with like‑minded individuals from across Metro Vancouver and the Lower Mainland!`,
        date: 'March 6, 2026',
        dateISO: '2026-03-06',
        time: '8:00 AM - 12:00 PM',
        location: 'Vancouver, BC',
        venue: 'Holiday Inn Vancouver – Centre (Broadway), 711 W Broadway, Vancouver BC',
        image: TGLLImage,
        sdgGoals: [SdgGoal4, SdgGoal5, SdgGoal10, SdgGoal17],
        registrationLink: 'https://www.eventbrite.ca/e/1977544906048?aff=oddtdtcreator',
        sourceUrl: 'https://unacvancouver.org/tgll/',
        featured: true,
        listInYearly: true,
        promotionalMessage: 'Join us at TGLL to discover new perspectives, build valuable connections, and explore innovative ideas!',
        keynoteSpeaker: 'Jessie Sunner - BC Minister of Post-Secondary Education and Future Skills | Human Rights Lawyer',
        pastKeynotes: ['Bob Rae', 'Dr. Tara Cookson (2024)', 'Leilani Farha (2025)'],
        partners: ['Kwantlen Polytechnic University (KPU)'],
        socialMedia: {

            website: 'https://www.global2local.ca'
        },
        gallery: [TGLL1, TGLL2, TGLL3, TGLL4, TGLL5, TGLL6]
    },
    {
        id: 2,
        slug: 'richard-splane-lecture',
        category: 'Social Policy',
        title: 'Dr. Richard B. Splane Lecture',
        shortDescription: 'Annual UBC School of Social Work and UNAC Vancouver lecture highlighting pressing social policy issues.',
        description: `Each year, the Dr. Richard Splane Lecture is held at the University of British Columbia's Vancouver Campus as a joint collaboration between the UBC School of Social Work and the United Nations Association in Canada – Vancouver Branch. The lecture honours the memory of Richard Splane, a leader in Canadian social policy.`,
        longDescription: `Each year, the Dr. Richard Splane Lecture is held at the University of British Columbia's Vancouver Campus as a joint collaboration between the UBC School of Social Work and the United Nations Association in Canada – Vancouver Branch. The lecture honours the memory of Richard Splane, a leader in Canadian social policy.

Richard Splane was a Professor Emeritus of the University of British Columbia, beginning his academic career at McMaster University, pursuing studies in economics, history and social work at the University of Toronto and social administration at the London School of Economics.

In the Second World War, he served in the Royal Canadian Air Force as a pilot in the Bomber Command. After the war, he joined the Department of National Health and Welfare as an Economist and became Executive Assistant to the Deputy Minister. He was in‐turn Director‐General of Welfare Assistance and Services; Director of Unemployment Assistance; and, Assistant Deputy Minister of Social Allowances and Services. He is regarded as the "principal architect" of the Canada Assistance Plan.

Dr. Splane's special interest was international welfare. He served as Canada's representative on the UNICEF Board and was a member of the United Nations' Expert Group on Social Welfare Policy and Planning. In 1973, he was recruited by the University of British Columbia, as a Professor in the School of Social Work, where he served until his retirement in 1982.

He is author of three books, Social welfare in Ontario, 1791‐1893; a study of public welfare administration (1965), 75 years of community service to Canada: Canadian Council on Social Development, 1920‐1995 (1996), and George Davidson: social policy and public policy exemplar (2003), and contributed numerous chapters and articles to professional journals and the press. He also collaborated with his wife, Dr. Verna Huffman Splane on a nursing research project in 55 countries.

In his community, he served with the University of British Columbia, the University Hill United Church and the United Way of Vancouver, Friends of SOS Children's Villages, as well as the Vancouver chapters of both the World Federalists and the United Nations Association.`,
        date: 'January 22, 2026',
        dateISO: '2026-01-22',
        time: '5:00 PM PT',
        location: 'Vancouver, BC',
        venue: 'Jack Bell Building, Room 125, The University of British Columbia’s Vancouver Campus',
        image: RichardSplaneImage,
        sdgGoals: [SdgGoal5, SdgGoal10, SdgGoal16],
        sourceUrl: 'https://unacvancouver.org/richard-splane-lecture/',
        featured: true,
        listInYearly: true,
        partners: ['University of British Columbia (UBC) School of Social Work'],
        pastEvents: [
            {
                year: 2025,
                title: "Donald Trump's Trade War: What Will it Mean for Canada's Economy? And Canadian Society?",
                recordingUrl: 'https://socialwork.ubc.ca/events/event/2025-dr-richard-b-splane-lecture-in-social-policy/'
            },
            {
                year: 2024,
                title: "British Columbia's Toxic Drug Crisis: Advice from the Coroners Service to Stop the Dying",
                recordingUrl: 'https://socialwork.ubc.ca/events/event/2024-dr-richard-b-splane-lecture-in-social-policy/'
            },
            {
                year: 2023,
                title: 'Reparations in Social Work: A Progressive Model for Change',
                recordingUrl: 'https://socialwork.ubc.ca/events/event/2023-dr-richard-b-splane-lecture-in-social-policy/'
            }
        ]
    },
    {
        id: 3,
        slug: 'john-gibbard-award',
        category: 'Youth Leadership',
        title: 'John Gibbard Memorial Award',
        shortDescription: 'Annual UN Day youth award honouring Metro Vancouver leaders advancing peace, justice, human rights and the UN SDGs.',
        description: `Presented annually in connection with United Nations Day (October 24), this award recognizes young people in Metro Vancouver who are working to build a more just, peaceful and sustainable world. The event celebrates youth who embody global citizenship and service to humanity.`,
        longDescription: `The John Gibbard Memorial Award Ceremony is an annual event held in connection with United Nations Day to recognize young people in Metro Vancouver who are working to build a more just, peaceful and sustainable world. The event is jointly organized by the United Nations Association in Canada – Vancouver Branch (UNAC-Vancouver) and the Unitarian Church of Vancouver.

The award honours the memory of John Gibbard, an early supporter of the League of Nations and later a strong advocate for the United Nations Association in Canada. His lifelong commitment to international cooperation and youth engagement is reflected in the purpose of the award, which celebrates youth who embody global citizenship and service to humanity.

Each year, the ceremony highlights one young person or a small group (up to age 25) whose actions advance the values of peace, human rights, social and economic justice, environmental responsibility and cross‑cultural understanding, often through initiatives connected to the UN's 17 Sustainable Development Goals. The program typically includes a brief introduction to UN Day and the SDGs, reflections from UNAC‑Vancouver and Unitarian Church representatives, presentation of the award, and remarks from the recipient.

By featuring the stories and achievements of local youth, the event aims to inspire others to engage with global issues in their schools, communities and workplaces, and to strengthen public awareness of the continuing relevance of the United Nations and its Charter.

Note: The Sustainable Development Goals listed for this event are indicative only and will ultimately reflect the focus of the recipient’s own initiative. Rather than “SDGs addressed” or “contributions to SDGs”, I suggest we describe how the award recipient’s work helps to raise awareness of, and inspire action on, particular SDG themes. I think our role is primarily to highlight and promote the efforts of youth who are advocating for change, not to claim direct progress or formal contributions toward SDG implementation or achievement.`,
        date: 'October 24 (annual)',
        dateISO: '2026-10-24',
        time: 'TBD',
        location: 'Vancouver, BC',
        venue: 'Unitarian Church of Vancouver - 949 West 49th Avenue, Vancouver, BC',
        image: JohnGibbord5,
        sdgGoals: [SdgGoal16],
        sourceUrl: 'https://unacvancouver.org/john-gibbard-award/',
        featured: true,
        listInYearly: true,
        promotionalMessage: 'Honouring UN Day by celebrating outstanding Metro Vancouver youth working for peace and a better world.',
        partners: ['Unitarian Church of Vancouver'],
        gallery: [JohnGibbord1, JohnGibbord2, JohnGibbord3, JohnGibbord4, JohnGibbord5, JohnGibbord6],
    },
    {
        id: 4,
        slug: 'renate-shearer-award',
        category: 'Human Rights Award',
        title: 'Renate Shearer Award',
        shortDescription: 'The Renate Shearer Award celebrates individuals and organizations making meaningful contributions to human rights locally and globally.',
        description: `Presented in celebration of International Human Rights Day (December 10), this award recognizes individuals or groups that have made significant contributions to human rights locally and globally through community work, advocacy, education, or leadership.`,
        longDescription: `The Renate Shearer Award celebrates individuals and organizations in British Columbia who embody the principles of human rights, equality, and dignity that defined the life and legacy of Renate Shearer; a tireless human rights advocate who dedicated her life to advancing justice for all.

Since 1988, this award has recognized those making meaningful contributions to human rights locally and globally, whether through community work, advocacy, education, or leadership.

Nominate someone who inspires change!

If you know a person or organization committed to promoting or protecting human rights, this is your opportunity to help shine a light on their impact.

2025 Theme: Rights of Seniors
In 2025, UNAC-V highlighted the Rights of Seniors as our theme, in recognition of the ongoing UN Decade of Healthy Ageing (2021–2030).`,
        date: 'December 10 (annual)',
        dateISO: '2025-12-10',
        time: '6:00 PM - 8:00 PM',
        location: 'Vancouver, BC',
        venue: 'ISSofBC, 2610 Victoria Dr, Vancouver',
        image: 'https://unacvancouver.org/wp-content/uploads/2021/02/Reante-Shearer-award.jpeg',
        sdgGoals: [SdgGoal5, SdgGoal10, SdgGoal16, SdgGoal17],
        sourceUrl: 'https://unacvancouver.org/renate-shearer-award/',
        featured: false,
        listInYearly: true,
        partners: ['British Columbia Council for International Cooperation (BCCIC)'],
        gallery: [RenateShearer1, RenateShearer2, RenateShearer3],
        pastRecipients: ['2025: 411 Seniors Centre Society']
    }
]

export function getEventBySlug(slug: string) {
    return EVENTS.find(e => e.slug === slug || String(e.id) === slug)
}

export function getFeaturedEvents() {
    return EVENTS.filter(e => e.featured)
}

export function getUpcomingEvents() {
    const now = new Date()
    const upcomingEvents = EVENTS
        .filter(e => e.dateISO && new Date(e.dateISO) >= now)
        .sort((a, b) => new Date(a.dateISO!).getTime() - new Date(b.dateISO!).getTime())
    
    // If we have 3 or more upcoming events, return the first 3
    if (upcomingEvents.length >= 3) {
        return upcomingEvents.slice(0, 3)
    }
    
    // If we have fewer than 3 upcoming events, backfill with all events
    const allEventsSorted = [...EVENTS]
        .filter(e => e.dateISO)
        .sort((a, b) => new Date(b.dateISO!).getTime() - new Date(a.dateISO!).getTime())
    
    // Create a set of upcoming event IDs to avoid duplicates
    const upcomingIds = new Set(upcomingEvents.map(e => e.id))
    
    // Add events until we have 3
    const result = [...upcomingEvents]
    for (const event of allEventsSorted) {
        if (!upcomingIds.has(event.id) && result.length < 3) {
            result.push(event)
        }
        if (result.length >= 3) break
    }
    
    return result
}

export function getYearlyEvents() {
    return EVENTS.filter(e => e.listInYearly)
}