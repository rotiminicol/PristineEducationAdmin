import React, { useState } from 'react';
import { Bell, Menu, Search, X } from 'lucide-react';
import Avatar from '../ui/Avatar';

interface HeaderProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  notificationCount: number;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, notificationCount, onMenuToggle }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-white border-b border-gray-200 px-4 lg:px-6">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <Menu size={24} />
      </button>

      {/* Search */}
      <div className={`hidden lg:block lg:flex-1 ${showSearch ? 'hidden' : 'lg:flex'}`}>
        <div className="relative max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Mobile search toggle */}
      <div className="flex lg:hidden">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {showSearch ? <X size={20} /> : <Search size={20} />}
        </button>
      </div>

      {/* Full width search on mobile */}
      {showSearch && (
        <div className="absolute left-0 right-0 top-0 z-30 bg-white p-3 lg:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
              placeholder="Search..."
            />
            <button
              onClick={() => setShowSearch(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Right side actions */}
      <div className="flex items-center">
        <button className="relative p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 mr-2">
          <span className="sr-only">View notifications</span>
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center transform translate-x-1 -translate-y-1">
              {notificationCount > 9 ? '9+' : notificationCount}
            </span>
          )}
        </button>

        <div className="relative ml-3">
          <div className="flex items-center">
            <div className="hidden md:block mr-3 text-right">
              <div className="text-sm font-medium text-gray-900">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
            <Avatar src={user.avatar} name={user.name} size="md" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;