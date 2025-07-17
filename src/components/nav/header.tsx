'use client'
import Logo from './logo';
import { useTranslations } from 'next-intl';
import { navItems } from '@/config/site'
import { Header as HeaderUtils } from "jean-react-utils";

export function Header(): JSX.Element {
    const t = useTranslations('common');
    const menuItems = navItems.map((item) => ({
        ...item,
        label: t(item.label),
        className: {
            pc: item.className?.pc || 'text-muted-foreground hover:text-foreground transition-colors',
            mobile: item.className?.mobile || 'text-lg font-medium text-center text-muted-foreground hover:text-primary transition-colors'
        }
    }));

    return (
        <HeaderUtils 
            className="bg-background/60 border-border" 
            logo={<Logo/>} 
            menuItems={menuItems} 
            enableAnimation={true}
            theme={{
                activeClassName: 'text-primary',
                mobileMenu: {
                    button: 'hover:bg-primary/10 rounded-lg transition-colors',
                    nav: 'bg-background/80 backdrop-blur-lg border-t border-border'
                }
            }}
        />
    );
}

export default Header;