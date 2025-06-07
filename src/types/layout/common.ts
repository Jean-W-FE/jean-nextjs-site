export type NavItem = {
    title: string;
    href: string;
    external?: boolean;
}
export type NavItemFooter = {
    title: string;
    href: string;
    external?: boolean;
}
export type FooterConfig = {
    site: {
        name: string;
        description: string;
    };
    navigation: {
        quickLinks: {
            title: string;
        }
    }
}