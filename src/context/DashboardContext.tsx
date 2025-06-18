import React, { createContext, useContext, ReactNode } from 'react';
import { generateMockData } from '../utils/mockData';

interface DashboardContextType {
  stats: {
    revenue: number;
    revenueChange: number;
    users: number;
    usersChange: number;
    conversionRate: number;
    conversionRateChange: number;
    orders: number;
    ordersChange: number;
  };
  revenueData: Array<{ date: string; value: number }>;
  userData: Array<{ date: string; value: number }>;
  categoryData: Array<{ name: string; value: number }>;
  productData: Array<{ name: string; value: number }>;
  trafficData: Array<{ name: string; value: number }>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Generate mock data
  const mockData = generateMockData();

  return (
    <DashboardContext.Provider value={mockData}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
};