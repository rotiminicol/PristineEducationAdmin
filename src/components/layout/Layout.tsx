import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  
  // Mock user data
  const user = {
    name: 'Admin User',
    email: 'admin@pristine-education.com',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 transform transition duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar activePage={activePage} onNavigate={handlePageChange} />
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden lg:block lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:w-64">
        <Sidebar activePage={activePage} onNavigate={handlePageChange} />
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header 
          user={user} 
          notificationCount={5} 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
        />
        
        <main className="flex-1 p-4 lg:p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-4 px-4 lg:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Pristine Education. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;