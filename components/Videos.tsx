import { useEffect, useState } from 'react';
import { Play, Youtube, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { VideoContent } from '../types';

// Custom Kick Icon
const KickIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V21H3V3ZM8.5 7V17H11.5V13.5L14.5 17H18L14 12.5L18 8H14.5L11.5 11.5V7H8.5Z" />
  </svg>
);

const Videos = () => {
  const [videos, setVideos] = useState<VideoContent[]>([]);
  const [shorts, setShorts] = useState<VideoContent[]>([]);
  const [clips, setClips] = useState<VideoContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [videoData, shortsData, clipData] = await Promise.all([
          api.getLatestVideos(),
          api.getLatestShorts(),
          api.getClips()
        ]);
        setVideos(videoData);
        setShorts(shortsData);
        setClips(clipData);
      } catch (error) {
        console.error("Failed to fetch videos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading) {
      return (
        <section id="videos" className="py-24 bg-[#0A0A0F] min-h-[600px] flex items-center justify-center">
            <div className="text-center">
                <Loader2 className="w-10 h-10 text-purple-500 animate-spin mx-auto mb-4" />
                <p className="text-zinc-500 animate-pulse">YouTube & Kick verileri yükleniyor...</p>
            </div>
        </section>
      );
  }

  return (
    <section id="videos" className="py-24 relative bg-[#0A0A0F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  SON <span className="gradient-text">VİDEOLAR</span>
                </h2>
                <p className="text-zinc-400">YouTube kanalımdan en güncel içerikler anlık olarak burada.</p>
             </div>
             <a href="https://youtube.com/@atadogann" target="_blank" rel="noreferrer" className="glass-strong px-6 py-3 rounded-xl font-bold transition-all hover:glow-purple flex items-center gap-2 border border-purple-500/30 hover:border-purple-500 group">
                <Youtube className="w-5 h-5 text-purple-500 group-hover:text-pink-500 transition-colors" /> 
                <span className="group-hover:text-purple-400 transition-colors">Kanala Git</span>
             </a>
        </div>

        {/* Main Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {videos.map((video, index) => (
                <a href={video.url} key={video.id} target="_blank" rel="noreferrer" className="group glass rounded-2xl overflow-hidden hover:glow-purple transition-all hover:-translate-y-2 hover:border-purple-500/50" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="relative aspect-video overflow-hidden bg-zinc-900">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-2xl animate-pulse">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 glass-strong text-xs font-bold px-3 py-1.5 rounded-lg text-white flex items-center gap-1 border border-purple-500/30">
                            <Youtube className="w-3 h-3 text-purple-500" /> YouTube
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg line-clamp-2 mb-2 group-hover:text-purple-400 transition-colors text-white">{video.title}</h3>
                        <div className="flex justify-between text-sm text-zinc-500">
                            <span>{video.views === "Yeni" ? "Yeni Yüklendi" : `${video.views} görüntülenme`}</span>
                            <span>{video.date}</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>

        {/* YouTube Shorts Section - Sadece shorts varsa göster */}
        {shorts.length > 0 && (
            <div className="border-t border-white/10 pt-20 mb-20">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-display font-bold italic flex items-center gap-2">
                        <Youtube className="w-6 h-6 text-red-600" />
                        YOUTUBE <span className="text-zinc-500">SHORTS</span>
                    </h3>
                    <a href="https://youtube.com/@atadogann/shorts" target="_blank" rel="noreferrer" className="text-sm font-bold text-red-600 hover:underline flex items-center gap-1">
                        Tümünü Gör <Youtube className="w-4 h-4" />
                    </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {shorts.map((short) => (
                        <a href={short.url} key={short.id} target="_blank" rel="noreferrer" className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-800 border border-white/5 hover:border-red-600/50 transition-all">
                            <img src={short.thumbnail} alt={short.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
                            
                            {/* YouTube Shorts Badge */}
                            <div className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-md">
                                <Youtube className="w-3 h-3" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="w-8 h-8 bg-red-600 backdrop-blur rounded-full flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                                </div>
                                <h4 className="font-bold text-sm text-white leading-tight line-clamp-2 group-hover:text-red-500 transition-colors">{short.title}</h4>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-xs text-zinc-400">{short.date}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )}

        {/* Clips Section - Only show if clips exist */}
        {clips.length > 0 && (
            <div className="border-t border-white/10 pt-20">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-display font-bold italic flex items-center gap-2">
                        <span className="w-2 h-8 bg-[#53FC18] rounded-full inline-block"></span>
                        KICK <span className="text-zinc-500">KLİPLER</span>
                    </h3>
                    <a href="https://kick.com/atadogann/clips" target="_blank" rel="noreferrer" className="text-sm font-bold text-[#53FC18] hover:underline flex items-center gap-1">
                        Tümünü Gör <KickIcon className="w-4 h-4" />
                    </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clips.map((clip) => (
                        <a href={clip.url} key={clip.id} target="_blank" rel="noreferrer" className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-800 border border-white/5 hover:border-[#53FC18]/50 transition-all">
                            <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>
                            
                            {/* Kick Badge */}
                            <div className="absolute top-2 right-2 bg-[#53FC18] text-black p-1 rounded-md">
                                <KickIcon className="w-3 h-3" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="w-8 h-8 bg-[#53FC18] backdrop-blur rounded-full flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <Play className="w-3 h-3 fill-black text-black ml-0.5" />
                                </div>
                                <h4 className="font-bold text-sm text-white leading-tight line-clamp-2 group-hover:text-[#53FC18] transition-colors">{clip.title}</h4>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-xs text-zinc-400">{clip.views} İzlenme</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Videos;