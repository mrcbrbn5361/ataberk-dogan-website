import { ScheduleItem, VideoContent, StreamStatus, SocialStats, BioData, RSSResponse } from '../types';
import { WEEKLY_SCHEDULE, FEATURED_VIDEOS, SITE_CONFIG } from '../constants';

const YOUTUBE_CHANNEL_ID = "UCenmkBehf4szi5V-O6EoMaQ";
const KICK_SLUG = "atadogann";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Cache mekanizması - Her platform için ayrı cache
let socialStatsCache: { data: SocialStats | null; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 30 * 60 * 1000; // 30 dakika

// Rate limit için delay
const SCRAPER_DELAY = 2000; // 2 saniye

// Retry mekanizması
const retryFetch = async (url: string, options: RequestInit = {}, retries = 3): Promise<Response | null> => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (response.ok) return response;
            await delay(1000 * (i + 1)); // Exponential backoff
        } catch (e) {
            if (i === retries - 1) return null;
            await delay(1000 * (i + 1));
        }
    }
    return null;
};

// Format number helper
const formatCount = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
};

// Konsept Görselleri (Gaming, Setup, Neon, Dark)
const IMAGES = {
    streamSetup: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1920&auto=format&fit=crop", // Red/Dark Gaming Setup
    mic: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop", // Professional Microphone
    gamingRoom: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1920&auto=format&fit=crop", // Neon Room
    portrait: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=600&auto=format&fit=crop", // Gamer Portrait style
    action1: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop", // Console playing / Esports
    action2: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop", // Dark atmosphere / Horror game
    action3: "https://images.unsplash.com/photo-1612287230217-831875465516?q=80&w=800&auto=format&fit=crop", // Headset close up
    action4: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop" // Keyboard RGB
};

// Fallback (Yedek) Veriler - Proxy çalışmazsa devreye girer
// ÖNEMLİ: isLive: false olarak ayarlandı. Böylece API hatasında "Yalandan Yayında" gözükmeyecek.
const FALLBACK_STREAM_STATUS: StreamStatus = {
    isLive: false,
    platform: 'Kick',
    viewerCount: 0,
    game: '',
    title: '',
    thumbnail: IMAGES.streamSetup
};

