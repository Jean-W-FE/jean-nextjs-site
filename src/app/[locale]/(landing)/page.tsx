import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import TechStack from '@/components/home/TechStack';
import Portfolio from '@/components/home/Portfolio';

export default function HomePage() {
  return (
    <main>
        {/* 简单自我介绍 */}
      <Hero />
      {/* 工作经历 todo: 添加工作经历 */}
      {/* 核心技术栈 */}
      <TechStack />
      {/* 项目展示 */}
      <Portfolio />
      <About />
    </main>
  );
} 