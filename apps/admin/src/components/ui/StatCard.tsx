import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
  trendPositive?: boolean;
}

export default function StatCard({ label, value, subtitle, icon, trend, trendPositive }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-card p-5 flex flex-col gap-3 hover:shadow-card-hover transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        <div className="text-brand/60">{icon}</div>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-none font-heading">{value}</p>
        {(trend || subtitle) && (
          <p className={`text-[12px] mt-1.5 ${trendPositive !== undefined ? (trendPositive ? 'text-emerald-600' : 'text-red-500') : 'text-gray-400'}`}>
            {trend || subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
