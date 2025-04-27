import React from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  BarChart2, 
  Settings, 
  Bell, 
  MessageSquare, 
  FolderOpen,
  LogOut
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  active = false,
  onClick
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center w-full p-2 rounded-lg text-sm font-medium transition-colors ${
          active 
            ? 'bg-primary-50 text-primary-700' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span className="mr-3">{icon}</span>
        {label}
      </button>
    </li>
  );
};

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'users', label: 'Users', icon: <Users size={20} /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    { id: 'media', label: 'Media Library', icon: <FolderOpen size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-10 flex flex-col transition-transform duration-300 ease-in-out transform lg:translate-x-0">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-600">Pristine Admin</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map(item => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activePage === item.id}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <button className="flex items-center w-full p-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;