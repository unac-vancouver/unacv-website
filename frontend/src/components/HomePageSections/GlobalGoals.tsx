import Goal3 from '@/assets/sdgGoal3.jpg'
import Goal4 from '@/assets/sdgGoal4.jpg'
import Goal11 from '@/assets/sdgGoal11.jpg'
import Goal17 from '@/assets/sdgGoal17.jpg'
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
            className="bg-[#12265d] w-full flex flex-col gap-[50px] items-center p-[24px] md:p-[50px] lg:p-[75px]"
        >
            {/* Header Text */}
            <div className="flex flex-col items-center w-full max-w-[624px]">
                <BodyLarge className="text-white text-center">
                    Our work aligns with the United Nations' 17 Sustainable Development Goals — a blueprint for peace and prosperity for people and the planet, now and into the future.
                </BodyLarge>
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[36px] items-stretch justify-center w-full max-w-[1100px]">
                {GOALS.map((goal) => (
                    <div 
                        key={goal.number}
                        className="bg-[#f6f8fd] flex flex-col gap-[8px] md:gap-[12px] items-start p-[12px] md:p-[20px] rounded-[10px]"
                    >
                        <div className="w-full aspect-square rounded-[5px] overflow-hidden">
                            <img 
                                src={goal.image} 
                                alt={`SDG Goal ${goal.number}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-[2px] items-center w-full">
                            <BodySmall className="text-[#0f1f4c] text-center">
                                Goal {goal.number}
                            </BodySmall>
                            <H4 className="text-[#0f1f4c] text-center">
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
                className="flex gap-[8px] items-center justify-center rounded-[8px] hover:opacity-80 transition-opacity"
            >
                <span className="font-bold text-[18px] text-white tracking-[-0.1504px] leading-[20px] underline decoration-solid">
                    Explore the Global Goals
                </span>
                <img src={ArrowRightWhite} alt="" className="w-[20px] h-[20px]" />
            </a>
        </section>
    )
}
