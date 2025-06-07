# Jean's 共享組件庫設計方案

## 一、項目結構

```
@jean-utils/          # 組織名稱
  ui/                 # UI 組件庫
    package.json
    src/
      components/     # 共享組件
        Header/
        Footer/
        Navigation/
      hooks/          # 共享 hooks
      styles/         # 共享樣式
      constants/      # 共享常量
  theme/             # 主題包
    package.json
    src/
      tokens/        # 設計令牌
      colors/        # 顏色系統
      typography/    # 排版系統
```

## 二、實現方案

### 1. 組件庫發布
```json
// @jean-utils/ui/package.json
{
  "name": "@jean-utils/ui",
  "version": "1.0.0",
  "private": true,
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "next": "^14.0.0"
  }
}
```

### 2. 主站配置
```json
// jean-nextjs-site/package.json
{
  "dependencies": {
    "@jean-utils/ui": "workspace:*",
    "@jean-utils/theme": "workspace:*"
  }
}
```

### 3. 博客站配置
```json
// jean-blog-site/package.json
{
  "dependencies": {
    "@jean-utils/ui": "workspace:*",
    "@jean-utils/theme": "workspace:*"
  }
}
```

## 三、交互設計

### 1. 導航系統
```typescript
// @jean-utils/ui/src/constants/navigation.ts
export const SITE_NAVIGATION = {
  main: {
    home: '/',
    about: '/about',
    blog: 'https://blog.jeanwang.dev',  // 博客站點地址
    projects: '/projects'
  },
  blog: {
    home: '/',
    categories: '/categories',
    tags: '/tags',
    archive: '/archive'
  }
} as const;
```

### 2. 跳轉邏輯
```typescript
// @jean-utils/ui/src/components/Navigation/index.tsx
import { useRouter } from 'next/router';
import { SITE_NAVIGATION } from '../../constants';

export const Navigation = () => {
  const router = useRouter();
  
  const handleNavigation = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      router.push(url);
    }
  };
  
  return (
    // 導航組件實現
  );
};
```

## 四、樣式共享

### 1. 設計令牌
```typescript
// @jean-utils/theme/src/tokens/index.ts
export const tokens = {
  colors: {
    primary: '#6366f1',
    secondary: '#4f46e5',
    // ...其他顏色
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace'
    },
    // ...其他排版設置
  }
};
```

### 2. UnoCSS 配置共享
```typescript
// @jean-utils/theme/src/uno.config.ts
import { defineConfig } from 'unocss';
import { tokens } from './tokens';

export default defineConfig({
  theme: {
    colors: tokens.colors,
    fontFamily: tokens.typography.fontFamily
  },
  // ...其他配置
});
```

## 五、開發工作流

1. **本地開發**
   - 使用 pnpm workspace 管理多項目
   - 共享組件庫使用 watch 模式
   - 支持熱更新

2. **發布流程**
   - 使用 Changesets 管理版本
   - GitHub Actions 自動發布
   - 自動生成更新日誌

3. **代碼質量**
   - ESLint 共享配置
   - Prettier 共享配置
   - TypeScript 共享配置

## 六、部署策略

1. **主站部署**
   - Vercel 平台
   - 主域名：jeanwang.dev
   - 自動部署工作流

2. **博客站部署**
   - Vercel 平台
   - 子域名：blog.jeanwang.dev
   - 自動部署工作流

## 七、SEO 優化

1. **域名策略**
   - 使用子域名區分不同站點
   - 配置適當的 robots.txt
   - 設置站點地圖

2. **元數據管理**
   - 共享 meta 組件
   - 動態生成標題和描述
   - 社交媒體標籤支持

## 八、監控和分析

1. **性能監控**
   - Vercel Analytics 整合
   - 性能指標收集
   - 錯誤追蹤

2. **用戶分析**
   - Google Analytics 整合
   - 用戶行為追蹤
   - 轉化率分析

---

最後更新：2024-03-19
作者：Jean Wang 