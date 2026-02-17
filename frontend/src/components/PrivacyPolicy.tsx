import { H1, H2, H3 } from '@/components/ui/Typographies';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative w-full pt-12 px-6 md:px-20 lg:px-40">
                <div className="max-w-4xl mx-auto">
                    <H1 className="text-primary text-left">
                        Privacy Policy
                    </H1>
                    <p className="text-gray-700 text-left text-lg md:text-xl max-w-4xl mx-auto">
                        Last Revised: Feb 16, 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-6 md:px-20 lg:px-40">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    
                    {/* Discreet Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    
                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UNAC-Vancouver is committed to protecting the privacy of the personal information of its volunteers, members, supporters, donors and stakeholders. The organization values the trust of these individuals and of the public, and recognizes that maintaining this trust requires transparency and accountability in how information is shared within the organization.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            During the course of various projects and activities, UNAC-Vancouver gathers and uses personal information. Individuals from whom personal information is collected should expect that it will be carefully protected and that any use of this information is subject to consent.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This policy is designed to assist you in understanding how UNAC-Vancouver collects, uses and safeguards your personal information and to assist you in making informed decisions about providing personal information to UNAC-Vancouver or using its website.
                        </p>
                    </div>

                    {/* Defining Personal Information */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Defining Personal Information</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Personal information is a form of information that can be used to distinguish, identify or contact a specific individual. This information can include an individual's opinions or beliefs, as well as facts about, or related to, the individual. Exceptions of what is not considered personal information are business contact information and certain publicly available information, including names, addresses and telephone numbers as published in telephone directories.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Information in the public domain is not subject to privacy legislation and as such is not included in this policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) defines personal information as any information about a specific, identifiable individual, such as name, address, or phone number, but not including the name, title, business address or business phone number of an employee of an organization.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The personal information that we may collect, use and disclose—with your express or implied consent:
                        </p>
                        <ul className="list-disc pl-8 text-gray-700 leading-relaxed mb-4">
                            <li>Name, address, phone number</li>
                            <li>E-mail address</li>
                            <li>Resumes</li>
                            <li>Information related to chequing or credit card accounts</li>
                            <li>Information about professional employment</li>
                        </ul>
                    </div>

                    {/* How Do We Collect Personal Information */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">How Do We Collect Personal Information?</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UNAC-Vancouver does not directly store personal information such as credit card information. All such information is handled by third parties or the United Nations Association in Canada (UNAC) head office for activities such as donations and membership management.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver may hold personal information in our records only when individuals provide explicit consent to do so, such as when subscribing to our mailing list or volunteering for our programs.
                        </p>
                    </div>

                    {/* Consent */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Consent</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Personal information gathered is kept in strict confidence. When we do hold information with consent, some executive members have authorized access to personal information based on their need to deal with the information for the reason(s) for which it was obtained. Safeguards are in place to ensure that the information is not disclosed nor shared more widely than is necessary to achieve the purpose for which it was gathered.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UNAC-Vancouver collects, uses and discloses personal information only for purposes that a reasonable person would consider appropriate under the circumstances. Stakeholders are routinely offered the opportunity not to have their information shared for purposes beyond those for which it was collected.
                        </p>
                    </div>

                    {/* Protection of Personal Information */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Protection of Personal Information</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UNAC-Vancouver endeavours to protect your personal information from loss or theft, as well as unauthorized access, use or disclosure, regardless of the format in which such personal information is stored. When we do hold information with consent, we implement technical measures appropriate to the sensitivity level of the information in our efforts to protect the personal information under our control.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            With respect to donations and payments, UNAC-Vancouver does not process any payments directly. All financial transactions are handled securely through third-party payment processors or the United Nations Association in Canada (UNAC) head office.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            While UNAC-Vancouver strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    {/* Websites and Electronic Commerce */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Websites and Electronic Commerce</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you browse the UNAC-Vancouver website, you do so anonymously. UNAC-Vancouver belongs to the United Nations Association in Canada (UNAC) and adheres to the privacy guidelines of that organization.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At times, the UNAC-Vancouver website may request visitors to voluntarily supply personal information, such as name and email address, for purposes such as corresponding with UNAC-Vancouver, registering for events, or joining the UNAC-Vancouver mailing list. This information is only retained if you provide explicit consent.
                        </p>
                    </div>

                    {/* Cloudflare Analytics */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Cloudflare Analytics</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The UNAC-Vancouver website uses Cloudflare Analytics to track basic website performance metrics. We only utilize the most basic, non-invasive analytics features to understand site performance and better serve our visitors.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At no time is personally identifiable information (PII) passed to Cloudflare Analytics. We use this data solely to understand site performance and improve user experience.
                        </p>
                    </div>

                    {/* Links to Other Sites */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Links to Other Sites</H2>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver's website may contain links to third-party sites. UNAC-Vancouver is not responsible for the privacy practices of those other sites. We encourage you to familiarize yourself with such third parties' privacy policies before providing them with your personal information.
                        </p>
                    </div>

                    {/* Disclosure and Retention */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Disclosure and Retention</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The collection of personal information is limited and is relevant and necessary to our programs and activities. UNAC-Vancouver shall not make unwarranted or intrusive inquiries into personal life.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver retains personal information only as long as is necessary for the fulfillment of day-to-day operations and only with explicit consent. UNAC-Vancouver shall not use and/or disclose your personal information for purposes other than those for which it was collected, unless it has first obtained your consent or as permitted or required by law.
                        </p>
                    </div>

                    {/* Accuracy */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Accuracy</H2>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver makes reasonable efforts to keep personal information accurate, complete and as up to date as is necessary for the purposes that it is being collected and used for. If, at any time, you would like to access your personal information held by UNAC-Vancouver or you need to update or correct your personal information, you may let us know by email using the contact information provided at the end of this policy.
                        </p>
                    </div>

                    {/* Confidentiality */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Confidentiality</H2>
                        <p className="text-gray-700 leading-relaxed">
                            Donors who request that their name and/or the amount of their gift not be publicly released shall remain anonymous.
                        </p>
                    </div>

                    {/* Disclosure of Personal Information */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Disclosure of Personal Information</H2>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver does not trade, rent nor sell your personal information. Any financial information is handled exclusively by third-party payment processors or the UNAC head office, and is not accessed or stored by UNAC-Vancouver.
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Copyright</H2>
                        <p className="text-gray-700 leading-relaxed">
                            All information contained on the UNAC-Vancouver website is copyrighted and is the property of UNAC-Vancouver unless otherwise stated—all rights reserved. You may not copy, distribute, or use these materials except as necessary for your personal, non-commercial use. Any trademarks remain the property of their respective owners.
                        </p>
                    </div>

                    {/* Social Media Moderation Policy */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Social Media Moderation Policy</H2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            UNAC-Vancouver social channels are managed by staff and volunteers. We encourage sharing in an open and friendly environment. These guidelines are meant to help foster a positive experience for our supporters.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Please ensure that your comments and photos:
                        </p>
                        <ul className="list-disc pl-8 text-gray-700 leading-relaxed mb-4">
                            <li>Are relevant to our cause</li>
                            <li>Respect others</li>
                            <li>Don't reveal personal details—such as phone numbers, etc.</li>
                            <li>Don't use inappropriate, offensive, sexist or racist language</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to remove comments that we feel breach our guidelines.
                        </p>
                    </div>

                    {/* Openness */}
                    <div className="mb-12">
                        <H2 className="text-primary mb-6">Openness</H2>
                        <p className="text-gray-700 leading-relaxed">
                            UNAC-Vancouver may update its Privacy Policy from time to time. The most up-to-date Privacy Policy is made available on the UNAC-Vancouver website and shall be deemed to be the Privacy Policy then in effect. Additional information about our privacy practices can be obtained using the contact information described below.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-12 bg-blue-50 p-8 rounded-lg">
                        <H3 className="text-primary mb-4">How to Contact UNAC-Vancouver</H3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about our privacy policy or its practices, please contact us at:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Email:</strong>{' '}
                            <a href="mailto:info@unacvancouver.org" className="text-blue-700 hover:text-primary underline">
                                info@unacvancouver.org
                            </a>
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
