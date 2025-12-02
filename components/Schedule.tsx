import React, { useEffect, useState } from 'react';
import { Youtube, MonitorOff, Gamepad2, CalendarClock } from 'lucide-react';
import { api } from '../services/api';
import { ScheduleItem } from '../types';

// Custom Kick Icon
const KickIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3ZM8.5 7V17H11.5V13.5L14.5 17H18L14 12.5L18 8H14.5L11.5 11.5V7H8.5Z" />
  </svg>
);

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const data = await api.getSchedule();
        setSchedule(data);
      } catch (e) {
        console.error("Schedule load failed", e);
      } finally {
        setLoading(false);
      }
    };
    loadSchedule();
  }, []);

  const getIcon = (platform: string) => {
    switch(platform) {
        case 'Kick': return <KickIcon className="w-5 h-5 text-black" />;
        case 'YouTube': return <Youtube className="w-5 h-5 text-red-500" />;
        default: return <MonitorOff className="w-5 h-5 text-zinc-600" />;
    }
  };

  const getCardStyle = (platform: string) => {
      if (platform === 'Offline') return 'border-zinc-800 bg-zinc-900/50 opacity-50';
      if (platform === 'Kick') return 'border-[#53FC18]/30 bg-[#53FC18] text-black hover:bg-[#53FC18]/90'; // Kick style (Green background for cards looks cool or maybe outline)
      // Let's stick to dark theme with accent for Kick to match site better, high contrast green text
      if (platform === 'YouTube') return 'border-red-900/50 bg-red-900/10 hover:bg-red-900/20';
      return 'border-zinc-700 bg-zinc-800';
  };
  
  // Overriding getCardStyle for better dark mode aesthetics
  const getCardStyleEnhanced = (platform: string) => {
      if (platform === 'Offline') return 'glass opacity-50';
      if (platform === 'Kick') return 'glass hover:glow-purple hover:border-[#53FC18]/50';
      if (platform === 'YouTube') return 'glass hover:glow-pink hover:border-pink-500/50';
      return 'glass hover:glow-purple';
  };
  
  const getTextColor = (platform: string) => {
      if (platform === 'Kick') return 'text-[#53FC18]';
      if (platform === 'YouTube') return 'text-red-500';
      return 'text-zinc-400';
  }

  return (
    <section id="schedule" className="py-24 bg-[#14141C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
             <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2 block">Yayın Akışı</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
               BU HAFTA <span className="gradient-text">NE YAPIYORUZ?</span>
             </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Promo Box */}
            <div className="lg:col-span-1 glass-strong rounded-2xl p-6 flex flex-col justify-center text-white glow-purple transform md:rotate-1 border border-purple-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 pointer-events-none"></div>
                <Gamepad2 className="w-12 h-12 mb-4 text-purple-500 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 gradient-text relative z-10">Yayını Kaçırma!</h3>
                <p className="opacity-90 mb-6 text-sm relative z-10">Anlık bildirimler ve sürpriz yayınlar için Discord sunucumuza katılmayı unutma.</p>
                <a href="https://discord.gg/ataberk-dogan-in-yeri-597053493471346708" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all relative z-10 text-center">
                    Discord'a Katıl
                </a>
            </div>

            {/* Schedule Grid */}
            <div className="lg:col-span-3">
                {loading ? (
                    <div className="h-full flex flex-col items-center justify-center bg-zinc-900/30 rounded-xl border border-white/5 min-h-[300px]">
                        <CalendarClock className="w-12 h-12 text-zinc-700 animate-pulse mb-4" />
                        <p className="text-zinc-500">Takvim güncelleniyor...</p>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {schedule.map((item, index) => (
                            <div key={index} className={`p-5 rounded-xl border transition-all duration-300 ${getCardStyleEnhanced(item.platform)}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <span className="font-bold text-lg text-white">{item.day}</span>
                                    <div className={`p-1 rounded ${item.platform === 'Kick' ? 'bg-[#53FC18] text-black' : ''}`}>
                                         {getIcon(item.platform)}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-display font-bold text-zinc-200">{item.time}</p>
                                    <p className={`text-sm font-medium ${getTextColor(item.platform)}`}>{item.activity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;