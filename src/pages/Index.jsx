import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Flowchart from '@/components/Flowchart';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4">
        <Hero />
        <Flowchart />
      </main>
    </div>
  );
};

export default Index;
