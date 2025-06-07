# 组件库 vs 传统站点开发差异

## 组件库开发流程

### 1. 初始化项目结构
```
mkdir jean-utils
cd jean-utils
mkdir -p {packages/{ui,theme},examples/demo}
```

### 2. 创建工作空间配置文件
```yaml
# jean-utils/pnpm-workspace.yaml
packages: 
    - 'packages/*'
    - 'examples/*'

```

### 3. 创建根目录package.json
```json
// jean-utils/package.json
{
  "name": "@jean-wang-dev/monorepo",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "clean": "turbo run clean",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "turbo run build --filter=!./examples/* && changeset publish"
  },
  "devDependencies": {
    "@changesets/cli": "^2.27.1",
    "@types/node": "^20.11.25",
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "prettier": "^3.2.5",
    "turbo": "^1.12.4",
    "typescript": "^5.4.2"
  },
  "packageManager": "pnpm@8.15.4"
}
```

### 4. 创建 UI 包的配置
```json
// jean-utils/packages/ui/package.json
{
  "name": "@jean-wang-dev/ui",
  "version": "0.1.0",
  "private": true,
  "sideEffects": false,
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": [
    "dist/**"
  ],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist",
    "lint": "eslint \"src/**/*.ts*\"",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "eslint": "^8.57.0",
    "eslint-config-custom": "workspace:*",
    "react": "^18.2.0",
    "tsup": "^8.0.2",
    "typescript": "^5.4.2"
  }
}

```

### 5. 创建 UI 包 tsconfig
```json
// jean-utils/packages/ui/tsconfig.json
{
  "extends": "tsconfig/react-library.json",
  "include": ["src"],
  "exclude": ["node_modules", "dist"],
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```
### 6. 创建构建配置
```typescript
// jean-utils/packages/ui/tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
}); 

```

### 7. 创建示例项目
```json
// jean-utils/examples/demo/package.json
{
  "name": "demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@jean-wang-dev/ui": "workspace:*",
    "next": "14.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.25",
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "typescript": "^5.4.2"
  }
} 
```

## 开发流程
### 1. 安装依赖
```
cd ../jean-utils
pnpm install 
```

### 2. 开发第一个组件
```
cd ../jean-utils/packages/ui
mkdir -p src/components/Button
```

### 3. 运行开发服务器
```bash
# ../jean-utils/packages/ui
pnpm dev
```
<!--  -->

## 总结
组件库开发与传统站点的开发主要区别：
1. 开发流程不同
   - 组件库需要考虑可复用性和通用性
   - 需要编写完整的类型定义
   - 需要提供完整的文档和使用示例
2. 构建方式不同
   - 组件库需要输出多种模块格式（CommonJS、ESM）
   - 需要生成类型声明文件
   - 需要考虑tree-shaking
3. 测试要求不同
   - 需要更完整的单元测试覆盖
   - 需要视觉回归测试
   - 需要在不同环境下测试
4. 版本管理不同
   - 需要遵循*语义化版本*
   - 需要*维护更新日志*
   - 需要考虑*向后兼容性*