import { http, delay } from 'msw';
import rawEmojis from '@shared/data/emojis.json';
import type { BaseEmoji, EmojiCardItem } from '@shared/types';
import { successResponse } from '@shared/utils/httpx';

const allEmojis: EmojiCardItem[] = (rawEmojis as BaseEmoji[]).map((item, index) => ({
  ...item,
  id: `${item.title.toLowerCase().replace(/\s+/g, '-')}-${index}`,
}));

function searchEmojis(query: string, data: EmojiCardItem[]): EmojiCardItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return data;
  }

  return data.filter((item) => {
    const matchesTitle = item.title.toLowerCase().includes(trimmed);
    const matchesKeywords = item.keywords.toLowerCase().includes(trimmed);
    return matchesTitle || matchesKeywords;
  });
}

export const handlers = [
  http.get('*/api/emojis', async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') || '';

    await delay(150);

    const filtered = searchEmojis(q, allEmojis);
    return successResponse(filtered.slice(0, 20));
  }),
];
