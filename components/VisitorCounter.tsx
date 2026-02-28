import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error('Failed to fetch visitor stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-2 font-medium">
      <Eye size={12} className="opacity-60" />
      <span>{views.toLocaleString()} 次访问</span>
    </div>
  );
};
