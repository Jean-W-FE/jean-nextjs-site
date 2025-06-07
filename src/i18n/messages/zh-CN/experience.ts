const experience = {
    title: '工作经历',
    description: '10年以上的前端开发经验，专注于打造优秀的用户体验和高质量的代码。',
    achievements: '主要成就',
    company1: '猎豹移动科技有限公司',
    company2: '阿里巴巴文化娱乐有限公司',
    company3: '风腾科技（北京）有限公司',
    company4: '北京大象和他的朋友们科技有限公司',
    role1: '高级前端开发工程师',
    role2: 'Web前端开发工程师',
    role3: 'Web前端开发工程师',
    role4: 'Web前端开发工程师',
    period1: '2019.05 - 2024.12',
    period2: '2016.09 - 2019.04',
    period3: '2015.05 - 2016.08',
    period4: '2014.04 - 2015.04',
    description1: '负责公司核心系统的前端架构设计与团队管理，主导多个重要项目的开发与重构。',
    description2: '参与多个重大项目开发，包括双11、春节活动等大型活动，担任团队技术负责人。',
    description3: '负责公司官网和后台管理系统的开发与维护。',
    description4: '负责公司官网开发和H5活动页面的制作，主导多个营销活动的技术实现。',

    'achievement1-1': '主导公司官网重构，优化SEO策略，实现流量和转化率的显著提升',
    'achievement1-2': '设计并实现新一代审核系统，通过组件化和配置化方案提升开发效率',
    'achievement1-3': '带领团队完成多个核心系统的开发，包括公会管理、Apollo任务系统等',
    'achievement1-4': '优化系统架构，提升团队开发效率，确保产品稳定性',

    'achievement2-1': '独立完成多个B端产品的开发，展现出色的技术能力和项目管理能力', // Independently completed multiple B-end product developments, demonstrating strong technical and project management skills
    'achievement2-2': '参与大型活动技术保障，确保系统稳定性和性能', 
    'achievement2-3': '负责多个核心功能模块的开发，包括玩家页面、支付系统等',

    'achievement3-1': '使用Angular2开发PC端应用，提升用户体验',
    'achievement3-2': '负责课程系统和积分系统的开发与维护',
    'achievement3-3': '组织团队代码审查，提升代码质量',

    'achievement4-1': '独立完成公司官网开发，确保各主流浏览器兼容性',
    'achievement4-2': '设计并开发多个营销活动页面，提升用户参与度',
    'achievement4-3': '优化支付流程，提升转化率',

    skills: {
        title: '技术技能',
        frontend: {
            title: '前端技术',
            items: {
                0: 'React',
                1: 'Vue.js',
                2: 'TypeScript',
                3: 'Nuxt.js',
                4: 'Nest.js',
            }
        },
        backend: {
            title: '后端技术',
            items: {
                0: 'Node.js',
                1: 'Express',
                2: 'MongoDB',
                3: 'MySQL',
                4: 'RESTful API'
            }
        },
        tools: {
            title: '开发工具',
            items: {
                0: 'Git',
                1: 'Docker',
                2: 'Webpack',
                3: 'Jest',
                4: 'CI/CD'
            }
        }
    }
} as const;

export default experience; 