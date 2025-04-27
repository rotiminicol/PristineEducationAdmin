import React from 'react';
import { cn } from '../../utils/cn';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm p-6",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 rounded-full bg-primary-50 text-primary-600">
          {icon}
        </div>
      </div>
      
      <div className="mt-2">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        
        {change && (
          <p className={cn(
            "text-sm font-medium mt-1 flex items-center",
            change.positive ? "text-green-600" : "text-red-600"
          )}>
            <span className="mr-1.5">
              {change.positive ? '↑' : '↓'}
            </span>
            {Math.abs(change.value)}%
            <span className="text-gray-500 ml-1">from last month</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;