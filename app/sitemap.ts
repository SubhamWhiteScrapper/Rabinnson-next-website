import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.rabinnson.com";

    // Static pages
    const staticPages = [
        "",
        "/about",
        "/contact",
        "/services",
        "/start-generating-your-idea",
    ];

    // Start Services - Incorporate
    const incorporatePages = [
        "/start/incorporate/sole-proprietorship",
        "/start/incorporate/partnership-registration",
        "/start/incorporate/llp-registration",
        "/start/incorporate/one-person-company-registration",
        "/start/incorporate/nidhi-company-registration",
        "/start/incorporate/section-8-company-ngo",
        "/start/incorporate/society-registration",
        "/start/incorporate/trust-registration",
        "/start/incorporate/foreign-subsidiary",
        "/start/incorporate/dubai-business-registration",
    ];

    // Start Services - License
    const licensePages = [
        "/start/license/fssai-registration",
        "/start/license/import-export-license",
        "/start/license/msme-registration",
        "/start/license/trademark-registration",
        "/start/license/digital-signature-certificate",
        "/start/license/professional-tax",
        "/start/license/shop-establishment",
    ];

    // Start Services - Tax
    const taxPages = [
        "/start/tax/gst-registration",
        "/start/tax/pantanapplication",
        "/start/tax/income-tax-filing",
        "/start/tax/tds-return-filing",
        "/start/tax/gst-return-filing",
    ];

    // Start Services - Legal
    const legalPages = [
        "/start/legal/employment-agreement",
        "/start/legal/non-disclosure-agreement",
        "/start/legal/founders-agreement",
        "/start/legal/service-agreement",
        "/start/legal/privacy-policy",
        "/start/legal/terms-conditions",
        "/start/legal/shareholder-agreement",
        "/start/legal/vendor-agreement",
    ];

    // Start Services - Fund
    const fundPages = [
        "/start/fund/seed-funding",
        "/start/fund/venture-capital",
        "/start/fund/angel-investment",
        "/start/fund/crowdfunding",
        "/start/fund/government-grants",
    ];

    // Start Services - File
    const filePages = [
        "/start/file/annual-filing",
        "/start/file/roc-compliance",
        "/start/file/company-annual-return",
    ];

    // Manage Business
    const manageBusinessPages = [
        "/manage-business",
        "/manage-business/office",
        "/manage-business/people",
        "/manage-business/product",
        "/manage-business/strategy",
        "/manage-business/performance",
        "/manage-business/tax",
    ];

    // Platforms
    const platformPages = [
        "/platforms",
        "/platforms/payments",
        "/platforms/plans",
        "/platforms/products",
        "/platforms/security",
        "/platforms/payments/payment-gateway",
        "/platforms/payments/invoicing",
        "/platforms/security/fraud-alarm",
        "/platforms/security/safe-pay",
    ];

    // Industry
    const industryPages = [
        "/industry",
        "/industry/financial-services",
        "/industry/health-public",
        "/industry/media-education",
        "/industry/resources-sustainability",
        "/industry/health-public/healthcare",
        "/industry/health-public/non-profit",
        "/industry/health-public/government",
        "/industry/health-public/life-sciences",
    ];

    // About Pages
    const aboutPages = [
        "/about/who-we-are/brand",
        "/about/who-we-are/leadership",
        "/about/who-we-are/team",
        "/about/who-we-are/awards",
        "/about/who-we-are/partners",
        "/about/who-we-are/community",
        "/about/who-we-are/sustainability",
        "/about/who-we-are/inclusion",
        "/about/who-we-are/values",
    ];

    // Services
    const servicesPages = [
        "/services/consulting",
        "/services/design",
        "/services/development",
        "/services/marketing",
        "/services/talent",
        "/services/technology",
    ];

    // Combine all pages
    const allPages = [
        ...staticPages,
        ...incorporatePages,
        ...licensePages,
        ...taxPages,
        ...legalPages,
        ...fundPages,
        ...filePages,
        ...manageBusinessPages,
        ...platformPages,
        ...industryPages,
        ...aboutPages,
        ...servicesPages,
    ];

    return allPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
    }));
}
