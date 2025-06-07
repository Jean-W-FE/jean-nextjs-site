
import Logo from './logo';
import { useTranslations } from 'next-intl';
import { navItems } from '@/config/site'
import { Header as HeaderUtils } from "@jean-utils/layout";


export function Header(): JSX.Element {
    const t = useTranslations('common');
    const menuItems = navItems.map((item) => {
        return {
            ...item,
            label: t(item.label),
        }
    })
    // todo 翻译不好使了呢
    return (
      <HeaderUtils logo={<Logo/>} menuItems={menuItems} enableAnimation={true}/>
    )
}

export default Header;