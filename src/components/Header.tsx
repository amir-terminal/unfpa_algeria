import React from 'react';
import { MenuIcon, X, Download } from 'lucide-react';
import TimeRangeSelector from './TimeRangeSelector';
import { TimeRange } from '../types';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  sidebarOpen, 
  setSidebarOpen,
  timeRange,
  setTimeRange
}) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {sidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">Analytics Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <TimeRangeSelector 
            selected={timeRange} 
            onChange={setTimeRange} 
          />
          
          <button className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm transition-colors">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;