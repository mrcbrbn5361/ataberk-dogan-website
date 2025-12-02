import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, History, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { BioData } from '../types';

const About: React.FC = () => {
  const [bio, setBio] = useState<BioData | null>(null);

  useEffect(() => {
    const loadBio = async () => {
        const data = await api.getBioData();
        setBio(data);
    };
    loadBio();
  }, []);

  if (!bio) {
      return (
          <section id="about" className="py-20 bg-[#14141C] flex justify-center">
              <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
          </section>
      );
  }

  return (
    <section id="about" className="py-20 relative bg-[#0A0A0F]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  KİMDİR BU <span className="gradient-text">ADAM?</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="glass p-6 rounded-2xl text-center hover:glow-purple transition-all hover:scale-105 group">
                    <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:text-pink-500 transition-colors" />
                    <h3 className="font-bold text-lg mb-1 text-white">Doğum</h3>
                    <p className="text-zinc-400">{bio.birthDate}</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center hover:glow-purple transition-all hover:scale-105 group">
                    <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:text-pink-500 transition-colors" />
                    <h3 className="font-bold text-lg mb-1 text-white">Memleket</h3>
                    <p className="text-zinc-400">{bio.location}</p>
                </div>
                <div className="glass p-6 rounded-2xl text-center hover:glow-purple transition-all hover:scale-105 group">
                    <History className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:text-pink-500 transition-colors" />
                    <h3 className="font-bold text-lg mb-1 text-white">Başlangıç</h3>
                    <p className="text-zinc-400">Vine & YouTube</p>
                </div>
            </div>

            {/* Text Only Layout */}
            <div className="glass-strong p-8 md:p-12 rounded-3xl relative overflow-hidden max-w-4xl mx-auto text-center md:text-left glow-purple">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-40 h-40 text-purple-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 gradient-text">Hikayemiz</h3>
                    <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                        {bio.description}
                    </p>
                    <div className="inline-block glass px-6 py-4 rounded-xl border border-purple-500/30">
                        <p className="text-purple-400 italic font-medium text-lg">
                            "{bio.history}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;