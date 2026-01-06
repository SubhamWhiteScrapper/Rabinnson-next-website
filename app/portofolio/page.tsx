import React, { Suspense } from "react";
import Hero from "./Hero";
import LatestProject from "./LatestProject";
import CaseStudy from "./CaseStudy";

const Faq = React.lazy(() => import("@/page-section/Faq"));
const Testimonials = React.lazy(() => import("@/page-section/Testimonials"));

export default function Portofolio() {
    return (
        <div>
            <Suspense>
                <Hero />
                <LatestProject />
                <CaseStudy />
                <Faq />
                <Testimonials />
            </Suspense>
        </div>
    )
}