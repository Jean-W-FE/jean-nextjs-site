'use client'
import Logo from './logo';
import { useTranslations } from 'next-intl';
import { navItems } from '@/config/site'
import { Header as HeaderUtils } from "jean-react-utils";

export function Header(): JSX.Element {
    const t = useTranslations('common');
    const menuItems = navItems.map((item) => ({
        ...item,
        label: t(item.label),  // 暫時直接替換掉 nav. 前綴
        className: {
            pc: item.className?.pc || 'text-gray-600 hover:text-black transition-colors',
            mobile: item.className?.mobile || 'text-lg font-medium text-center text-gray-600 hover:text-purple-600 transition-colors'
        }
    }));

    return (
        <HeaderUtils 
            className="header" 
            logo={<Logo/>} 
            menuItems={menuItems} 
            enableAnimation={true}
        />
    );
}

export default Header;