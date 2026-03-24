export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  description: string;
}

interface CacheData<T> {
  data: T;
  timestamp: number;
}

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  description: string;
  categories: string[];
}

interface RssResponse {
  status: string;
  items: RssItem[];
}

const RSS_URL = 'https://medium.com/feed/@ramzibouzaiene.dev';
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

const CACHE_DURATION = 15 * 60 * 1000;

let articleCache: CacheData<MediumArticle[]> | null = null;

const extractThumbnail = (content: string): string => {
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) {
    return imgMatch[1].replace(/\?.*$/, '');
  }
  return 'https://miro.medium.com/v2/resize:fill:720:720/https://miro.medium.com/v2/1*sH6b7YzN8a2N1JK6lVyY9g.png';
};

const stripHtml = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
};

const truncateDescription = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

const parseArticles = (rssData: RssResponse): MediumArticle[] => {
  if (!rssData.items || rssData.items.length === 0) {
    return [];
  }

  return rssData.items.map((item: RssItem) => ({
    title: item.title || 'Untitled',
    link: item.link || '',
    pubDate: item.pubDate || new Date().toISOString(),
    thumbnail: extractThumbnail(item.content || item.description || ''),
    categories: item.categories || [],
    description: truncateDescription(stripHtml(item.description || item.content || '')),
  }));
};

export const fetchMediumArticles = async (limit: number = 4): Promise<MediumArticle[]> => {
  if (articleCache && Date.now() - articleCache.timestamp < CACHE_DURATION) {
    return articleCache.data.slice(0, limit);
  }

  try {
    const response = await fetch(RSS2JSON_API);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'ok') {
      throw new Error('Failed to fetch RSS feed');
    }

    const articles = parseArticles(data);

    articleCache = {
      data: articles,
      timestamp: Date.now(),
    };

    return articles.slice(0, limit);
  } catch (error) {
    if (articleCache) {
      return articleCache.data.slice(0, limit);
    }
    console.error('Error fetching Medium articles:', error);
    throw error;
  }
};

export const clearArticleCache = (): void => {
  articleCache = null;
};
