"use client";

import React, { useEffect, useState, JSX } from "react";
import clsx from "clsx";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
  size?: number;
  sizeTablet?: number;
  sizeMobile?: number;
  weight?: number;
  weightTablet?: number;
  weightMobile?: number;
  lineHeight?: number;
  lineHeightTablet?: number;
  lineHeightMobile?: number;
  letterSpacing?: number;
  letterSpacingTablet?: number;
  letterSpacingMobile?: number;
  color?: string;
  noDarkMode?: boolean;
  className?: string;
}

const MOBILE_BP = 480;
const TABLET_BP = 1024;

function pickResponsiveValue(
  desktop?: number,
  tablet?: number,
  mobile?: number,
  width?: number | null
) {
  if (width == null) return desktop; // ✅ SSR-safe fallback
  if (width <= MOBILE_BP) return mobile ?? tablet ?? desktop;
  if (width <= TABLET_BP) return tablet ?? desktop;
  return desktop;
}

const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  size = 16,
  sizeTablet,
  sizeMobile,
  weight = 400,
  weightTablet,
  weightMobile,
  lineHeight,
  lineHeightTablet,
  lineHeightMobile,
  letterSpacing,
  letterSpacingTablet,
  letterSpacingMobile,
  color = "#070707",
  noDarkMode = false,
  className = "",
  children,
  ...props
}) => {
  // ✅ SSR + first hydration are identical
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const fontSize = pickResponsiveValue(size, sizeTablet, sizeMobile, width);
  const fontWeight = pickResponsiveValue(weight, weightTablet, weightMobile, width);
  const lh = pickResponsiveValue(lineHeight, lineHeightTablet, lineHeightMobile, width);
  const ls = pickResponsiveValue(letterSpacing, letterSpacingTablet, letterSpacingMobile, width);

  return React.createElement(
    Tag,
    {
      suppressHydrationWarning: true,
      className: clsx(
        !noDarkMode && "dark:text-white",
        color === "#070707" && "text-[#070707]",
        className
      ),
      style: {
        fontSize: fontSize ? `${fontSize}px` : undefined,
        fontWeight,
        lineHeight: lh ? `${lh}px` : undefined,
        letterSpacing: ls ? `${ls}px` : undefined,
        ...(noDarkMode && color ? { color } : {}),
      },
      ...props,
    },
    children
  );
};

export default Typography;
