import { useContext } from 'react';
import { UIContext } from '@/providers/ui-provider';

export function useUI() {
  const context = useContext(UIContext);
  
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  
  return context;
} 

export default useUI;