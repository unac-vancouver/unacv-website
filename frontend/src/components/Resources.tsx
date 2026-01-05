import Hero from '@/components/ResourcesPageSections/Hero';
import GlobalLearningResources from '@/components/ResourcesPageSections/GlobalLearningResources';

export default function ResourcesPage(){
    return(
        <main aria-labelledby="resources-title">
            <Hero />
            <GlobalLearningResources />
        </main>
    );
}