// Proxy URL Generator
// Codetabs is used as it handles CORS by proxying the request.
const getProxyUrl = (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`;

// Helper to safely parse proxy response
const fetchFromProxy = async (url: string) => {
    try {
        const response = await fetch(getProxyUrl(url));
        if (!response.ok) return null;

        const text = await response.text();
        if (!text) return null;

        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            // If it's not JSON, it might be an error page or raw text
            return null;
        }

        // Codetabs API sometimes wraps the response in a "contents" field
        if (data && data.contents) {
            // If contents is a string (double encoded JSON), parse it again
            if (typeof data.contents === 'string') {
                try {
                    return JSON.parse(data.contents);
                } catch {
                    // If parsing fails, it's likely just HTML or text, which implies error for our API needs
                    return null;
                }
            }
            // If contents is already an object
            return data.contents;
        }

        return data;
    } catch (e) {
        return null;
    }
}

export const api = {
    getStreamStatus: async (): Promise<StreamStatus> => {
        try {
            // Kick Public API V1 endpoint
            const kickApiUrl = `https://kick.com/api/v1/channels/${KICK_SLUG}`;

            const kickData = await fetchFromProxy(kickApiUrl);

            // Veri doğrulama
            if (!kickData) return FALLBACK_STREAM_STATUS;

            // Yayın bilgilerini ayrıştır
            const livestream = kickData.livestream;

            if (livestream && livestream.is_live) {
                return {
                    isLive: true,
                    platform: 'Kick',
                    viewerCount: livestream.viewer_count,
                    game: livestream.categories?.[0]?.name || "Just Chatting",
                    title: livestream.session_title,
                    thumbnail: livestream.thumbnail?.url || IMAGES.streamSetup
                };
            } else {
                // Yayın kapalıysa ancak kanal verisi geldiyse
                return {
                    isLive: false,
                    platform: 'Kick',
                    viewerCount: 0,
                    game: '',
                    title: kickData.previous_livestreams?.[0]?.session_title || (kickData.livestream?.session_title ?? ''),
                    thumbnail: kickData.banner_image?.url || IMAGES.streamSetup
                };
            }
        } catch (error) {
            return FALLBACK_STREAM_STATUS;
        }
    },

    getLatestVideos: async (): Promise<VideoContent[]> => {
        try {
            // YouTube RSS Proxy (rss2json) - This is generally stable
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`);

            if (!response.ok) return FEATURED_VIDEOS;

            const data: RSSResponse = await response.json();

            if (data.status === 'ok' && data.items.length > 0) {
                // YouTube RSS'den gelen TÜM videoları al (shorts dahil)
                // Sadece son 3 videoyu göster
                const allVideos = data.items
                    .slice(0, 3) // İlk 3 videoyu al
                    .map((item) => ({
                        id: item.guid,
                        title: item.title,
                        thumbnail: `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/hqdefault.jpg`,
                        views: "Yeni",
                        date: new Date(item.pubDate).toLocaleDateString('tr-TR'),
                        url: item.link,
                        type: 'video' as const
                    }));

                return allVideos.length > 0 ? allVideos : FEATURED_VIDEOS;
            }
            return FEATURED_VIDEOS;
        } catch (error) {
            return FEATURED_VIDEOS;
        }
    },

    getLatestShorts: async (): Promise<VideoContent[]> => {
        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`);

            if (!response.ok) return [];

            const data: RSSResponse = await response.json();

            if (data.status === 'ok' && data.items.length > 0) {
                // Shorts'ları filtrele - URL'de /shorts/ içeren veya başlıkta #shorts olan
                const shorts = data.items
                    .filter(item => {
                        const urlHasShorts = item.link.includes('/shorts/');
                        const titleHasShorts = item.title.toLowerCase().includes('#shorts') ||
                            item.title.toLowerCase().includes('#short');
                        const descHasShorts = item.description?.toLowerCase().includes('#shorts') ||
                            item.description?.toLowerCase().includes('/shorts/');
                        return urlHasShorts || titleHasShorts || descHasShorts;
                    })
                    .slice(0, 4) // İlk 4 shorts'u al
                    .map((item) => ({
                        id: item.guid,
                        title: item.title.replace(/#shorts?/gi, '').trim(),
                        thumbnail: `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/hqdefault.jpg`,
                        views: "Yeni",
                        date: new Date(item.pubDate).toLocaleDateString('tr-TR'),
                        url: item.link,
                        type: 'short' as const
                    }));

                return shorts;
            }
            return [];
        } catch (error) {
            return [];
        }
    },

    getClips: async (): Promise<VideoContent[]> => {
        try {
            // Direkt Kick API'ye istek at (proxy olmadan)
            const kickClipsUrl = `https://kick.com/api/v2/channels/${KICK_SLUG}/clips`;

            const response = await fetch(kickClipsUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                console.log('Kick clips API response not ok:', response.status);
                return [];
            }

            const clipsData = await response.json();
            console.log('Kick clips data:', clipsData);

            if (clipsData && Array.isArray(clipsData)) {
                // Eğer direkt array dönüyorsa
                return clipsData.slice(0, 4).map((clip: any) => ({
                    id: clip.id || clip.clip_id,
                    title: clip.title || 'Untitled Clip',
                    thumbnail: clip.thumbnail_url || clip.thumbnail,
                    views: clip.view_count > 1000 ? `${(clip.view_count / 1000).toFixed(1)}K` : (clip.view_count || 0).toString(),
                    date: "Kick",
                    url: `https://kick.com/${KICK_SLUG}?clip=${clip.id || clip.clip_id}`,
                    type: 'short'
                }));
            } else if (clipsData && clipsData.clips && Array.isArray(clipsData.clips)) {
                // Eğer clips objesi içinde array varsa
                return clipsData.clips.slice(0, 4).map((clip: any) => ({
                    id: clip.id || clip.clip_id,
                    title: clip.title || 'Untitled Clip',
                    thumbnail: clip.thumbnail_url || clip.thumbnail,
                    views: clip.view_count > 1000 ? `${(clip.view_count / 1000).toFixed(1)}K` : (clip.view_count || 0).toString(),
                    date: "Kick",
                    url: `https://kick.com/${KICK_SLUG}?clip=${clip.id || clip.clip_id}`,
                    type: 'short'
                }));
            }

            return [];
        } catch (e) {
            console.error('Kick clips error:', e);
            return [];
        }
    },

    getSchedule: async (): Promise<ScheduleItem[]> => {
        await delay(600);
        return WEEKLY_SCHEDULE;
    },

    getSocialStats: async (): Promise<SocialStats> => {
        const now = Date.now();

        // Cache kontrolü
        if (socialStatsCache.data && (now - socialStatsCache.timestamp) < CACHE_DURATION) {
            console.log('📦 Using cached social stats');
            return socialStatsCache.data;
        }

        console.log('🔄 Fetching fresh social stats...');

        // CORS Proxy helper - Multiple proxies for fallback
        const corsProxies = [
            (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
            (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
            (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
        ];

        const fetchWithProxy = async (url: string, parseJson = true) => {
            for (const proxy of corsProxies) {
                try {
                    const response = await retryFetch(proxy(url));
                    if (response) {
                        if (parseJson) {
                            const data = await response.json();
                            // allorigins wraps in contents
                            return data.contents ? (typeof data.contents === 'string' ? data.contents : JSON.stringify(data.contents)) : data;
                        }
                        return await response.text();
                    }
                } catch (e) {
                    continue; // Try next proxy
                }
            }
            return null;
        };

        // Tüm scraper'ları sırayla çalıştır (rate limit için)
        const kickFollowers = await (async () => {
            try {
                const data = await fetchWithProxy(`https://kick.com/api/v1/channels/${KICK_SLUG}`);
                if (data) {
                    const parsed = typeof data === 'string' ? JSON.parse(data) : data;
                    if (parsed?.followers_count) {
                        console.log('✅ Kick:', formatCount(parsed.followers_count));
                        return formatCount(parsed.followers_count);
                    }
                }
            } catch (e) {
                console.error('❌ Kick error:', e);
            }
            return "400K+";
        })();

        await delay(SCRAPER_DELAY);

        const youtubeSubscribers = await (async () => {
            try {
                const html = await fetchWithProxy(`https://www.youtube.com/@atadogann`, false);
                if (html) {
                    const patterns = [
                        /"subscriberCountText":\{"simpleText":"([\d.,]+[KMB]?)\s*subscribers?"\}/,
                        /subscribers?","simpleText":"([\d.,]+[KMB]?)"/,
                        /"subscriberCount":"([\d.,]+[KMB]?)"/
                    ];
                    for (const pattern of patterns) {
                        const match = html.match(pattern);
                        if (match && match[1]) {
                            const sub = match[1].replace(/\s/g, '').replace(/,/g, '');
                            console.log('✅ YouTube:', sub);
                            return sub;
                        }
                    }
                }
            } catch (e) {
                console.error('❌ YouTube error:', e);
            }
            return "520K";
        })();

        await delay(SCRAPER_DELAY);

        const instagramFollowers = await (async () => {
            try {
                const html = await fetchWithProxy(`https://www.instagram.com/ataberk.dogan/`, false);
                if (html) {
                    const patterns = [
                        /"edge_followed_by":\{"count":(\d+)\}/,
                        /"follower_count":(\d+)/,
                        /followers?["\s:]+(\d+)/i
                    ];
                    for (const pattern of patterns) {
                        const match = html.match(pattern);
                        if (match && match[1]) {
                            const count = parseInt(match[1]);
                            console.log('✅ Instagram:', formatCount(count));
                            return formatCount(count);
                        }
                    }
                }
            } catch (e) {
                console.error('❌ Instagram error:', e);
            }
            return "312K";
        })();

        await delay(SCRAPER_DELAY);

        const twitterFollowers = await (async () => {
            try {
                const html = await fetchWithProxy(`https://twitter.com/atadogann`, false);
                if (html) {
                    const patterns = [
                        /"followers_count":(\d+)/,
                        /"normal_followers_count":"(\d+)"/,
                        /(\d+)\s*followers?/i
                    ];
                    for (const pattern of patterns) {
                        const match = html.match(pattern);
                        if (match && match[1]) {
                            const count = parseInt(match[1]);
                            console.log('✅ Twitter:', formatCount(count));
                            return formatCount(count);
                        }
                    }
                }
            } catch (e) {
                console.error('❌ Twitter error:', e);
            }
            return "155K";
        })();

        await delay(SCRAPER_DELAY);

        const discordMembers = await (async () => {
            try {
                // Discord widget - try without proxy first
                try {
                    const directResponse = await fetch(`https://discord.com/api/guilds/597053493471346708/widget.json`);
                    if (directResponse.ok) {
                        const data = await directResponse.json();
                        const count = data?.presence_count || data?.member_count;
                        if (count) {
                            console.log('✅ Discord (direct):', formatCount(count));
                            return formatCount(count);
                        }
                    }
                } catch (directError) {
                    // If direct fails, try with proxy
                    const data = await fetchWithProxy(`https://discord.com/api/guilds/597053493471346708/widget.json`);
                    if (data) {
                        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
                        const count = parsed?.presence_count || parsed?.member_count;
                        if (count) {
                            console.log('✅ Discord (proxy):', formatCount(count));
                            return formatCount(count);
                        }
                    }
                }
            } catch (e) {
                console.error('❌ Discord error:', e);
            }
            return "55K";
        })();

        const stats: SocialStats = {
            instagram: instagramFollowers,
            twitter: twitterFollowers,
            youtube: youtubeSubscribers,
            twitch: "0",
            kick: kickFollowers,
            discord: discordMembers,
        };

        console.log('✅ All stats:', stats);

        // Cache'e kaydet
        socialStatsCache = { data: stats, timestamp: now };

        return stats;
    },

    getBioData: async (): Promise<BioData> => {
        await delay(500);
        return {
            ...SITE_CONFIG.bio,
            images: {
                portrait: IMAGES.portrait,
                action: [
                    IMAGES.action1,
                    IMAGES.gamingRoom,
                    IMAGES.action3
                ]
            }
        };
    }
};