"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Rocket,
  Settings,
  TrendingUp,
  Zap,
  Factory,
  Layers,
  Users,
  Phone,
  Lightbulb,
  Building2,
  FileText,
  Receipt,
  FolderOpen,
  Scale,
  Banknote,
  Briefcase,
  UserPlus,
  Palette,
  BarChart3,
  FileCheck,
  Calculator,
  Handshake,
  Server,
  UserCircle,
  Code,
  Megaphone,
  PaintBucket,
  LineChart,
  Radio,
  Cpu,
  ShoppingBag,
  Package,
  Gift,
  MessageSquare,
  Database,
  Smartphone,
  Network,
  Award,
  Heart,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";
import navData from "./nav-data.json";

interface NavItem {
  label: string;
  path: string;
}

interface NavSection {
  heading?: string;
  key?: string;
  items: NavItem[];
}

interface NavCategory {
  icon?: string;
  title?: string;
  items?: NavItem[];
  sections?: NavSection[];
}

interface MobileNavigationProps {
  open: boolean;
  handleOpen: () => void;
}

// Icon mapping for top-level items
const topLevelIcons: Record<string, React.ReactNode> = {
  Start: <Rocket className="w-[18px] h-[18px]" />,
  Manage: <Settings className="w-[18px] h-[18px]" />,
  Expand: <TrendingUp className="w-[18px] h-[18px]" />,
  Grow: <Zap className="w-[18px] h-[18px]" />,
  Industry: <Factory className="w-[18px] h-[18px]" />,
  Platform: <Layers className="w-[18px] h-[18px]" />,
  "Who we are": <Users className="w-[18px] h-[18px]" />,
};

// Icon mapping for category titles
const categoryIcons: Record<string, React.ReactNode> = {
  // Start categories
  "Generate Idea": <Lightbulb className="w-[16px] h-[16px]" />,
  "Incorporate Business": <Building2 className="w-[16px] h-[16px]" />,
  "License Business": <FileText className="w-[16px] h-[16px]" />,
  "Tax & Statutory": <Receipt className="w-[16px] h-[16px]" />,
  "File Your Business": <FolderOpen className="w-[16px] h-[16px]" />,
  "Legally Strong your Business": <Scale className="w-[16px] h-[16px]" />,
  "Fund Your Business": <Banknote className="w-[16px] h-[16px]" />,
  // Manage categories
  "Office Setup Planning": <Briefcase className="w-[16px] h-[16px]" />,
  "People & Project Planning": <UserPlus className="w-[16px] h-[16px]" />,
  "Product Design & Planning": <Palette className="w-[16px] h-[16px]" />,
  "Strategic Planning": <BarChart3 className="w-[16px] h-[16px]" />,
  "Performance Management": <FileCheck className="w-[16px] h-[16px]" />,
  "Tax Planning and Compliance": <Calculator className="w-[16px] h-[16px]" />,
  // Grow/Services categories
  "Consulting as a Service": <Handshake className="w-[16px] h-[16px]" />,
  "Technology as a Service": <Server className="w-[16px] h-[16px]" />,
  "Talent-as-a-Service": <UserCircle className="w-[16px] h-[16px]" />,
  "Development as a Service": <Code className="w-[16px] h-[16px]" />,
  "Marketing as a Service": <Megaphone className="w-[16px] h-[16px]" />,
  "Design as a Service": <PaintBucket className="w-[16px] h-[16px]" />,
  // Industry categories
  "Financial Services": <LineChart className="w-[16px] h-[16px]" />,
  "Media & Education": <Radio className="w-[16px] h-[16px]" />,
  "Resources & Sustainability": <Cpu className="w-[16px] h-[16px]" />,
  "Health & Public": <ShoppingBag className="w-[16px] h-[16px]" />,
  // Platform categories
  Products: <Package className="w-[16px] h-[16px]" />,
  "Realtime Events": <Gift className="w-[16px] h-[16px]" />,
  "Communication Suits": <MessageSquare className="w-[16px] h-[16px]" />,
  "Data Management": <Database className="w-[16px] h-[16px]" />,
  "Low code App Development": <Smartphone className="w-[16px] h-[16px]" />,
  "Alliance Products": <Network className="w-[16px] h-[16px]" />,
  // Who we are - default icon
  Items: <Award className="w-[16px] h-[16px]" />,
};

// Mapping from top-level items to their data keys
const dataKeyMap: Record<string, string> = {
  Start: "start",
  Manage: "manageBusiness",
  Grow: "services",
  Industry: "industry",
  Platform: "platforms",
  "Who we are": "whoWeAre",
};

