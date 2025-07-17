import Experience from '@/components/about/Experience';
import SoftSkills from '@/components/about/SoftSkills';
import ProfessionalQuality from '@/components/about/Quality';
// import ProjectList from '@/components/about/ProjectList';
import Professional from '@/components/about/Professional';
import LifeStyle from '@/components/about/LifeStyle';
import GapStatus from '@/components/about/GapStatus';

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* 专业简介 */}
      <Professional/>
      {/* 技术能力 */}
      <SoftSkills/>
      {/* 职业素养 */}
      <ProfessionalQuality/>
      {/* 工作经历 */}
      {/* <Experience/> */}

      
      {/* 项目展示 */}
      {/* todo */}
      {/* <ProjectList/> */}
    </main>
  );
}
