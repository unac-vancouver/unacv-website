import HeartHandIcon from '@/assets/heart-hand-icon.svg';
import DonateIcon from '@/assets/donate-icon.webp';
import UserPlusIcon from '@/assets/user-plus-icon.svg';
import ArrowRightWhite from '@/assets/arrow-right-white.svg';
import { H2 } from '@/components/ui/Typographies';
import { Body } from '@/components/ui/Typographies';

interface InvolvementCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const INVOLVEMENT_OPTIONS: InvolvementCard[] = [
  {
    id: 1,
    icon: HeartHandIcon,
    title: 'Volunteer',
    description: 'Join our team and contribute your time and skills to support our events, programs, and community initiatives.',
    buttonText: 'Start Volunteering',
    buttonLink: '/volunteer',
  },
  {
    id: 2,
    icon: DonateIcon,
    title: 'Donate',
    description: 'Your financial support enables us to expand our reach and create meaningful impact in our local community.',
    buttonText: 'Make a Donation',
    buttonLink: '/donate',
  },
  {
    id: 3,
    icon: UserPlusIcon,
    title: 'Become a Member',
    description: "Join a network of passionate individuals committed to advancing the UN's mission and the Global Goals.",
    buttonText: 'Join as Member',
    buttonLink: '/membership',
  },
];

export default function GetInvolved() {
  return (
    <section className="bg-[var(--color-primary-blue-1)] px-6 md:px-20 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
          <H2 className="text-center text-[var(--color-primary-blue-10)]">Get Involved</H2>
          <Body className="text-center text-[var(--color-neutral-9)] max-w-[663px]">
            Your time and support help us strengthen our local impact.
          </Body>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
          {INVOLVEMENT_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="bg-[var(--color-neutral-0)] border border-[var(--color-primary-blue-05)] rounded-xl p-5 flex flex-col gap-2.5"
            >
              {/* Card Header */}
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 flex items-center justify-center">
                  <img
                    src={option.icon}
                    alt={option.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-[var(--color-primary-blue-10)] leading-tight">
                  {option.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-5">
                <Body className="text-[var(--color-neutral-9)] text-[14px] md:text-[16px]">{option.description}</Body>

                {/* Button */}
                <a
                  href={option.buttonLink}
                  className="bg-[var(--color-primary-blue-8)] hover:bg-[var(--color-primary-blue-9)] transition-colors rounded-lg px-4 md:px-5 py-2.5 flex items-center justify-center gap-4 text-[var(--color-neutral-0)] text-base md:text-lg font-medium"
                >
                  <span>{option.buttonText}</span>
                  <img
                    src={ArrowRightWhite}
                    alt=""
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
