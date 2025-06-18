import React from 'react';
import { 
  LayoutDashboard, 
  BarChart, 
  PieChart, 
  LineChart, 
  Settings, 
  Users, 
  Bell, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart size={20} />, label: 'Analytics' },
    { icon: <PieChart size={20} />, label: 'Reports' },
    { icon: <LineChart size={20} />, label: 'Trends' },
    { icon: <Users size={20} />, label: 'Users' },
    { icon: <Bell size={20} />, label: 'Notifications' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  if (!open) {
    return (
      <aside className="w-16 bg-gray-800 border-r border-gray-700">
        <div className="py-4 flex flex-col items-center">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`p-3 w-full flex justify-center ${
                item.active 
                  ? 'text-white bg-gray-700' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              } transition-colors duration-200`}
            >
              {item.icon}
            </button>
          ))}
        </div>
        <div className="mt-auto py-4 flex flex-col items-center border-t border-gray-700">
          <button className="p-3 w-full flex justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
            <LogOut size={20} />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 transition-all duration-300">
      <div className="py-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-3 w-full flex items-center gap-3 ${
              item.active 
                ? 'text-white bg-gray-700' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            } transition-colors duration-200`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-auto py-4 border-t border-gray-700">
        <button className="px-4 py-3 w-full flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200">
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;