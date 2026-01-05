import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { H2 } from '@/components/ui/Typographies';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  relatedLinks?: { text: string; url: string, external?: boolean }[];
}

const faqData: FAQItem[] = [

  {
    question: 'Can you help me contact the United Nations directly?',
    answer:
      'Local UNAC branches cannot forward messages to UN Headquarters, but you can contact the United Nations directly through their official website.',
    relatedLinks: [
      { text: 'UN Official Website', url: 'https://www.un.org', external: true },
    ],
  },
  {
    question: 'Can a UNAC Vancouver representative speak at my event?',
    answer:
      'Yes — we consider speaking requests for community, school, and youth events. Please submit details through our contact form.',

  },
  {
    question:
      'Do you offer internships, student roles, or volunteer opportunities for youth?',
    answer:
     'Yes — students are encouraged to apply for volunteer roles through our Volunteer page or attend our events to get involved. We welcome passionate individuals who want to support our events and community initiatives. UNAC Vancouver does not offer paid internship opportunities.',
    relatedLinks: [
      { text: 'Get Involved', url: '/get-involved' },
      { text: 'Upcoming Events', url: '/events' },
    ],
},
  {
    question: 'How do I become a member of UNAC Vancouver?',
    answer:
   'You can join as a member through our Become a Member page where you will be asked to make a donation and direct it to the local branch.  The minimum donation is $3 CAD. Membership helps grow our impact and connect like-minded people. Your support helps us run local programs and awareness initiatives.',
    relatedLinks: [
      { text: 'Become a Member', url: '/get-involved' },
      { text: 'About Us', url: '/about' },
    ],
 },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 px-6 md:px-20 lg:px-40 bg-[#183668]">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <H2 className="text-4xl font-semibold text-center mb-12 text-white">
          Frequently Asked Questions
        </H2>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/20 last:border-b-0"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group hover:opacity-80 transition-opacity"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl text-white font-normal">
                    {faq.question}
                  </h3>
                </div>
              </button>

              {/* Answer - Animated Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 pb-6'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-10 pr-4 space-y-4">
                  <p className="text-white/90 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                  
                  {/* Related Links */}
                  {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {faq.relatedLinks.map((link, linkIndex) => (
                        link.external ? (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target='_blank'
                          rel="noopener noreferrer"
                          className="text-sm text-white/80 hover:text-white underline transition-colors"
                        >
                          {link.text}
                        </a> 
                        ) : (
                          <Link
                            key={linkIndex}
                            to={link.url}
                            className="text-sm text-white/80 hover:text-white underline transition-colors"
                          >
                            {link.text}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
