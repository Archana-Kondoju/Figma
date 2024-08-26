// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto flex flex-grow mt-8">
        <div className="flex-grow ml-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
