import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default MainLayout; 