import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#14141C] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <div>
                        <h2 className="text-3xl font-display font-bold italic mb-4">İŞ BİRLİĞİ & <br/><span className="gradient-text">İLETİŞİM</span></h2>
                        <p className="text-zinc-400 mb-8">Marka işbirlikleri, sponsorluk teklifleri veya sadece bir merhaba demek için formu kullanabilirsin. Bizimle çalışmak ister misin?</p>
                        
                        <div className="flex items-center gap-4 text-zinc-300 mb-2">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-500">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span>iletisim@ataberkdogan.com</span>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                         <p className="text-sm text-zinc-500 mb-4">Sosyal Medyada Ben:</p>
                         <div className="flex gap-3">
                            {/* Decorative fake buttons */}
                            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                         </div>
                    </div>
                </div>

                <div className="p-10 bg-zinc-950/50">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Adın Soyadın / Firma Adı</label>
                            <input type="text" id="name" className="w-full bg-[#0A0A0F] border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Örn: Ahmet Yılmaz" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">E-posta Adresin</label>
                            <input type="email" id="email" className="w-full bg-[#0A0A0F] border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="ornek@sirket.com" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">Konu</label>
                            <select id="subject" className="w-full bg-[#0A0A0F] border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
                                <option>Sponsorluk</option>
                                <option>Etkinlik Daveti</option>
                                <option>Genel İletişim</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Mesajın</label>
                            <textarea id="message" rows={4} className="w-full bg-[#0A0A0F] border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Proje detaylarını buraya yazabilirsin..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/30">
                            Gönder <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;