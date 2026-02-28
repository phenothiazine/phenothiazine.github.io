import React, { useEffect } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  useEffect(() => {
    // Busuanzi script for static site counting
    const script = document.createElement('script');
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mt-2 font-medium">
      <Eye size={12} className="opacity-60" />
      <span id="busuanzi_container_site_pv" style={{ display: 'none' }}>
        <span id="busuanzi_value_site_pv"></span> 次访问
      </span>
    </div>
  );
};
