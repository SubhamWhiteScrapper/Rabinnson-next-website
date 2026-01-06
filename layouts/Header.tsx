"use client"
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import Image from "next/image";
import Navigation from "./Navigation";
import Logo from '@/assets/images/a.png';

import Icons from "@/components/icon";

interface HeaderProps {
    mobileOpen: boolean;
    onOpenMobileNav?: () => void;
}

export default function Header({ mobileOpen = false, onOpenMobileNav }: HeaderProps) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isIdle, setIsIdle] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const topBar = useRef<HTMLDivElement>(null);
    const midBar = useRef<HTMLDivElement>(null);
    const botBar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mobileOpen) {
            gsap.to(topBar.current, { rotate: 45, y: 8, duration: 0.3 });
            gsap.to(midBar.current, { opacity: 0, duration: 0.3 });
            gsap.to(botBar.current, { rotate: -45, y: -6, duration: 0.3 });
        } else {
            gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
            gsap.to(midBar.current, { opacity: 1, duration: 0.3 });
            gsap.to(botBar.current, { rotate: 0, y: 0, duration: 0.3 });
        }
    }, [mobileOpen]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setShowNavbar(currentScrollY < lastScrollY || currentScrollY === 0);
            setLastScrollY(currentScrollY);

            setHasScrolled(currentScrollY > 10);

            setIsIdle(false);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsIdle(true);
            }, 3000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 z-20 left-0 w-full transition-transform duration-300 h-[10dvh] px-[20px] md:px-[72px] md:py-[32px] flex justify-between items-center
            ${(mobileOpen || (showNavbar && !isIdle)) ? "translate-y-0" : "-translate-y-full"}
            ${hasScrolled ? "bg-[#070707]" : ""}
        `}>
            <Link href="/" className="w-[40%] lg:w-[15%] cursor-pointer">
                <Image src={Logo} alt="Logo" />
            </Link>
            <Navigation />
            <div className="hidden lg:flex justify-between items-center gap-[32px]">
                
                <Link href="/contact" className="flex justify-between items-center gap-[8px] text-white cursor-pointer">
                    CONTACT US <Icons name="arrowRight" className="w-5" />
                </Link>
            </div>
            <div className="flex items-center gap-[24px] lg:hidden">
                
                <div className="flex justify-center items-center w-[10%] cursor-pointer" onClick={onOpenMobileNav}>
                    <div className="relative w-7 h-4 flex flex-col justify-center items-center">
                        <div ref={topBar} className="absolute w-6 h-[2px] bg-white rounded top-0 transition-all" />
                        <div ref={midBar} className="absolute w-6 h-[2px] bg-white rounded top-1/2 -translate-y-1/2 transition-all" />
                        <div ref={botBar} className="absolute w-6 h-[2px] bg-white rounded bottom-0 transition-all" />
                    </div>
                </div>
            </div>
        </div>
    );
}
