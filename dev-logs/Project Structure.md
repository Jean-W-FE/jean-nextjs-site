# Jean's 項目結構設計方案

## 一、倉庫結構

```
GitHub 組織：jean-wang-dev/
├── jean-nextjs-site/     # 主站倉庫
├── jean-blog-site/       # 博客倉庫
└── jean-utils/           # 共享組件庫倉庫
```

## 二、共享組件庫管理

### 1. 發布到 GitHub Packages
```json
// jean-utils/package.json
{
  "name": "@jean-wang-dev/ui",
  "version": "1.0.0",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 2. 在項目中使用
```json
// jean-nextjs-site/package.json 或 jean-blog-site/package.json
{
  "dependencies": {
    "@jean-wang-dev/ui": "^1.0.0"
  }
}

// .npmrc
@jean-wang-dev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## 三、開發工作流

### 1. 本地開發流程
```bash
# 1. 克隆共享組件庫
git clone https://github.com/jean-wang-dev/jean-utils.git
cd jean-utils

# 2. 安裝依賴並構建
pnpm install
pnpm build

# 3. 本地連接（用於開發）
pnpm link

# 4. 在主站或博客項目中使用
cd ../jean-nextjs-site
pnpm link @jean-wang-dev/ui
```

### 2. 發布流程
```yaml
# jean-utils/.github/workflows/publish.yml
name: Publish Package
on:
  push:
    tags:
      - 'v*'
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: pnpm install
      - run: pnpm build
      - run: pnpm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

## 四、版本管理策略

### 1. 共享組件庫
- 使用語義化版本
- 維護更新日誌
- 使用 Git 標籤管理版本

### 2. 主站和博客
- 獨立的版本控制
- 可以使用不同版本的共享組件
- 根據需要進行更新

## 五、CI/CD 配置

### 1. 共享組件庫
```yaml
# 測試和構建
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: pnpm install
      - run: pnpm test
      - run: pnpm build
```

### 2. 主站和博客
```yaml
# Vercel 自動部署
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/actions/deploy@v2
```

## 六、開發建議

1. **共享組件開發**
   - 使用 Storybook 進行組件開發和測試
   - 編寫詳細的組件文檔
   - 提供完整的類型定義

2. **版本控制**
   - 主站和博客使用固定版本的組件庫
   - 定期更新依賴
   - 做好更新前的測試

3. **部署流程**
   - 共享組件庫的更改需要經過完整的測試
   - 主站和博客可以獨立部署
   - 設置自動化測試和部署流程

## 七、注意事項

1. **權限管理**
   - 設置適當的 GitHub 倉庫權限
   - 管理 npm 包的訪問權限
   - 保護部署密鑰和環境變量

2. **依賴管理**
   - 使用 pnpm 管理依賴
   - 鎖定依賴版本
   - 定期更新和安全審計

3. **文檔維護**
   - 保持 README 文檔更新
   - 記錄重要的更改
   - 提供清晰的使用說明

---

最後更新：2024-03-19
作者：Jean Wang 