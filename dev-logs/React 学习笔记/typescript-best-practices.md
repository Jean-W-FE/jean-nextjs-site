# React + TypeScript 最佳實踐指南

## 一、類型定義的模塊化組織

### 1. 目錄結構
```
src/
  types/
    index.ts              # 統一導出
    about/               # 按業務模塊分類
      experience.ts
      skills.ts
    blog/
      post.ts
      category.ts
    common/             # 通用類型
      meta.ts
      i18n.ts
    ui/                 # UI 組件類型
      button.ts
      form.ts
```

### 2. 類型定義最佳實踐

```typescript
// 示例：src/types/about/experience.ts
/**
 * 工作經驗項目接口
 */
export interface ExperienceItem {
  /** 公司名稱（國際化 key） */
  company: string;
  /** 工作時間段 */
  period: string;
  // ... 其他字段
}

/**
 * 類型常量
 */
export const EXPERIENCE_TYPES = {
  CHEETAH: "experience.cheetah",
  ALIBABA: "experience.alibaba",
} as const;
```

### 3. 類型導出和導入
```typescript
// src/types/index.ts
export * from './about/experience';
export * from './blog/post';
// ... 其他模塊導出

// 使用時
import { ExperienceItem, EXPERIENCE_TYPES } from '@/types';
```

## 二、TypeScript 配置最佳實踐

### 1. tsconfig.json 推薦配置
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### 2. 路徑別名
- 使用 `@/` 作為源碼根目錄
- 避免使用相對路徑的 `../../`
- 保持導入路徑的清晰和一致

## 三、React 組件類型定義

### 1. Props 類型定義
```typescript
interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MyComponent: React.FC<Props> = ({
  title,
  description,
  children,
  onClick
}) => {
  // ...
};
```

### 2. 自定義 Hooks 類型
```typescript
interface UseUIReturn {
  SectionTitle: React.FC<{ children: React.ReactNode }>;
  CardTitle: React.FC<{ children: React.ReactNode }>;
}

const useUI = (): UseUIReturn => {
  // ...
};
```

## 四、最佳實踐原則

### 1. 類型組織
- 按業務模塊分類存放
- 相關類型放在同一文件
- 使用統一的導出入口

### 2. 類型命名
- 接口使用 `I` 前綴或直接描述性名稱
- 類型使用 `T` 前綴或 `Type` 後綴
- 常量使用全大寫下劃線

### 3. 文檔和註釋
- 使用 JSDoc 註釋
- 為每個接口和類型添加描述
- 為複雜的字段添加說明

### 4. 代碼質量
- 啟用嚴格的 TypeScript 檢查
- 使用 ESLint 的 TypeScript 規則
- 定期進行類型檢查和重構

## 五、常見問題和解決方案

### 1. 類型擴展
```typescript
interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

interface ButtonProps extends BaseProps {
  onClick: () => void;
  disabled?: boolean;
}
```

### 2. 泛型使用
```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  // ...
};
```

## 六、工具和建議

### 1. 推薦工具
- TypeScript ESLint
- Prettier
- VSCode TypeScript 插件

### 2. 開發流程
- 先定義類型，後實現功能
- 定期更新類型定義
- 保持類型和實現的同步

## 七、總結

良好的類型組織能夠：
- 提高代碼可維護性
- 減少運行時錯誤
- 改善開發體驗
- 加速團隊協作

---

最後更新：2024-03-19
作者：Jean Wang 