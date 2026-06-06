import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'booking' | 'general' | 'success' | 'failed' | 'upcoming';
}

const variantStyles: Record<string, string> = {
  default:  'bg-gray-100 text-gray-600',
  booking:  'bg-amber-50 text-amber-700 border border-amber-200',
  general:  'bg-purple-50 text-purple-700 border border-purple-200',
  success:  'bg-emerald-50 text-emerald-700 border border-emerald-200',
  failed:   'bg-red-50 text-red-600 border border-red-200',
  upcoming: 'bg-blue-50 text-blue-600 border border-blue-200',
};

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium ${variantStyles[variant]}`}>
      {variant === 'upcoming' && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5" />
      )}
      {label}
    </span>
  );
}
