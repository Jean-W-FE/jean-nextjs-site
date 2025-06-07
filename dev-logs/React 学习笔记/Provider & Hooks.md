# react Provider & Hooks

最近在使用nextjs 开发个人网站，在开发过程中想自定义一套通用UI组件，且支持全局注册，用到了 React Provider、Context、Hooks。
特以此篇记录下它们三者之间的关系以及使用场景

## Provider 提供者
- Provider 是一个容器组件，用于提供数据或者功能给其子组件。
- 通过Context.Provider 包裹子组件，使得子组件可以访问到Provider中的值。
- 类似于一个“仓库”，存储了可以被子组件共享的数据
```javascript
// 例如我們的 UIProvider
export function UIProvider({ children }: { children: ReactNode }) {
    return (
      <UIContext.Provider value={{
        PageTitle,
        SectionTitle,
        CardTitle,
        SubTitle,
      }}>
        {children}
      </UIContext.Provider>
    );
}
```

## Context 上下文
- Context 是 Provider 和 Hooks 之间的桥梁
- 它定义了可以被共享的数据的类型和结构
- 类似于“仓库的清单”，描述了仓库中有什么
```javascript
// 創建一個 Context
export const UIContext = createContext<UIComponents | null>(null);
```

## Hooks 钩子
- Hooks 是访问 provider中数据的工具
- 通过 useContext 这个内置Hook 来获取Context 中的值
- 可以理解为“取货的方式”，用于在仓库中取出需要的东西
```javascript
 // 我們的 useUI hook
export function useUI() {
    const context = useContext(UIContext);
    if (!context) {
      throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
``` 

## 它们之间的关系
### 1. 数据流向
```
Provider (提供數據) → Context (定義結構) → Hooks (訪問數據) → 組件 (使用數據)
```
### 2. 使用示例
```javascript
// 1. 在應用的頂層使用 Provider
function App() {
  return (
    <UIProvider>      {/* 提供數據 */}
      <HomePage />
    </UIProvider>
  );
}

// 2. 在任何子組件中使用 Hook 訪問數據
function HomePage() {
  const { SectionTitle } = useUI();  // 通過 Hook 獲取數據
  return <SectionTitle>首頁</SectionTitle>;
}
```

### 3. 实际应用场景
1. 主题切换
```javascript
// Provider 提供主題數據
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook 訪問和修改主題
const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}

// 組件中使用
function Button() {
  const { theme } = useTheme();
  return <button className={theme}>點擊</button>;
}
```
2. 用户确认
```javascript
// Provider 提供用戶狀態
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook 訪問用戶信息
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

// 組件中使用
function Profile() {
  const { user } = useAuth();
  return user ? <div>{user.name}</div> : <div>請登錄</div>;
}
```
### 优点
1. 数据共享
   - 避免 props 层层传递
   - 实现了跨组件的状态共享
2. 关注点分离
   - Provider 负责提供数据
   - Hook 负责处理数据的访问逻辑
   - 组件只需要关注如何使用数据
3. 可维护性
   - 状态管理更加集中
   - 逻辑复用更加方便
   - 代码结构更加清晰 
这种模式在 React 应用中非常常见，特别适合处理：
- 全局主題
- 用户确认状态
- 多語言支持
- UI 組件库
- 全局配置
就像我們的 UI 組件系統，通過這種方式，我們實現了組件的全局訪問，同時保持了代碼的組織性和可維護性。