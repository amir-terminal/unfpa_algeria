import React, { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      <TopBar />
      <main className="flex-1 pb-20 pt-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;