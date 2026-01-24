import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logo from '@/assets/unacvancouver-logo.png';
import DonationModal from '@/components/ui/DonationModal';
import { useState } from 'react';


export default function Footer() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    return (
        <footer className="bg-[#1A2D52] text-white">
            <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12">
                    {/* Logo and Organization Name - Centered on mobile, left on iPad/desktop */}
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center md:justify-start">
                        <div className="flex flex-col gap-4 items-center md:items-start">
                            <div className="w-32 h-32">
                                <img src={logo} alt="UN Association in Canada - Vancouver Branch" className="h-32" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Centered on mobile, left on iPad/desktop */}
                    <div className="lg:col-span-2 text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2 items-center md:items-start">
                            <Link to="/" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Home
                            </Link>
                            <Link to="/events" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Events
                            </Link>
                            <Link to="/sdgs" className="text-white/70 hover:text-white transition-colors text-base italic">
                                SDG's
                            </Link>
                            <Link to="/get-involved" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Get Involved
                            </Link>
                            <Link to="/resources" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Resources
                            </Link>
                            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Legal - Centered on mobile, left on iPad/desktop */}
                    <div className="lg:col-span-2 text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <nav className="flex flex-col gap-2 items-center md:items-start">
                            <Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-use" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Terms of Use
                            </Link>
                        </nav>
                    </div>

                    {/* Act Today - Centered on mobile, left on iPad/desktop */}
                    <div className="lg:col-span-2 text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-4">Act Today</h3>
                        <nav className="flex flex-col gap-2 items-center md:items-start">
                            <button 
                                onClick={() => setIsDonationModalOpen(true)}
                                className="text-white/70 hover:text-white transition-colors text-base italic"
                            >
                                Donate
                            </button>
                            <Link to="/get-involved#volunteer" className="text-white/70 hover:text-white transition-colors text-base italic">
                                Volunteer
                            </Link>
                        </nav>
                    </div>

                    {/* Social Media Icons - Centered on mobile, right on iPad/desktop */}
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center md:justify-end items-start">
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/company/united-nations-association-vancouver/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.facebook.com/UNACVancouver/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/unacvancouver/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-8 h-8" />
                            </a>
                            <a
                                href="https://x.com/UNACVancouver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mb-8"></div>

                {/* Copyright */}
                <div className="text-center text-white/70 text-base italic">
                    © 2025 UN Association in Canada - Vancouver Branch
                </div>
            </div>

            {/* Donation Modal */}
            <DonationModal
                isOpen={isDonationModalOpen}
                onClose={() => setIsDonationModalOpen(false)}
            />
        </footer>
    );
}
