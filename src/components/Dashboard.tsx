import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import StatCard from './StatCard';
import AreaChartWidget from './charts/AreaChartWidget';
import BarChartWidget from './charts/BarChartWidget';
import LineChartWidget from './charts/LineChartWidget';
import PieChartWidget from './charts/PieChartWidget';
import { TimeRange } from '../types';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart 
} from 'lucide-react';

interface DashboardProps {
  timeRange: TimeRange;
}

const Dashboard: React.FC<DashboardProps> = ({ timeRange }) => {
  const { stats } = useDashboardContext();

  return (
    <div className="space-y-6 pb-6">
      <section>
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Revenue"
            value={`$${stats.revenue.toLocaleString()}`}
            change={stats.revenueChange}
            icon={<DollarSign className="text-emerald-500" />}
          />
          <StatCard
            title="Users"
            value={stats.users.toLocaleString()}
            change={stats.usersChange}
            icon={<Users className="text-blue-500" />}
          />
          <StatCard
            title="Conversion Rate"
            value={`${stats.conversionRate}%`}
            change={stats.conversionRateChange}
            icon={<TrendingUp className="text-purple-500" />}
          />
          <StatCard
            title="Orders"
            value={stats.orders.toLocaleString()}
            change={stats.ordersChange}
            icon={<ShoppingCart className="text-orange-500" />}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartWidget title="Revenue Trend" timeRange={timeRange} />
        <LineChartWidget title="User Growth" timeRange={timeRange} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BarChartWidget title="Sales by Category" timeRange={timeRange} />
        <BarChartWidget title="Top Products" timeRange={timeRange} variant="horizontal" />
        <PieChartWidget title="Traffic Sources" timeRange={timeRange} />
      </section>
    </div>
  );
};

export default Dashboard;