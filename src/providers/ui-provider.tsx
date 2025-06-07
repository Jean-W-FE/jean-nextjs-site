'use client';

import { createContext, ReactNode } from 'react';
import * as HeadingComponents from '@/components/ui/Heading';

// 定義 UI 組件的類型
type UIComponents = {
  PageTitle: typeof HeadingComponents.PageTitle;
  SectionTitle: typeof HeadingComponents.SectionTitle;
  CardTitle: typeof HeadingComponents.CardTitle;
  SubTitle: typeof HeadingComponents.SubTitle;
};

// 創建 Context
export const UIContext = createContext<UIComponents | null>(null);

// Provider 組件
export function UIProvider({ children }: { children: ReactNode }) {
  return (
    <UIContext.Provider 
      value={{
        PageTitle: HeadingComponents.PageTitle,
        SectionTitle: HeadingComponents.SectionTitle,
        CardTitle: HeadingComponents.CardTitle,
        SubTitle: HeadingComponents.SubTitle,
      }}
    >
      {children}
    </UIContext.Provider>
  );
} 