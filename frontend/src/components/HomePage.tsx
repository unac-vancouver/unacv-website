import Hero from "@/components/HomePageSections/Hero";
import AboutSnapshot from "./HomePageSections/AboutSnapshot";
import GlobalGoals from "./HomePageSections/GlobalGoals";

export type HomePageProps = {
    className?: string;
};

export default function HomePage(){
    return (
        <main aria-labelledby="home-title">
            <Hero />
            <AboutSnapshot />
            <GlobalGoals />
        </main>
    );
}