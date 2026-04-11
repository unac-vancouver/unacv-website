import { H2, H3, Body } from '@/components/ui/Typographies'

export default function MembershipInfo() {
    return (
        <section id="membership" className="bg-[var(--color-neutral-0)] px-6 md:px-20 py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left - How to Become a Member */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <H2 className="text-[var(--color-primary-blue-10)] mb-4">
                                How to Become a Member
                            </H2>
                            <Body className="text-[var(--color-neutral-7)] leading-relaxed">
                                Membership is open to anyone interested. We believe all Canadians should have the opportunity to join, regardless of their financial situation.
                            </Body>
                        </div>

                        {/* Steps */}
                        <ol className="flex flex-col gap-4">
                            {[
                                <>Visit the <a href="https://www.unac.org/?form=DonateNow&utm_campaign=navigation" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-blue-8)] underline hover:text-[var(--color-primary-blue-10)] transition-colors">UNA-Canada donation page</a> and select <strong>"UNA-Canada Branch Donations"</strong> as the donation type.</>,
                                <>In the text box immediately below, specify <strong>"Vancouver Branch Membership"</strong>. This is essential — without it, your donation will only go to the National Office and you will <strong>not</strong> be considered a member of the Vancouver Branch.</>,
                                <>Complete the form with your personal and payment information, then submit your donation.</>,
                                <>Print a confirmation of payment and send an electronic copy to{' '}<a href="mailto:info@unacvancouver.org" className="text-[var(--color-primary-blue-8)] underline hover:text-[var(--color-primary-blue-10)] transition-colors">info@unacvancouver.org</a>. This ensures the Vancouver Branch can add you to our mailing list and keep you informed of local activities.</>,
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary-blue-10)] text-white flex items-center justify-center text-sm font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <Body className="text-[var(--color-neutral-8)] leading-relaxed">{step}</Body>
                                </li>
                            ))}
                        </ol>

                        {/* Warning callout */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
                            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            <Body className="text-amber-800 leading-relaxed">
                                Always specify <strong>"Vancouver Branch Membership"</strong> in the comment field, otherwise your donation will not be routed to our local branch.
                            </Body>
                        </div>
                    </div>

                    {/* Right - Details */}
                    <div className="flex flex-col gap-6">
                        <H3 className="text-[var(--color-primary-blue-10)]">
                            Membership & Donations
                        </H3>

                        {/* No Set Fee */}
                        <div className="bg-[var(--color-neutral-1)] rounded-xl p-6 border border-[var(--color-neutral-3)]">
                            <Body className="text-[var(--color-neutral-8)] leading-relaxed">
                                As stated on the United Nations Association in Canada's official website, there is no set membership fee. However, because UNA-Canada relies on membership donations to continue its important work, we encourage members to give as generously as they can.
                            </Body>
                        </div>

                        {/* Suggested Donations */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 bg-[var(--color-primary-blue-05)] border border-[var(--color-primary-blue-2)] rounded-xl p-5 text-center">
                                <p className="text-3xl font-bold text-[var(--color-primary-blue-10)] mb-1">$25</p>
                                <Body className="text-[var(--color-neutral-7)] font-medium">Suggested minimum<br />for new members</Body>
                            </div>
                            <div className="flex-1 bg-[var(--color-primary-blue-05)] border border-[var(--color-primary-blue-2)] rounded-xl p-5 text-center">
                                <p className="text-3xl font-bold text-[var(--color-primary-blue-10)] mb-1">$15</p>
                                <Body className="text-[var(--color-neutral-7)] font-medium">Suggested minimum<br />for students</Body>
                            </div>
                        </div>

                        {/* Tax Receipt & Local Info */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary-blue-1)] flex items-center justify-center">
                                    <svg className="w-3 h-3 text-[var(--color-primary-blue-8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <Body className="text-[var(--color-neutral-8)] leading-relaxed">
                                    Tax receipts will be issued for all donations of <strong>$10 and up</strong>.
                                </Body>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary-blue-1)] flex items-center justify-center">
                                    <svg className="w-3 h-3 text-[var(--color-primary-blue-8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <Body className="text-[var(--color-neutral-8)] leading-relaxed">
                                    Membership automatically entitles members to the benefits of their local branch. To also become a member of our local branch, please indicate so in your membership form.
                                </Body>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary-blue-1)] flex items-center justify-center">
                                    <svg className="w-3 h-3 text-[var(--color-primary-blue-8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <Body className="text-[var(--color-neutral-8)] leading-relaxed">
                                    In Vancouver, we will keep you updated and informed as to what we do and aim to do, and how you may be involved if you choose to be.
                                </Body>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
