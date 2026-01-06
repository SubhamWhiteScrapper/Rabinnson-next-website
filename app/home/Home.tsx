"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { useRef, Suspense } from "react";
import Hero from './Hero';
import AboutUs from '../about/AboutUs';
import LatestProject from './LatestProject';
import LogoPartners from './LogoPartners';
import Services from './Services';
import Faq from '@/page-section/Faq';
import Testimonials from '@/page-section/Testimonials';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  const scrollToTestimonials = () => {
    if (testimonialRef.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: testimonialRef.current, offsetY: 50 },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="">
      <Suspense>
        <Hero onScrollToTestimonials={scrollToTestimonials} />
        <AboutUs />
        <LatestProject />
        <LogoPartners />
        <Services />
        
        <Faq />
        <div ref={testimonialRef}>
          <Testimonials />
        </div>
      </Suspense>
    </div>
  )
}