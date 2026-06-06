import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SectionCardProps {
  title: string;
  linkLabel?: string;
  onLinkClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function SectionCard({ title, linkLabel, onLinkClick, children, className = '' }: SectionCardProps) {
  return (
    <div className={`bg-white border border-gray-100 shadow-card flex flex-col ${className}`}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-[15px] text-gray-900 font-heading">{title}</h2>
        {linkLabel && (
          <button
            onClick={onLinkClick}
            className="flex items-center gap-1 text-[12px] font-medium text-brand hover:text-brand-dark transition-colors"
          >
            {linkLabel}
            <ArrowUpRight size={13} />
          </button>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
