import { X } from 'lucide-react';
import { Body, H3 } from '@/components/ui/Typographies';
import { CTAButton } from '@/components/ui/cta-button';
import DonationExampleImage from '@/assets/donation-example.png';
import { useEffect } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  // Close modal on escape key press and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop with blur */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-50
          transition-all duration-400
          ${isOpen 
            ? 'backdrop-blur-md bg-black/40' 
            : 'backdrop-blur-none bg-black/0 pointer-events-none'
          }
        `}
        style={{
          WebkitBackdropFilter: isOpen ? 'blur(12px)' : 'blur(0px)',
        }}
      />

      {/* Modal Container */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-50 flex items-center justify-center p-4
          transition-opacity duration-200
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative
            transition-all duration-400
            ${isOpen 
              ? 'scale-100 opacity-100' 
              : 'scale-[0.85] opacity-0'
            }
          `}
          style={{
            transitionTimingFunction: isOpen 
              ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
              : 'cubic-bezier(0.4, 0, 1, 1)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 p-2 rounded-full z-10
              bg-[var(--color-neutral-3)] hover:bg-[var(--color-neutral-4)]
              transition-all duration-200 ease-out
              hover:scale-110 active:scale-95
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue-7)]
            "
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[var(--color-neutral-10)]" />
          </button>

          {/* Content - Two Column Layout on Desktop */}
          <div className="p-8 flex flex-col lg:flex-row gap-6">
            {/* Left Side - Image (Desktop) */}
            <div className="lg:w-2/5 flex-shrink-0">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-[var(--color-primary-blue-10)]">
                  Example: How to leave a comment
                </h4>
                <div className="border border-[var(--color-neutral-3)] rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={DonationExampleImage} 
                    alt="Example showing how to leave a comment for UNAC-Vancouver branch donation"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-3/5 space-y-5">
              {/* Header */}
              <H3 className="text-[var(--color-primary-blue-10)]">How to Donate</H3>
              
              {/* Introduction */}
              <Body className="text-[var(--color-neutral-8)]">
                Thank you for considering a donation to UNAC-Vancouver! Your support helps us advance the UN's mission and the Sustainable Development Goals in our local community.
              </Body>

              {/* Instructions */}
              <div className="space-y-3">
                
                <ol className="space-y-2 list-decimal list-inside text-base">
                  <li className="text-[var(--color-neutral-8)]">
                    <span className="font-medium">Open the donation link</span> by clicking the button below
                  </li>
                  <li className="text-[var(--color-neutral-8)]">
                    <span className="font-medium">Choose an amount and type</span> (one-time donation or monthly contribution)
                  </li>
                  <li className="text-[var(--color-neutral-8)]">
                    <span className="font-medium">Fill out your personal and financial information</span>
                  </li>
                  <li className="text-[var(--color-neutral-8)]">
                    <span className="font-medium">Important:</span> If you want to direct your donation to the UNAC-Vancouver branch, please leave a comment stating{' '}
                    <span className="italic font-medium">"Donation for the UNAC-Vancouver branch"</span> in the comment section
                  </li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.unac.org/?form=DonateNow&utm_campaign=navigation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <CTAButton
                    variant="solid"
                    size="lg"
                    className="w-full p-4"
                  >
                    Go to Donation Page
                  </CTAButton>
                </a>
                
                <button
                  onClick={onClose}
                  className="flex-1"
                >
                  <CTAButton
                    variant="ghost"
                    size="lg"
                    className="w-full p-4"
                    showArrow={false}
                  >
                    Close
                  </CTAButton>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
