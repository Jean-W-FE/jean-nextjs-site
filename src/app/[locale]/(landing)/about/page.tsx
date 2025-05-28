import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  return <>
  <h1>{t('title')}</h1>
  <p>{t('description')}</p>
  <p>工作背景总结：</p>
  <p>兴趣爱好：喜欢看NBA，喜欢玩台球、羽毛球，虽然有点儿小菜，热衷于写代码</p>
  <p>
    当前状态：正在找工作，如果有合适的机会，欢迎联系我。
    正在开发中的项目：基于AI todo sth
  </p>
  
  </>;
}
