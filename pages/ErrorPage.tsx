import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/page-section/errorPage/Hero"));

export default function ErrorPage() {
  return (
    <div>
      <Suspense>
        <Hero />
      </Suspense>
    </div>
  )
}
