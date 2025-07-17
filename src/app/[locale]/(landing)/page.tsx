import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import TechStack from '@/components/home/TechStack';
import Portfolio from '@/components/home/Portfolio';

export default function HomePage() {
  return (
    <div className='home-page min-h-screen'>
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
    </div>
  );
} 
