import { X } from 'lucide-react';
import { H3, Body } from '@/components/ui/Typographies';
import { useEffect } from 'react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
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
            bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative
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

          {/* Content */}
          <div className="p-8 pb-6">
            {/* Header */}
            <H3 className="text-[var(--color-primary-blue-10)] mb-4">Volunteer Application</H3>
            
            {/* Loading Disclaimer */}
            <Body className="text-[var(--color-neutral-7)] mb-4 italic">
              Please wait a moment for the form to load. It may take a few seconds.
            </Body>

            {/* Privacy Policy Disclaimer */}
            <Body className="text-[var(--color-neutral-7)] mb-6 text-sm">
              By submitting this form, you agree to our{' '}
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-primary-blue-9)] hover:text-[var(--color-primary-blue-10)] underline"
              >
                Privacy Policy
              </a>.
            </Body>
            
            {/* Iframe Container */}
            <div className="w-full" style={{ height: 'calc(90vh - 180px)', minHeight: '500px' }}>
              <iframe
               src="https://forms.office.com/r/FBNxBCvnG5?embed=true"
                width="100%"
                height="100%"
                style={{ 
                  border: 'none',
                  borderRadius: '8px'
                }}
                title="Volunteer Application Form"
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