export default function MobileNavigation({
  open = false,
  handleOpen,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleItem = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
    setExpandedCategory(null);
  };

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const getSubNavData = (name: string): NavCategory[] => {
    const key = dataKeyMap[name];
    if (!key) return [];
    return (navData as Record<string, NavCategory[]>)[key] || [];
  };

  const renderItems = (items: NavItem[]) => (
    <div className="flex flex-col gap-[4px] pl-[12px]">
          {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          onClick={handleOpen}
          className={`text-[13px] py-[5px] transition-colors flex items-center gap-[8px]
            ${pathname === item.path ? "text-[#081f5f] font-medium" : "text-[#444]"}
            hover:text-[#152238]
          `}
        >
          <span className="w-[4px] h-[4px] rounded-full bg-[#152238]" />
          {item.label}
        </Link>
      ))}
    </div>
  );

  const renderCategory = (category: NavCategory, index: number) => {
    const categoryKey = category.title || `cat-${index}`;
    const isExpanded = expandedCategory === categoryKey;
    const hasSubItems =
      (category.items && category.items.length > 0) ||
      (category.sections && category.sections.length > 0);

    if (!hasSubItems) return null;

    const icon = categoryIcons[category.title || "Items"] || (
      <Sparkles className="w-[16px] h-[16px]" />
    );

    return (
      <div key={categoryKey} className="flex flex-col">
        <button
          onClick={() => toggleCategory(categoryKey)}
            className="flex items-center justify-between text-left text-[13px] py-[8px] text-[#333] hover:text-[#152238] transition-colors"
        >
          <span className="font-medium flex items-center gap-[8px]">
            <span className="text-[#152238]">{icon}</span>
            {category.title || "Items"}
          </span>
          {hasSubItems &&
            (isExpanded ? (
              <ChevronDown className="w-[14px] h-[14px] text-[#666]" />
            ) : (
              <ChevronRight className="w-[14px] h-[14px] text-[#666]" />
            ))}
        </button>

        {isExpanded && (
          <div className="pl-[8px] pb-[8px]">
            {category.items && renderItems(category.items)}
            {category.sections?.map((section) => (
              <div key={section.key || section.heading} className="mt-[8px]">
                <span className="text-[11px] text-[#888] uppercase tracking-wide font-semibold">
                  {section.heading}
                </span>
                {renderItems(section.items)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`fixed top-[10dvh] right-0 w-full h-[90dvh] bg-white text-[#1a1a1a] z-50 transition-transform duration-500 lg:hidden overflow-hidden shadow-2xl
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <nav className="relative z-10 h-full overflow-y-auto px-[20px] py-[16px] md:px-[48px]">
        <div className="flex flex-col gap-[4px]">
          {/* Home Link */}
          <Link
            href="/"
            onClick={handleOpen}
            className={`flex items-center gap-[12px] text-[16px] py-[12px] px-[8px] rounded-lg transition-all
              ${pathname === "/" ? "font-bold text-[#152238] bg-[#EAF3FF]" : "text-[#333]"}
              hover:text-[#152238] hover:bg-[#F5FAFF]
            `}
          >
            <Home className="w-[18px] h-[18px]" />
            Home
          </Link>

          {/* Dynamic Navigation Items */}
          {navData.topLevelItems.map((item) => {
            const subNavData = getSubNavData(item.name);
            const hasSubNav = subNavData.length > 0;
            const isExpanded = expandedItem === item.name;
            const isActive = pathname?.startsWith(item.path);
            const icon = topLevelIcons[item.name] || (
              <Globe className="w-[18px] h-[18px]" />
            );

            if (!hasSubNav) {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleOpen}
                  className={`flex items-center gap-[12px] text-[16px] py-[12px] px-[8px] rounded-lg transition-all
                    ${isActive ? "font-bold text-[#152238] bg-[#EAF3FF]" : "text-[#333]"}
                    hover:text-[#152238] hover:bg-[#F5FAFF]
                  `}
                >
                  {icon}
                  {item.name}
                </Link>
              );
            }

            return (
              <div key={item.path} className="flex flex-col">
                <button
                  onClick={() => toggleItem(item.name)}
                  className={`flex items-center justify-between text-[16px] py-[12px] px-[8px] rounded-lg text-left transition-all
                    ${isActive ? "font-bold text-[#152238] bg-[#F3E8FF]" : "text-[#333]"}
                    hover:text-[#152238] hover:bg-[#FAF5FF]
                  `}
                >
                  <span className="flex items-center gap-[12px]">
                    {icon}
                    {item.name}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-[18px] h-[18px] text-[#666]" />
                  ) : (
                    <ChevronRight className="w-[18px] h-[18px] text-[#666]" />
                  )}
                </button>

                {isExpanded && (
                  <div className="flex flex-col gap-[2px] pl-[16px] py-[8px] ml-[12px] border-l-2 border-[#E6F0FF]">
                    {/* Link to main section page */}
                    <Link
                      href={item.path}
                      onClick={handleOpen}
                      className="text-[14px] py-[6px] text-[#152238] hover:text-[#152238] transition-colors font-medium flex items-center gap-[8px]"
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-[#152238]" />
                      View All {item.name}
                    </Link>

                    {/* Sub-categories */}
                    {subNavData.map((category, index) =>
                      renderCategory(category, index)
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact Link */}
          <Link
            href="/contact"
            onClick={handleOpen}
            className={`flex items-center gap-[12px] text-[16px] py-[12px] px-[8px] rounded-lg transition-all
              ${pathname === "/contact" ? "font-bold text-[#152238] bg-[#F3E8FF]" : "text-[#333]"}
              hover:text-[#152238] hover:bg-[#FAF5FF]
            `}
          >
            <Phone className="w-[18px] h-[18px]" />
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
