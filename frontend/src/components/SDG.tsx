import Hero from '@/components/SDGPageSections/Hero';
import SDGGoalsSection from '@/components/SDGPageSections/SDGGoalsSection';
import OurContributions from '@/components/SDGPageSections/OurContributions';
import TakeAction from '@/components/SDGPageSections/TakeAction';

export default function SDGPage(){
    return(
        <main aria-labelledby="sdg-title">
            <Hero />
            <SDGGoalsSection />
            <OurContributions />
            <TakeAction />
        </main>
    );
}