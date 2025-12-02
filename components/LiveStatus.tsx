import React from 'react';
import { Radio } from 'lucide-react';

interface LiveStatusProps {
  isLive: boolean;
  platform?: string;
}

const LiveStatus: React.FC<LiveStatusProps> = ({ isLive, platform = "Twitch" }) => {
  if (!isLive) return null;

  return (
    <a href="#" className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] cursor-pointer z-50">
      <span className="absolute w-full h-full bg-gradient-to-br from-orange-500 to-red-600 opacity-50 group-hover:opacity-70 transition-opacity"></span>
      <span className="absolute top-0 right-0 w-3 h-3 -mr-1 -mt-1 bg-white rounded-full animate-ping"></span>
      <span className="absolute top-0 right-0 w-3 h-3 -mr-1 -mt-1 bg-white rounded-full"></span>
      
      <div className="relative flex items-center space-x-2">
        <Radio className="w-5 h-5 animate-pulse" />
        <span className="uppercase tracking-wider text-sm">ŞU AN {platform}'TE CANLI!</span>
      </div>
    </a>
  );
};

export default LiveStatus;