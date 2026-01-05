import Hero from '@/components/ResourcesPageSections/Hero';
import GlobalLearningResources from '@/components/ResourcesPageSections/GlobalLearningResources';
import NationalOffice from '@/components/ResourcesPageSections/NationalOffice';

export default function ResourcesPage(){
    return(
        <main aria-labelledby="resources-title">
            <Hero />
            <GlobalLearningResources />
            <NationalOffice />
        </main>
    );
}