const about = {
    title: 'About Me',
    description: 'I am a frontend developer with over 10 years of experience in web application development. I excel at creating outstanding user interfaces and robust frontend solutions. Currently, I am actively seeking a new position where I can continue to contribute to impactful projects.',
    workExperience: 'Work Experience',
    interest: 'Interests',
    currentStatus: 'Current Status',
    project: 'Projects',
    contact: 'Contact Me',
    hobbies: {
        title: 'Hobbies & Interests',
        drawing: {
            title: 'Drawing Enthusiast',
            description: 'I love capturing beautiful moments through sketching and drawing. Doodling and sketching are my favorite ways to relax.'
        },
        photography: {
            title: 'Photography Enthusiast',
            description: 'Capturing life\'s beautiful moments through the lens, cultivating design inspiration and aesthetic sensibility.'
        },
        reading: {
            title: 'Avid Reader',
            description: 'Reading widely in technology and humanities, maintaining a continuous learning mindset and expanding knowledge.'
        },
        music: {
            title: 'Music Lover',
            description: 'Enjoy listening to various genres of music and occasionally learning instruments, which helps me think better and relax.'
        },
        billiards: {
            title: 'Billiards Player',
            description: 'I often play billiards with friends. Though not professional, I enjoy the fun and social aspects of the game.'
        },
        badminton: {
            title: 'Badminton Player',
            description: 'I play badminton weekly for exercise and socializing with friends.'
        },
        coding: {
            title: 'Coding Enthusiast',
            description: 'Passionate about programming, I love exploring new technologies and currently developing AI-based innovative projects.'
        },
        lego: {
            title: 'LEGO Builder',
            description: 'Love building LEGO sets, enjoying the creative process of construction. It\'s my way to relax and express creativity.'
        }
    },
    lifestyle: {
        title: 'Lifestyle',
        work: {
            title: 'Work Life',
            content: 'Specialized in frontend development with extensive experience in React and Next.js. Focus on code quality and user experience, pursuing technical innovation.'
        },
        learning: {
            title: 'Learning Attitude',
            content: 'Maintain a continuous learning mindset, stay updated with technology trends, especially in AI developments.'
        },
        philosophy: {
            title: 'Life Philosophy',
            content: 'Strive for work-life balance, enjoy sports activities, and maintain a positive attitude towards life.'
        }
    },
    status: {
        title: 'Current Status',
        job: 'Currently seeking new career opportunities. Feel free to contact me if you have suitable positions.',
        project: 'Developing innovative AI-based projects. Stay tuned!'
    },
    professional: {
        title: 'Professional Summary',
        summary: 'Over 10 years of frontend development experience, specializing in enterprise application development and team management, with expertise in system architecture design and technical innovation.'
    },
    skills: {
        soft: {
            title: 'Soft Skills',
            teamwork: {
                title: 'Teamwork',
                description: 'I am a team player and I enjoy working with others to achieve common goals.'
            },
            problemSolving: {
                title: 'Problem Solving',
                description: 'I am a problem solver and I enjoy finding solutions to complex problems.'
            },
            communication: {
                title: 'Communication',
                description: 'I am a good communicator and I enjoy communicating with others to achieve common goals.'
            },
            learning: {
                title: 'Learning',
                description: 'I am a quick learner and I enjoy learning new things.'
            }
        },
        technical: {
            title: 'Technical Skills',
            frontend: {
                title: 'Frontend Development',
                description: 'I am a frontend developer and I love using React and Next.js to develop frontend applications.'
            },
            backend: {
                title: 'Backend Development',
                description: 'I am a backend developer and I love using Node.js and Express to develop backend applications.'
            },
            database: {
                title: 'Database',
                description: 'I am a database engineer and I love using MySQL and MongoDB to develop database applications.'
            },
            devops: {
                title: 'DevOps',
                description: 'I am a devops engineer and I love using Docker and Kubernetes to develop devops applications.'
            }
        }
    },
    experience: {
        title: 'Work Experience',
        achievements: 'Achievements',
        cheetah: {
            title: 'Cheetah Mobile',
            description: 'High-level frontend engineer specializing in React and Next.js. Focus on code quality and user experience, pursuing technical innovation.',
            role: 'Frontend Engineer',
            tech: ['React', 'TypeScript', 'Next.js', 'Node.js',
            ],
            achievements1: 'Led company website reconstruction and SEO optimization, achieving significant improvements in traffic and conversion rates.',
            achievements2: 'Designed and implemented next-generation review system with component-based and configurable solutions.',
            achievements3: 'Led team in developing core systems including guild management and Apollo task system.',
            achievements4: 'Optimized system architecture, improved team efficiency, and ensured product stability.',
        },
        alibaba: {
            title: 'Alibaba Group',
            description: 'Frontend engineer specializing in Vue.js and Nuxt.js. Focus on code quality and user experience, pursuing technical innovation.',
            role: 'Frontend Engineer',
            tech: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Element UI'],
            achievements1: 'Independently completed multiple B-end product developments, demonstrating strong technical and project management skills.',
            achievements2: 'Participated in large-scale event technical support, ensuring system stability and performance.',
            achievements3: 'Responsible for developing core functional modules including player page and payment systems.',
        },
        fengteng: {
            title: 'Fengteng Technology',
            description: 'Frontend engineer specializing in Angular and JavaScript. Focus on code quality and user experience, pursuing technical innovation.',
            role: 'Frontend Engineer',
            tech: ['Angular', 'JavaScript', 'Git'],
            achievements1: 'Developed PC applications using Angular2, enhancing user experience.',
            achievements2: 'Managed course system and points system development.',
            achievements3: 'Organized team code reviews to improve code quality.',
        },
        elephant: { 
            title: 'Elephant and Friends',
            description: 'Frontend engineer specializing in HTML, CSS, JavaScript, and Jquery. Focus on code quality and user experience, pursuing technical innovation.',
            role: 'Frontend Engineer',
            tech: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'FTP'],
            achievements1: 'Independently completed company website development with cross-browser compatibility.',
            achievements2: 'Designed and developed marketing campaign pages, increasing user engagement.',
            achievements3: 'Optimized payment process, improving conversion rates',
        }
    },
    projects: {
        title: 'Projects',
        personal: {
            title: 'Personal Projects',
            description: 'Developing innovative AI-based projects. Stay tuned!',
            highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
            // image: '/images/projects/personal-site.png',
            role: 'Frontend Developer',
        },
        dashboard: {
            title: 'Dashboard',
            description: 'Developing innovative AI-based projects. Stay tuned!',
            highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
            // image: '/images/projects/dashboard.png',
        }
    }
} as const;

export default about;