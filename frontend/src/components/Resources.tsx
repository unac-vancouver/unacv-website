import Hero from '@/components/ResourcesPageSections/Hero';
import GlobalLearningResources from '@/components/ResourcesPageSections/GlobalLearningResources';
import NationalOffice from '@/components/ResourcesPageSections/NationalOffice';
import CallToAction from '@/components/ResourcesPageSections/CallToAction';

export default function ResourcesPage(){
    return(
        <main aria-labelledby="resources-title">
            <Hero />
            <GlobalLearningResources />
            <NationalOffice />
            <CallToAction />
        </main>
    );
}