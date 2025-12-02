import { SOCIAL_LINKS } from "../constants";
import { ArrowUpRight } from "lucide-react";

const Socials = () => {
  // Artık API'den veri çekmiyoruz, direkt kullanıcı adlarını gösteriyoruz

  return (
    <section className="py-16 border-y border-purple-500/10 relative bg-[#0A0A0F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group glass px-6 py-4 rounded-2xl hover:glow-purple transition-all w-full sm:w-auto min-w-[200px] hover:scale-105 hover:border-purple-500/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl text-white group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {social.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-purple-500 uppercase font-bold tracking-wider">
                    {social.name}
                  </p>
                  <p className="text-white font-bold group-hover:text-purple-400 transition-colors">
                    {social.handle}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
