const home = {
    intro: 'Visual design with purpose',
    hero: {
        greeting: "Hi, I am Jean Wang",
        subGreeting: "to Jean Wang's Blog",
        role: "Frontend Developer",
        description: "Passionate about creating beautiful and user-friendly web experiences. Turning ideas into elegant, responsive websites with modern technologies.",
        cta: "Contact Me",
        viewProjects: "View Projects",
        badge: {
            title: "Frontend Developer",
            experience: "10 years experience."
        }
    },
    about: {
        title: "About Me", //關於我
        description: "I'm a frontend developer with 10+ years of experience in building web applications. I thrive on crafting exceptional user interfaces and robust frontend solutions. Currently, I'm actively seeking a new role where I can continue to contribute to impactful projects.",
        showQRCode: "Show QR Code",
        addWeChat: "Add WeChat",
    },
    techStack: {
        title: "Tech Stack", // 技術棧
    },
    portfolio: {
        title: "Portfolio" // 作品集
    },
    expertise: {
        title: 'Branding Expert',
        description: 'A Branding Expert is responsible for shaping and maintaining a brand\'s identity, ensuring consistency, recognition, and emotional connection with the audience.',
    },
    projects: {
        title: 'My Noteworthy Projects',
        items: [
        {
            title: 'Product Description',
            description: 'Artworks that tell engaging stories visually.',
        },
        {
            title: 'Marketing Strategy',
            description: 'Demonstrating impactful marketing campaigns.',
        },
        {
            title: 'Websites Branding',
            description: 'Simplified data dashboards for informed decision-making.',
        },
        ],
    },
    process: {
        title: 'Crafting My Vision, Step by Step...',
        steps: [
        {
            title: 'Brand',
            description: 'Every project begins with an exploration of ideas. I immerse myself in research, drawing inspiration from various sources.',
        },
        {
            title: 'Design',
            description: 'Once I have a clear concept, I move into the planning phase. Here, I organize my thoughts and develop a roadmap.',
        },
        {
            title: 'Packaging',
            description: 'With a solid plan in place, I dive into the creation process. This is where ideas turn into reality.',
        },
        {
            title: 'Printing',
            description: 'The final step involves careful review and optimization. I analyze the results and gather feedback.',
        },
        ],
    },
} as const;

export default home;