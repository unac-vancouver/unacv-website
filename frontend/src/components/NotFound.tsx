import { Link } from 'react-router-dom'
import { CTAButton } from '@/components/ui/cta-button'
import { Display } from '@/components/ui/Typographies'

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-5rem)] bg-white flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <p className="text-8xl font-bold text-primary mb-4">404</p>
                <Display className="mb-4 text-[#1A2D52]">Page Not Found</Display>
                <p className="text-gray-500 text-lg mb-8">
                    The page you're looking for doesn't exist or may have been moved.
                </p>
                <Link to="/">
                    <CTAButton>Back to Home</CTAButton>
                </Link>
            </div>
        </div>
    )
}
