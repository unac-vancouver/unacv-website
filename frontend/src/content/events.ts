import TGLLImage from '@/assets/HomePage/TGLL-2024-Group-Shot.webp'
import RichardSplaneImage from '@/assets/HomePage/Richard-Splane-Lecture-2025.jpg'
import SdgGoal3 from '@/assets/SDGGoals/SdgGoal3.webp'
import SdgGoal4 from '@/assets/SDGGoals/SdgGoal4.webp'
import SdgGoal11 from '@/assets/SDGGoals/SdgGoal11.webp'

export interface SiteEvent {
    id: number
    slug: string
    category: string
    title: string
    shortDescription?: string
    description: string
    date: string
    dateISO?: string
    time?: string
    location?: string
    image?: string
    sdgGoals?: string[]
    registrationLink?: string
    sourceUrl?: string
    featured?: boolean
    listInYearly?: boolean
}

export const EVENTS: SiteEvent[] = [
    {
        id: 1,
        slug: 'tgll',
        category: 'Education & Networking',
        title: 'Think Global, Link Local (TGLL)',
        shortDescription: 'Networking for graduates with NGOs and UN practitioners—keynotes and career-focused networking.',
        description: `Think Global, Link Local (TGLL) is an annual networking event organized by UNAC-Vancouver (in collaboration with KPU) bringing together recent graduates and socially active organizations to learn about careers and community engagement with an international focus. The event features keynote speakers, networking tables, and a follow-up coffee session with UNAC board members.`,
        date: 'March (annual)',
        time: '',
        location: 'Vancouver (various venues)',
        image: TGLLImage,
        sdgGoals: [SdgGoal4, SdgGoal11],
        registrationLink: 'https://unacvancouver.org/tgll/',
        sourceUrl: 'https://unacvancouver.org/tgll/',
        featured: true,
        listInYearly: true
    },
    {
        id: 2,
        slug: 'richard-splane-lecture',
        category: 'Lecture',
        title: 'Dr. Richard Splane Lecture',
        shortDescription: "Annual lecture on social policy and justice, framed by 'Leave No One Behind'.",
        description: `An annual lecture co-hosted with UBC that invites an expert speaker to discuss public policy issues through the lens of social justice and the Sustainable Development Goals. The lecture typically takes place in March and focuses on the theme 'Leave No One Behind'.`,
        date: 'March (annual)',
        time: '',
        location: 'UBC / Vancouver',
        image: RichardSplaneImage,
        sdgGoals: [SdgGoal11, SdgGoal4],
        registrationLink: 'https://unacvancouver.org/richard-splane-lecture/',
        sourceUrl: 'https://unacvancouver.org/richard-splane-lecture/',
        featured: true,
        listInYearly: true
    },
    {
        id: 3,
        slug: 'john-gibbard-award',
        category: 'Awards',
        title: 'John Gibbard Memorial Award',
        shortDescription: 'Annual award on UN Day honoring youth or groups for humanitarian commitment.',
        description: `Presented annually on United Nations Day (October 24) in recognition of youth or groups who demonstrate dedication to humanitarian work and building a better world. The award celebrates community contributions that align with UN values.`,
        date: 'October 24 (annual)',
        time: '',
        location: 'Vancouver',
        image: 'https://unacvancouver.org/wp-content/uploads/2021/02/John-Gibbard-award-George_Greg.jpg',
        sdgGoals: [SdgGoal4, SdgGoal11],
        registrationLink: 'https://unacvancouver.org/john-gibbard-award/',
        sourceUrl: 'https://unacvancouver.org/john-gibbard-award/',
        featured: false,
        listInYearly: true
    },
    {
        id: 4,
        slug: 'rosemary-brown-award',
        category: 'Awards',
        title: 'Rosemary Brown Award',
        shortDescription: "Award presented on International Day of Peace recognizing contributions to women's equality.",
        description: `Presented annually on the International Day of Peace (September 21), the Rosemary Brown Award honours individuals or organizations that advance women's equality and social justice in British Columbia. The award is partnered with several local organizations and includes an associated conference.`,
        date: 'September 21 (annual)',
        time: '',
        location: 'Vancouver',
        image: 'https://unacvancouver.org/wp-content/uploads/2021/02/dsc086111.jpeg',
        sdgGoals: [SdgGoal4, SdgGoal11],
        registrationLink: 'https://unacvancouver.org/unac-v-events/',
        sourceUrl: 'https://unacvancouver.org/unac-v-events/',
        featured: true,
        listInYearly: true
    },
    {
        id: 5,
        slug: 'renate-shearer-award',
        category: 'Awards',
        title: 'Renate Shearer Award',
        shortDescription: 'Award on Human Rights Day recognizing contributions to human rights locally and globally.',
        description: `Presented in celebration of International Human Rights Day (December 10), this award recognises individuals or groups that have made significant contributions to human rights locally and globally. Nominations are usually open in the months prior to the award.`,
        date: 'December 10 (annual)',
        time: '',
        location: 'Vancouver',
        image: 'https://unacvancouver.org/wp-content/uploads/2021/02/Reante-Shearer-award.jpeg',
        sdgGoals: [SdgGoal11, SdgGoal3],
        registrationLink: 'https://unacvancouver.org/renate-shearer-award/',
        sourceUrl: 'https://unacvancouver.org/renate-shearer-award/',
        featured: false,
        listInYearly: true
    }
]

export function getEventBySlug(slug: string) {
    return EVENTS.find(e => e.slug === slug || String(e.id) === slug)
}

export function getFeaturedEvents() {
    return EVENTS.filter(e => e.featured)
}

export function getYearlyEvents() {
    return EVENTS.filter(e => e.listInYearly)
}