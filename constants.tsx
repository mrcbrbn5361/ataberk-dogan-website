import React from "react";
import { ScheduleItem, SocialLink, VideoContent } from "./types";
import { Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";

// Custom Kick Icon since Lucide doesn't have one yet
const KickIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3H21V21H3V3ZM8.5 7V17H11.5V13.5L14.5 17H18L14 12.5L18 8H14.5L11.5 11.5V7H8.5Z" />
  </svg>
);

export const SITE_CONFIG = {
  name: "Ataberk Doğan",
  tagline: "Oyun, Sohbet ve Eğlenceyle Buradayım!",
  bio: {
    birthDate: "28 Mayıs 1993",
    location: "Edirne",
    description:
      "Vine ile başlayan maceramız, bugün Kick ve YouTube'da binlerce kişilik dev bir aileye dönüştü. Trakya'nın samimiyeti, oyun dünyasının heyecanı ve bitmek bilmeyen muhabbetimizle buradayız. Sadece izleme, sohbete katıl!",
    history:
      "Vine döneminin kısa skeçlerinden, YouTube vloglarına ve ardından canlı yayın dünyasının dinamizmine uzanan bir yolculuk.",
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Kick",
    url: "https://kick.com/atadogann",
    handle: "@atadogann",
    icon: <KickIcon className="w-5 h-5" />,
    followers: "@atadogann",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ataberk.dogan",
    handle: "@ataberk.dogan",
    icon: <Instagram className="w-5 h-5" />,
    followers: "@ataberk.dogan",
  },
  {
    name: "Twitter / X",
    url: "https://twitter.com/atadogann",
    handle: "@atadogann",
    icon: <Twitter className="w-5 h-5" />,
    followers: "@atadogann",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@atadogann",
    handle: "@atadogann",
    icon: <Youtube className="w-5 h-5" />,
    followers: "@atadogann",
  },
  {
    name: "Discord",
    url: "https://discord.gg/ataberk-dogan-in-yeri-597053493471346708",
    handle: "discord.gg/ataberk-dogan",
    icon: <MessageCircle className="w-5 h-5" />,
    followers: "discord.gg/ataberk-dogan",
  },
];

export const WEEKLY_SCHEDULE: ScheduleItem[] = [
  {
    day: "Pazartesi",
    time: "20:00",
    activity: "Just Chatting & IRL",
    platform: "Kick",
  },
  { day: "Salı", time: "-", activity: "Dinlenme Günü", platform: "Offline" },
  {
    day: "Çarşamba",
    time: "21:00",
    activity: "Korku Oyunları Gecesi",
    platform: "Kick",
  },
  {
    day: "Perşembe",
    time: "20:00",
    activity: "Topluluk Etkinlikleri",
    platform: "Kick",
  },
  {
    day: "Cuma",
    time: "22:00",
    activity: "Hafta Sonu Başlıyor (Party Games)",
    platform: "Kick",
  },
  {
    day: "Cumartesi",
    time: "-",
    activity: "Video Çekim Günü",
    platform: "Offline",
  },
  {
    day: "Pazar",
    time: "21:00",
    activity: "Pazar Sohbeti",
    platform: "YouTube",
  },
];

// Fallback videos - Normal uzun videolar
export const FEATURED_VIDEOS: VideoContent[] = [
  {
    id: "1",
    title: "EDİRNE'DE BİR GÜN GEÇİRMEK! (VLOG)",
    thumbnail:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=800&auto=format&fit=crop",
    views: "250K",
    date: "2 gün önce",
    url: "https://youtube.com/@atadogann",
    type: "video",
  },
  {
    id: "2",
    title: "KORKU EVİNDE ÇILDIRDIK!",
    thumbnail:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    views: "180K",
    date: "1 hafta önce",
    url: "https://youtube.com/@atadogann",
    type: "video",
  },
  {
    id: "3",
    title: "Trakya Şivesiyle PUBG Oynamak",
    thumbnail:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    views: "500K",
    date: "2 hafta önce",
    url: "https://youtube.com/@atadogann",
    type: "video",
  },
];
