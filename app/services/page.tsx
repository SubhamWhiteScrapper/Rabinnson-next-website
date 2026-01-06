import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";
import OurServices from './OurServices';
import Hero from './Hero';
import Faq from '@/page-section/Faq';
import Testimonials from '@/page-section/Testimonials';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Services() {
    return (
        <div>
            <Suspense>
                <Hero />
                <OurServices/>
                <Faq />
                <Testimonials />
            </Suspense>
        </div>
    )
}