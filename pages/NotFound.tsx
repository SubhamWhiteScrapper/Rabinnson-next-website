import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/page-section/notFound/Hero"));

export default function NotFound() {
  return (
    <div>
      <Suspense>
        <Hero />
      </Suspense>
    </div>
  )
}
