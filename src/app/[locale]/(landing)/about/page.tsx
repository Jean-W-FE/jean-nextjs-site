import ExperienceCardList from '@/components/about/Experience';
import TechnicalSkills from '@/components/about/TechnicalSkills';
import ProfessionalQuality from '@/components/about/Quality';
import ProjectList from '@/components/about/ProjectList';
import Professional from '@/components/about/Professional';

const genPageClassName = (page: string) => {
  switch(page) {
    case 'about':
      return `min-h-screen relative bg-gradient-to-b from-white to-purple-50 text-gray-800`;
    case 'experience':
      return `min-h-screen relative bg-gradient-to-b from-white to-purple-50 text-gray-800`;
    case 'blog':
      return `min-h-screen relative bg-gradient-to-b from-white to-purple-50 text-gray-800`;
    case 'contact':
      return `min-h-screen relative bg-gradient-to-b from-white to-purple-50 text-gray-800`;
  }
}
export default function AboutPage() {
  return (
    <main className={genPageClassName('about')}>
      {/* 专业简介 */}
      <Professional/>
      {/* 技术能力 */}
      <TechnicalSkills/>
      {/* 职业素养 */}
      <ProfessionalQuality/>
      {/* 工作经历 */}
      <ExperienceCardList/>
      {/* 项目展示 */}
      {/* todo */}
      {/* <ProjectList/> */}
    </main>
  );
}
