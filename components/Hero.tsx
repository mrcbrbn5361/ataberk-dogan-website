import { useEffect, useState } from 'react';
import LiveStatus from './LiveStatus';
import { SITE_CONFIG } from '../constants';
import { ArrowRight, Youtube, Gamepad2, Users } from 'lucide-react';
import { api } from '../services/api';
import { StreamStatus } from '../types';

// Custom Kick Icon for Hero
const KickIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3ZM8.5 7V17H11.5V13.5L14.5 17H18L14 12.5L18 8H14.5L11.5 11.5V7H8.5Z" />
  </svg>
);

const Hero = () => {
  const [status, setStatus] = useState<StreamStatus | null>(null);
  const [latestVideo, setLatestVideo] = useState<string>('https://youtube.com/@atadogann');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [streamData, videos] = await Promise.all([
          api.getStreamStatus(),
          api.getLatestVideos()
        ]);
        
        setStatus(streamData);
        
        if (videos && videos.length > 0) {
          setLatestVideo(videos[0].url);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Default gaming background if API fails or loading
  const bgImage = status?.thumbnail || "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Stream Background" 
          className={`w-full h-full object-cover transition-all duration-1000 ${loading ? 'blur-md scale-105' : 'blur-sm opacity-40 scale-100'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-brand-dark/40"></div>
        
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="min-h-[40px] flex justify-center md:justify-start">
             {loading ? (
               <div className="h-9"></div> /* Placeholder to prevent jump */
             ) : (
               <LiveStatus isLive={status?.isLive || false} platform={status?.platform} />
             )}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black italic leading-none animate-in slide-in-from-bottom-5 duration-700 fade-in drop-shadow-2xl">
            ATABERK <br />
            <span className="gradient-text animate-glow">DOĞAN</span>
          </h1>
          
          <div className="text-xl text-zinc-300 max-w-lg mx-auto md:mx-0 leading-relaxed font-light min-h-[80px]">
            {status?.isLive ? (
                <div className="glass-strong p-5 rounded-xl animate-in fade-in zoom-in duration-500 glow-purple border border-purple-500/30">
                    <p className="font-bold text-white flex items-center gap-2 mb-2">
                        <Gamepad2 className="w-5 h-5 text-purple-500" />
                        Şuan Oynanıyor: <span className="gradient-text">{status.game}</span>
                    </p>
                    <p className="text-sm text-zinc-300 line-clamp-1 italic opacity-80">"{status.title}"</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-bold text-pink-500 bg-pink-500/10 px-3 py-1.5 rounded-lg w-fit border border-pink-500/20">
                        <Users className="w-3 h-3" /> {status.viewerCount.toLocaleString()} İzleyici
                    </div>
                </div>
            ) : (
                <>
                    {SITE_CONFIG.tagline} <br/>
                    <span className="opacity-75">Oyun, Trakya samimiyeti ve bitmeyen goygoy için doğru yerdesin.</span>
                </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
             <a href={latestVideo} target="_blank" rel="noreferrer" className="group glass-strong px-8 py-4 rounded-xl font-bold hover:glow-purple transition-all cursor-pointer flex items-center gap-3 border border-purple-500/30 hover:border-purple-500">
                <Youtube className="w-5 h-5 text-purple-500" />
                <span className="gradient-text">Son Videoyu İzle</span>
             </a>
             <a href="https://kick.com/atadogann" target="_blank" rel="noreferrer" className="group relative px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50">
                <KickIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{status?.isLive ? 'Yayına Katıl' : 'Takip Et'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </a>
          </div>
        </div>

        {/* Hero Image/Portrait */}
        <div className="relative hidden md:block h-[600px] w-full">
             {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Silent loading */}
                </div>
             ) : (
                 <>
                    <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-10 rounded-full"></div>
                    <img 
                        src="/images/ataberk-family.jpg" 
                        alt="Ataberk Doğan ve Ailesi" 
                        className="relative z-10 rounded-2xl shadow-2xl border border-white/5 hover:scale-105 transition-all duration-700 transform w-full h-full object-cover"
                    />
                    
                    {/* Floating Stats Card - Only show if actually live */}
                    {status?.isLive && (
                        <div className="absolute -bottom-6 -left-6 bg-brand-panel/90 backdrop-blur p-5 rounded-xl border border-white/10 shadow-2xl z-20 animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Live Status</span>
                            </div>
                            <div className="text-pink-500 font-bold text-3xl font-display">
                                ON AIR
                            </div>
                        </div>
                    )}
                 </>
             )}
        </div>
      </div>
    </section>
  );
};

export default Hero;