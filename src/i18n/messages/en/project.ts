export default {
    project: {
       list: [
        {
                id: 'live-management',
                icon: 'manage',
                title: 'Live CMS系统',
                description: '基于 Webpack5 + Vue2 直播内容管理平台，负责主要功能模块开发：',
                details: [
                    '直播间管理：实现多维度数据展示、实时监控、快速操作等功能',
                    '主播管理：包含主播资料、收益统计、等级体系、违规记录等',
                    '数据分析：使用 ECharts 实现数据可视化，包括直播数据、收益数据、用户行为等多维度分析',
                    '多语言支持：基于 i18n 实现中英文国际化',
                    '权限管理：基于 RBAC 模型实现细粒度的权限控制系统',
                    '實現了實時數據統計和監控功能',
                    '優化了系統性能，提升了 50% 的響應速度',
                    '設計了可擴展的架構，支持多平台接入'
                ],
                techStack: [
                    'Vue 2.x', 
                    'TypeScript',
                    'Element UI Plus',
                    'ECharts',
                    'Webpack 5'
                ],
                image: '/images/projects/liveme.png',
        },
        {
            id: 'Push-System',
            icon: 'server',
            title: 'Push 系统',
            description: '基于 Vue3 + Vite + TypeScript 的 Push 系统，支持多平台推送管理，实现精准的用户群体推送，支持多种推送类型和模板',
            highlight: '',
            details: [
            ]
        },
        {
            id: 'company-website',
            icon: 'globe',
            title: '企業官網',
            description: '基于 Next.js 和 React 的企業官網，展示公司產品和服務',
            highlight: 'SEO 優化效果顯著 SEO 優化效果顯著流量增长30%，转化提升30%',
            details: [
                '重构站点架构：优化站点结构、实现URL静态化，显著提升页面加载速度',
                'SEO优化：提升收录量50%+，带来30%流量增长，搜索排名显著提升',
                '转化率优化：登录注册转化率提高30%，有效改善用户体验',
                '性能优化：实现静态资源优化、懒加载、预加载等策略',
                '實現了多語言支持',
                '優化了頁面加載速度',
                '提升了用戶體驗和轉化率'
            ],
            techStack: [
                'Next.js',
                'React',
                'TypeScript',
                'SEO优化',
                'Performance优化'
            ],
            image: '/images/projects/website.png',
        },
        {
            id: 'backend-systems',
            icon: 'server',
            title: '微服务',
            description: '基于 React + TypeScript + Ant Design + Mobx 的企業官網，展示公司產品和服務',
            highlight: '多个核心业务系统的统一架构设计, 高並發處理能力',
            details: [
            ]
        }
       
      ]
        // Add more translations here
    }
} as const;
