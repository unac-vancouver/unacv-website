import Goal3 from '@/assets/SDGGoals/SdgGoal3.webp'
import Goal4 from '@/assets/SDGGoals/SdgGoal4.webp'
import Goal11 from '@/assets/SDGGoals/SdgGoal11.webp'
import Goal17 from '@/assets/SDGGoals/SdgGoal17.webp'
import ArrowRightWhite from '@/assets/arrow-right-white.svg'
import { BodyLarge, BodySmall, H4 } from '@/components/ui/Typographies'

const GOALS = [
    {
        number: 3,
        title: 'Good Health & Well-Being',
        image: Goal3
    },
    {
        number: 4,
        title: 'Quality Education',
        image: Goal4
    },
    {
        number: 11,
        title: 'Sustainable Cities & Communities',
        image: Goal11
    },
    {
        number: 17,
        title: 'Partnerships for the Goals',
        image: Goal17
    }
];

export default function GlobalGoals() {
    return (
        <section 
            id="global-goals" 
            className="bg-[var(--color-primary-blue-9)] w-full flex flex-col gap-12 items-center p-6 md:p-12 lg:p-20"
        >
            {/* Header Text */}
            <div className="flex flex-col items-center w-full max-w-[624px]">
                <BodyLarge className="text-[var(--color-neutral-0)] text-center">
                    Our work aligns with the United Nations' 17 Sustainable Development Goals — a blueprint for peace and prosperity for people and the planet, now and into the future.
                </BodyLarge>
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-9 items-stretch justify-center w-full max-w-screen-xl">
                {GOALS.map((goal) => (
                    <div 
                        key={goal.number}
                        className="bg-[var(--color-primary-blue-05)] flex flex-col gap-2 md:gap-3 items-start p-3 md:p-5 rounded-xl"
                    >
                        <div className="w-full aspect-square rounded-md overflow-hidden">
                            <img 
                                src={goal.image} 
                                alt={`SDG Goal ${goal.number}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-0.5 items-center w-full">
                            <BodySmall className="text-[var(--color-primary-blue-10)] text-center">
                                Goal {goal.number}
                            </BodySmall>
                            <H4 className="text-[var(--color-primary-blue-10)] text-center">
                                {goal.title}
                            </H4>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Link */}
            <a 
                href="https://sdgs.un.org/goals" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center rounded-lg hover:opacity-80 transition-opacity"
            >
                <span className="font-bold text-lg text-[var(--color-neutral-0)] tracking-tight leading-5 underline decoration-solid">
                    Explore the Global Goals
                </span>
                <img src={ArrowRightWhite} alt="" className="w-5 h-5" />
            </a>
        </section>
    )
}
