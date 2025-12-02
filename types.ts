import React from 'react';

export interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
  platform: 'Twitch' | 'Kick' | 'YouTube' | 'Offline';
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: React.ReactNode;
  followers?: string;
}

export interface VideoContent {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  date: string;
  url: string;
  type: 'video' | 'short';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StreamStatus {
  isLive: boolean;
  platform: 'Twitch' | 'Kick' | 'YouTube' | 'None';
  viewerCount: number;
  game: string;
  title: string;
  thumbnail: string;
}

export interface SocialStats {
  instagram: string;
  twitter: string;
  youtube: string;
  twitch: string;
  kick: string;
  discord: string;
}

export interface BioData {
  birthDate: string;
  location: string;
  description: string;
  history: string;
  images: {
    portrait: string;
    action: string[];
  }
}

// RSS Feed Types for YouTube (No API Key method)
export interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
}

export interface RSSResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: RSSItem[];
}