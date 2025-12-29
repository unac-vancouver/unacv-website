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
    <section className="bg-[var(--color-primary-blue-1)] px-[24px] md:px-[75px] py-[60px] md:py-[80px]">
      <div className="max-w-[1290px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] mb-[40px] md:mb-[50px]">
          <H2 className="text-center text-[var(--color-primary-blue-10)]">Get Involved</H2>
          <Body className="text-center text-[var(--color-neutral-9)] max-w-[663px]">
            Your time and support help us strengthen our local impact.
          </Body>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-[24px] md:gap-[30px]">
          {INVOLVEMENT_OPTIONS.map((option) => (
            <div
              key={option.id}
              className="bg-[var(--color-neutral-0)] border border-[var(--color-primary-blue-05)] rounded-[10px] p-[20px] flex flex-col gap-[10px]"
            >
              {/* Card Header */}
              <div className="flex items-center gap-[10px]">
                <div className="w-[45px] h-[45px] flex items-center justify-center">
                  <img
                    src={option.icon}
                    alt={option.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-medium text-[var(--color-primary-blue-10)] leading-[16px]">
                  {option.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-[21px]">
                <Body className="text-[var(--color-neutral-9)] text-[14px] md:text-[16px]">{option.description}</Body>

                {/* Button */}
                <a
                  href={option.buttonLink}
                  className="bg-[var(--color-primary-blue-8)] hover:bg-[var(--color-primary-blue-9)] transition-colors rounded-[8px] px-[16px] md:px-[20px] py-[10px] flex items-center justify-center gap-[16px] text-[var(--color-neutral-0)] text-[16px] md:text-[18px] font-medium"
                >
                  <span>{option.buttonText}</span>
                  <img
                    src={ArrowRightWhite}
                    alt=""
                    className="w-[18px] h-[18px]"
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
