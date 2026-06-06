import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function PlaceholderPage({ title, description, icon = '🚧' }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-400 text-sm max-w-xs">
        {description ?? 'This section is under construction. Check back soon.'}
      </p>
    </div>
  );
}
