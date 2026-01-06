declare module "./nav-data.json" {
  interface LinkItem {
    label: string;
    path: string;
  }

  interface MenuSection {
    heading: string;
    key: string;
    items: LinkItem[];
  }

  interface MenuBlock {
    icon: string;
    title: string;
    items?: LinkItem[];
    sections?: MenuSection[];
  }

  interface NavItem {
    name: string;
    path: string;
  }

  export interface NavData {
    topLevelItems: NavItem[];
    whoWeAre: MenuBlock[];
    manageBusiness: MenuBlock[];
    services: MenuBlock[];
    industry: MenuBlock[];
    platforms: MenuBlock[];
    start: MenuBlock[];
  }

  const data: NavData;
  export default data;
}