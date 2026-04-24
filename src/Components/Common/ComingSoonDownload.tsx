// components/Common/ComingSoonDownload.tsx
import React from 'react';
import { Download, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

interface ComingSoonDownloadProps {
  title: string;
  description?: string;
  expectedDate?: string;
}

const ComingSoonDownload: React.FC<ComingSoonDownloadProps> = ({ 
  title, 
  description = "Ce document sera bientôt disponible", 
  expectedDate = "Novembre 2026" 
}) => {
  return (
    <div className="relative group">
      <button
        disabled
        className="bg-gray-400 text-gray-600 px-8 py-4 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2 justify-center opacity-60"
      >
        <Download size={20} />
        {title}
      </button>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        <Clock size={12} className="inline mr-1" />
        Disponible {expectedDate}
        <br />
        <span className="text-gray-400 text-xs">{description}</span>
      </div>
    </div>
  );
};

export default ComingSoonDownload;