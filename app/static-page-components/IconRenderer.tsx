"use client";

import {
    Sparkles, Target, BookOpen, Users, Briefcase,
    Award, Clock, FileText, Shield, Lock,
    UserCheck, Check, ArrowRight, Scale, ClipboardCheck,
    Handshake, Building, Heart, Globe, Star,
    Trophy, Lightbulb, Rocket, Settings, Zap,
    TrendingUp, BarChart, PieChart, LineChart, Activity,
    Crown, Medal, Building2, HandHeart, Gift, MessageCircle,
    Network, Accessibility, Leaf, Sun, Recycle, Droplets,
    TreePine, BadgeCheck, Smile,
    LucideIcon
} from "lucide-react";
import { IconName } from "./types";

// Map of icon names to their components
const iconMap: Record<IconName, LucideIcon> = {
    Sparkles,
    Target,
    BookOpen,
    Users,
    Briefcase,
    Award,
    Clock,
    FileText,
    Shield,
    Lock,
    UserCheck,
    Check,
    ArrowRight,
    Scale,
    ClipboardCheck,
    Handshake,
    Building,
    Heart,
    Globe,
    Star,
    Trophy,
    Lightbulb,
    Rocket,
    Settings,
    Zap,
    TrendingUp,
    BarChart,
    PieChart,
    LineChart,
    Activity,
    Crown,
    Medal,
    Building2,
    HandHeart,
    Gift,
    MessageCircle,
    Network,
    Accessibility,
    Leaf,
    Sun,
    Recycle,
    Droplets,
    TreePine,
    BadgeCheck,
    Smile,
};

interface IconRendererProps {
    name: IconName;
    className?: string;
}

export function IconRenderer({ name, className = "w-4 h-4" }: IconRendererProps) {
    const IconComponent = iconMap[name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap`);
        return null;
    }
    return <IconComponent className={className} />;
}

// Helper function to get icon component by name (for internal use)
export function getIconComponent(name: IconName): LucideIcon {
    return iconMap[name] || Sparkles;
}
