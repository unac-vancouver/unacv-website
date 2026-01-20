import AddPerson from '@/assets/HomePage/AddPerson.svg'
import HandHeart from '@/assets/HomePage/HandHeart.svg'
import MoneySignCircle from '@/assets/HomePage/MoneySignCircle.svg'
import { ArrowRight } from 'lucide-react';
import { Body, H2, BodyLarge, H4 } from '@/components/ui/Typographies';
import DonationModal from '@/components/ui/DonationModal';
import { useState } from 'react';

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
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Join our team and contribute your time and skills to support our events, programs, and community initiatives.',
    buttonText: 'Start Volunteering',
    buttonLink: '/get-involved#volunteer',
  },
  {
    id: 2,
    icon: MoneySignCircle,
    title: 'Donate',
    description: 'Your financial support enables us to expand our reach and create meaningful impact in our local community.',
    buttonText: 'Make a Donation',
    buttonLink: '/donate',
  },
  {
    id: 3,
    icon: AddPerson,
    title: 'Become a Member',
    description: "Join a network of passionate individuals committed to advancing the UN's mission and the Global Goals.",
    buttonText: 'Join as Member',
    buttonLink: '/get-involved#membership',
  },
];

export default function GetInvolved() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleCardClick = (buttonLink: string) => {
    if (buttonLink === '/donate') {
      setIsDonationModalOpen(true);
    } else {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className="bg-[var(--color-primary-blue-1)] px-6 md:px-20 py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
          <H2 className="text-center text-[var(--color-primary-blue-10)]">Get Involved</H2>
          <BodyLarge className="text-center text-[var(--color-neutral-9)] max-w-[663px]">
            Your support can strengthen our local impact. 
          </BodyLarge>
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
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={option.icon}
                    alt={option.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <H4 className='text-primary'>
                  {option.title}
                </H4>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-5">
                <Body >{option.description}</Body>

                {/* Button */}
                <button
                  onClick={() => handleCardClick(option.buttonLink)}
                  className="bg-[var(--color-primary-blue-9)] hover:bg-[var(--color-primary-blue-10)] transition-colors rounded-lg px-4 md:px-5 py-2.5 flex items-center justify-center gap-4 text-[var(--color-neutral-0)] text-base md:text-lg font-medium"
                >
                  <span>{option.buttonText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </section>
  );
}
