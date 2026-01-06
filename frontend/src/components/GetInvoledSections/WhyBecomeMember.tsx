import { H2, Body } from '@/components/ui/Typographies'
import Globe from '@/assets/GetInvolved/Globe.svg'
import Cash from '@/assets/GetInvolved/Cash.svg'
import Group from '@/assets/GetInvolved/Group.svg'
import HandGift from '@/assets/GetInvolved/HandGift.svg'
import Newspaper from '@/assets/GetInvolved/Newspaper.svg'

interface BenefitCard {
  id: number
  icon: string
  iconName: string
  title: string
}

const MEMBERSHIP_BENEFITS: BenefitCard[] = [
  {
    id: 1,
    iconName: 'Globe',
    icon: Globe,
    title: 'A place to learn about issues being discussed by the UN',
  },
  {
    id: 2,
    iconName: 'HandGift',
    icon: HandGift,
    title: 'Volunteer opportunities at networking events',
  },
  {
    id: 3,
    iconName: 'Globe',
    icon: Globe,
    title: "Connect with UNAC-V's IDDIP, Green Corps, etc.",
  },
  {
    id: 4,
    iconName: 'Group',
    icon: Group,
    title: 'Ability to connect with like-minded people',
  },
  {
    id: 5,
    iconName: 'Newspaper',
    icon: Newspaper,
    title: 'News from our members (Ex. Editorials on our website)',
  },
  {
    id: 6,
    iconName: 'Cash',
    icon: Cash,
    title: 'Member and non-member prices for events',
  },
]

export default function WhyBecomeMember() {
  return (
    <>
      {/* Volunteer anchor */}
      <div id="volunteer" />
      <section className="bg-primary px-6 md:px-20 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <H2 className="text-[var(--color-neutral-0)]">Why Become a Member</H2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {MEMBERSHIP_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[var(--color-neutral-0)] rounded-xl p-6 md:p-7 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt={benefit.iconName + ' icon'}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 pt-1">
                <Body className="text-black font-semibold leading-relaxed">
                  {benefit.title}
                </Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
