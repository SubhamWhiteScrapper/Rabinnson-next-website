"use client";

import clsx from "clsx";

// SVG imports (NO ?react)
import IcMoon from "@/assets/icons/moon.svg";
import IcSun from "@/assets/icons/sun.svg";
import IcList from "@/assets/icons/list.svg";
import IcArrowRight from "@/assets/icons/arrowRight.svg";
import IcArrowLeft from "@/assets/icons/arrowLeft.svg";
import IcArrowDown from "@/assets/icons/arrowDown.svg";
import IcArrowUpRight from "@/assets/icons/arrowUpRight.svg";
import IcStarsSparkle from "@/assets/icons/starsSparkle.svg";
import IcGroup from "@/assets/icons/group.svg";
import IcCash from "@/assets/icons/cash.svg";
import IcTarget from "@/assets/icons/target.svg";
import IcCaretUp from "@/assets/icons/caretUp.svg";
import IcCaretDown from "@/assets/icons/caretDown.svg";
import IcCopyRight from "@/assets/icons/copyRight.svg";
import IcTrendsBlue from "@/assets/icons/trendsBlue.svg";
import IcRocketBlue from "@/assets/icons/rocketBlue.svg";
import IcTargetBlue from "@/assets/icons/targetBlue.svg";
import IcChats from "@/assets/icons/chats.svg";
import IcMap from "@/assets/icons/map.svg";
import IcPhone from "@/assets/icons/phone.svg";
import IcMenu from "@/assets/icons/menu.svg";

const iconMap = {
  moon: IcMoon,
  sun: IcSun,
  list: IcList,
  arrowRight: IcArrowRight,
  arrowLeft: IcArrowLeft,
  arrowDown: IcArrowDown,
  arrowUpRight: IcArrowUpRight,
  starsSparkle: IcStarsSparkle,
  group: IcGroup,
  cash: IcCash,
  target: IcTarget,
  caretUp: IcCaretUp,
  caretDown: IcCaretDown,
  copyRight: IcCopyRight,
  trendsBlue: IcTrendsBlue,
  rocketBlue: IcRocketBlue,
  targetBlue: IcTargetBlue,
  chats: IcChats,
  map: IcMap,
  phone: IcPhone,
  menu: IcMenu,
};

export interface IconProps {
  name: keyof typeof iconMap;
  className?: string;
  color?: string;
  noDarkMode?: boolean;
}

const Icons: React.FC<IconProps> = ({
  name,
  className = "",
  color = "currentColor",
  noDarkMode = false,
}) => {
  const IconComponent = iconMap[name];
 
  if (!IconComponent) return null;

  return (
    <span className={clsx("inline-flex", className)}>
      <IconComponent
        width="100%"
        height="100%"
        
      />
    </span>
  );
};

export default Icons;
