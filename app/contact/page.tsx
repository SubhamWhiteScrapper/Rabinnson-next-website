import React, { Suspense } from "react";
import Hero from "./Hero";
import Form from "./Form";
import Testimonials from "@/page-section/Testimonials";


export default function Contact() {
    return (
        <div>
            <Suspense>
                <Hero />
                <Form />
                <Testimonials />
            </Suspense>
        </div>
    )
}
