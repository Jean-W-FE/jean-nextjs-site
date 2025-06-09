'use client'
import Logo from './logo';
import { useTranslations } from 'next-intl';
import { navItems } from '@/config/site'
import { Header as HeaderUtils } from "jean-utils";


export function Header(): JSX.Element {
    const t = useTranslations('common');
    const menuItems = navItems
    .map((item) => {
        return {
            ...item,
            label: t(item.label),
        }
    })
    return (
      <HeaderUtils className='header' logo={<Logo/>} menuItems={menuItems} enableAnimation={true}/>
    )
}

export default Header;