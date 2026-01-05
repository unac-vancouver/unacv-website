import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { FaLinkedin as Linkedin, FaFacebook as Facebook, FaInstagram as Instagram } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { H2, H3 } from '@/components/ui/Typographies';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="w-full flex flex-col items-center py-16 md:py-24 px-6 md:px-20 lg:px-40 bg-white">
            <div className="max-w-7xl w-full">
                {/* Title */}
                <H2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
                    Contact Us
                </H2>

                {/* Single Container with Two Columns */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_2fr] gap-0 min-h-full">
                        {/* Left Column - Contact Information */}
                        <div className="flex flex-col justify-between p-8 lg:p-12">
                            <div>
                                <H3 className="text-2xl font-semibold mb-8 text-gray-900">
                                    Contact Information
                                </H3>

                                {/* Email */}
                                <div className="flex items-center gap-3 mb-8">
                                    <Mail className="w-5 h-5 text-gray-700" />
                                    <a
                                        href="mailto:info@unacvancouver.org"
                                        className="text-gray-700 hover:text-gray-900 transition-colors"
                                    >
                                        info@unacvancouver.org
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                                    aria-label="X (Twitter)"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 fill-current"
                                        aria-hidden="true"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="hidden lg:block w-px bg-gray-300 self-stretch"></div>

                        {/* Right Column - Contact Form */}
                        <div className="p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-900"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-4 py-1 rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-1 rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-gray-900"
                                    >
                                        Subject
                                    </label>
                                    <Select
                                        value={formData.subject}
                                        onValueChange={(value) =>
                                            setFormData({ ...formData, subject: value })
                                        }
                                    >
                                        <SelectTrigger className="w-full h-11 bg-white">
                                            <SelectValue placeholder="General Inquiry" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                                            <SelectItem value="Volunteer Inquiry">Volunteer Inquiry</SelectItem>
                                            <SelectItem value="Sponsorship, Partnership or Collaboration">Sponsorship, Partnership or Collaboration</SelectItem>
                                            <SelectItem value="Event / Speaking Request">Event / Speaking Request</SelectItem>
                                            <SelectItem value="Membership or Donation">Membership or Donation</SelectItem>
                                            <SelectItem value="Media or Press">Media or Press</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Message Field */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-gray-900"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Leave us a message..."
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={6}
                                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        required
                                    />
                                </div>

                                {/* Footer with info text and button */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                                    <Button
                                        type="submit"
                                        className="bg-[#1e3a5f] hover:bg-[#152a45] text-white px-8 py-2.5 h-auto rounded-md font-medium transition-colors"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
