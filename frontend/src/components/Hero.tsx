import { Image } from 'lucide-react'
import HeroImage from '../assets/HeroImage.jpg' // example image import
export default function Homepage() {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden mt-[60px] pt-[120px] pl-[150px] pr-[150px] pb-[55px] items-center justify-items-center">
            <img
            src={HeroImage}
            alt="Hero Background"
            className="absolute inset-0 min-w-[1440px] w-full h-[610px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 w-full h-[610px] bg-gradient-to-b from-black/43 to-transparent z-[5]" />
            
            {/* pt-[120px] pl-[150px] pr-[150px] pb-[55px]*/}
            
            {/* Content Container */}
            <div id="heroContainer"
            className="relative z-10 flex items-start w-[1140px] h-[435px] justify-center pt-[10px] pb-[34px] gap-[50px]">
                <div id="HeroHeading"
                className="items-center mt-[50px] flex-grow-0 flex-shrink-0 gap-[10px]">
                    <h1 className="text-5xl font-bold text-white">
                        United Nations Association in Canada - Vancouver
                    </h1>
                </div>
                <div
                className = "gap-[16px]">
                    <div
                    className="gap-[24px]">

                        
                    </div>

                </div>
            </div>
        </section>
    )
}