import React, { ReactNode } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './globals.css';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import SearchBar from './components/Searchbar';
import Pagination from './components/Pagination';
export const metadata = {
  title: 'Figma',
  description: 'Figma-NextJS-project',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) { // Add the type here
  return (
    <html lang="en">
      <body className='bg-[#f9fafb] font-sans'>
        <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumb/>
        <div className="container mx-auto flex justify-between items-center">
              <SearchBar />
            </div>
          <main className="container mx-auto flex flex-grow mt-8">
          
            <Sidebar />
            <div className="flex-grow ml-4">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
