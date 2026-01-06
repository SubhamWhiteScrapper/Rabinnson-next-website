import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";
import Hero from './Hero';
import AboutUs from './AboutUs';
import Teams from './Teams';
import Approach from './Approach';
import Faq from '@/page-section/Faq';
import Testimonials from '@/page-section/Testimonials';




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function About() {
    return (
        <div>
            <Suspense>
                <Hero/>
                <AboutUs />
                <Teams />
                <Approach />
                <Faq />
                <Testimonials />
            </Suspense>
        </div>
    )
}