import { type NavItem, type NavItemFooter } from "@/types"

export const sizeLinks = {
  email: "zola.wang@gmail.com",
  github:
    "https://github.com/Jean-W-FE",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

export const navItems = [
  {
    key: 'home',
    href: '/',
    label: 'nav.home',
    className: {
      pc: 'hover-text-foreground hover:text-black transition-colors',
      mobile: 'text-lg font-medium text-center hover-text-foreground hover:text-purple-600 transition-colors'
    }
  },
  {
    key: 'about',
    href: '/about',
    label: 'nav.about',
    className: {
      pc: 'hover-text-foreground hover:text-black transition-colors',
      mobile: 'text-lg font-medium text-center hover-text-foreground/40 hover:text-purple-600 transition-colors'
    }
  },
  // {
  //   key: 'projects',
  //   href: '/projects',
  //   label: 'nav.projects',
  // },
  // {
  //   key: 'blog',
  //   href: '/blog',
  //   label: 'nav.blog',
  // },
  {
    key: 'contact',
    href: `mailto:${sizeLinks.email}?subject=&body=Hi, I’d like to know more about your services.`,
    label: 'nav.contact',
    className: {
      pc: 'px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors theme-shadow-lg shadow-purple-500/20',
      mobile: 'px-6 py-3 bg-purple-600 text-white text-center text-sm font-medium rounded-full hover:bg-purple-700 transition-colors theme-shadow-lg shadow-purple-500/20',
    }
  }
]
export const socialLinks = [
  { title: 'GitHub', href: sizeLinks.github },
  // { name: 'LinkedIn', href: links.linkedin },
  // { name: 'Twitter', href: links.twitter },
]
// todo
export const siteConfig = {
  name: "Jean Wang",
  // description:
  //   "An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",
  // links,
  // url: "https://saasyland.com",
  // ogImage: links.openGraphImage,
  // author: "pjborowiecki",
  // hostingRegion: "fra1",
  // keywords: ["SaaS", "Next.js", "Template"],
  // navItems: [
  //   {
  //     title: "About",
  //     href: "/about",
  //   },
  //   {
  //     title: "Features",
  //     href: "/features",
  //   },
  //   {
  //     title: "Pricing",
  //     href: "/pricing",
  //   },
  //   {
  //     title: "FAQ",
  //     href: "/faq",
  //   },
  //   {
  //     title: "Docs",
  //     href: "/docs",
  //   },
  //   {
  //     title: "Blog",
  //     href: "/blog",
  //   },
  // ] satisfies NavItem[],
  // navItemsMobile: [],
  // navItemsFooter: [
  //   {
  //     title: "Company",
  //     items: [
  //       {
  //         title: "About",
  //         href: "/about",
  //         external: false,
  //       },
  //       {
  //         title: "Privacy",
  //         href: "/privacy",
  //         external: false,
  //       },
  //       {
  //         title: "Terms",
  //         href: "/tos",
  //         external: false,
  //       },
  //       {
  //         title: "Careers",
  //         href: "/careers",
  //         external: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     items: [
  //       {
  //         title: "Docs",
  //         href: "/docs",
  //         external: false,
  //       },
  //       {
  //         title: "FAQ",
  //         href: "/faq",
  //         external: false,
  //       },
  //       {
  //         title: "Blog",
  //         href: "/blog",
  //         external: false,
  //       },
  //       {
  //         title: "Contact",
  //         href: "/contact",
  //         external: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Inspiration",
  //     items: [
  //       {
  //         title: "Shadcn",
  //         href: "https://ui.shadcn.com/",
  //         external: true,
  //       },
  //       {
  //         title: "Taxonomy",
  //         href: "https://tx.shadcn.com/",
  //         external: true,
  //       },
  //       {
  //         title: "Skateshop",
  //         href: "https://skateshop.sadmn.com/",
  //         external: true,
  //       },
  //       {
  //         title: "Acme Corp",
  //         href: "https://acme-corp.jumr.dev/",
  //         external: true,
  //       },
  //     ],
  //   },
  // ] satisfies NavItemFooter[],
}
