import React from "react";
import Hero from "@/components/HomePageSections/Hero";

export type HomePageProps = {
    className?: string;
};

export default function HomePage(){
    return (
        <main aria-labelledby="home-title">
            <Hero />
        </main>
    );
}