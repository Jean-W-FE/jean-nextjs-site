
interface ProjectProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string[];
  techStack?: string[];
  image?: string;
  tags?: string[];
  link?: string;
  highlight?: string;
}

export const PROJECTS = [
  {
    id: 'live-management',
    icon: 'manage',
    title: 'Live Management Console',
    description: '基于 Vue.js 和 TypeScript 的直播管理平台，负责主要功能模块开发：',
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
    tags: ['Vue.js', 'TypeScript', 'Element Plus'],
    link: '/projects/live-management'
  },
  {
    id: 'company-website',
    title: 'Corporate Website',
    icon: 'globe',
    description: '企業官網，展示公司產品和服務',
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
    title: 'Backend Service Systems',
    icon: 'server',
    description: '後端服務系統，處理核心業務邏輯',
    highlight: '多个核心业务系统的统一架构设计, 高並發處理能力',
    details: [
      '统一技术栈：采用 React + TypeScript + Ant Design + Mobx，提升系统扩展性与稳定性',
      '支付平台：支持多应用、多渠道接入，提供统一支付解决方案',
      'Apollo任务平台：实现任务系统渗透率提升至10%',
      'DSP投放平台：优化素材管理，提升投放效率',
      '設計了微服務架構',
      '實現了數據緩存和負載均衡',
      '提供了完整的 API 文檔'
    ],
    techStack: [
      'React',
      'TypeScript',
      'Ant Design',
      'Mobx',
      'Webpack'
    ],
    image: '/images/projects/backend.png',
  },
  {
    id: 'system-refactor',
    title: 'Legacy System Refactoring',
    icon: 'cube',
    description: '舊系統重構項目',
    highlight: '效率提升50%，成本降低40%,顯著提升了開發效率',
    details: [
      '直播审核系统：实现JSON配置化与动态组件化，代码冗余降低40%，审核效率提升60%',
      'Push平台重构：升级至Vue3 + Vite + TypeScript技术栈，支持容器化部署',
      '成本优化：人力成本降低40%，机器成本降低40%',
      '效率提升：开发效率提升50%，运维效率显著提升',
      '將 jQuery 系統遷移到 Vue.js',
      '重構了數據流管理',
      '優化了構建流程'
    ],
    techStack: [
      'Vue3',
      'Vite',
      'TypeScript',
      'Docker',
      'JSON Schema'
    ],
    image: '/images/projects/refactor.png',
  },
  {
    id: 'node-middleware',
    title: 'Node.js Middleware, Web中间层服务架构',
    icon: 'signal',
    description: '基于Node.js搭建企业级Web中间层服务：',
    highlight: '效率提升50%，成本降低40%,顯著提升了開發效率,支撑多个业务前台项目的统一部署方案',
    details: [
      '核心功能：支持静态托管、EJS服务端渲染、反向代理配置',
      '架构设计：封装统一中间件，增强系统扩展性与可维护性',
      '路由优化：结合前端路由表自动映射静态资源，实现SPA路由回退',
      '部署优化：从PM2多进程部署优化至Nginx托管，提升部署效率与访问速度',
      '實現了請求日誌記錄',
      '添加了安全認證機制',
      '支持插件化擴展'
    ],
    techStack: [
      'Node.js',
      'Express',
      'EJS',
      'Nginx',
      'PM2'
    ],
    image: '/images/projects/node.png',
  }
];