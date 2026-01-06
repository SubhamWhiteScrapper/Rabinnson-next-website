"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import Icons from "@/components/icon";
import Typography from "@/components/typography";

export type Member = {
  name: string;
  experience: string;
  image: StaticImageData;
  position: string;
};

interface CarouselProps {
  items: Member[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);

  const totalItems = items.length;

  const slideTo = (index: number) => {
    if (!sliderRef.current) return;

    const width = window.innerWidth > 768 ? 310 : 290;
    const gap = 24;
    const xOffset = -index * (width + gap);

    gsap.to(sliderRef.current, {
      x: xOffset,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleNext = () => {
    if (currentIndex < totalItems - visibleCount) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      slideTo(next);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      slideTo(prev);
    }
  };

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden w-full">
        <div ref={sliderRef} className="flex gap-[24px] w-max">
          {items.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[12px] w-[290px] md:w-[310px] flex-shrink-0"
            >
              <div className="relative bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] overflow-hidden">
                <div className="absolute left-3 top-3 flex items-center gap-[6px] bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[12px] px-[10px] py-[6px] rounded-full z-10">
                  <Icons name="starsSparkle" className="w-3" />
                  {member.position}
                </div>

                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-[12px]"
                  priority={index < 2}
                />
              </div>

              <div>
                <Typography size={20} weight={700}>
                  {member.name}
                </Typography>
                <Typography weight={500}>{member.experience}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[48px] md:mt-[80px] w-full flex items-center justify-center gap-[24px]">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-white border border-[#1146F2] rounded-full w-[32px] md:w-[48px] h-[32px] md:h-[48px] p-[8px] md:p-[10px] flex items-center justify-center dark:bg-[#070707] disabled:opacity-30"
        >
          <Icons name="arrowLeft" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= totalItems - visibleCount}
          className="bg-white border border-[#1146F2] rounded-full w-[32px] md:w-[48px] h-[32px] md:h-[48px] p-[8px] md:p-[10px] flex items-center justify-center dark:bg-[#070707] disabled:opacity-30"
        >
          <Icons name="arrowRight" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
