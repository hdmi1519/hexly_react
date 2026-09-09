import { useState } from 'react';
import { EMOJI_CARDS } from '@data/emoji';
import type { EmojiCardItem } from '@shared/types';

export function EmojiFinderPage() {
  const [query, setQuery] = useState('');

  const filteredEmojis = EMOJI_CARDS.filter((item: EmojiCardItem) => {
    const term = query.toLowerCase().trim();
    if (!term) return true;
    return (
      item.title.toLowerCase().includes(term) ||
      item.keywords.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Emoji Finder
          </h1>
        </div>
      </div>

      <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#f1f4f8] text-zinc-900 shadow-xl">
        <header className="bg-[#157a8a] pt-10 pb-12 px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Emoji Finder
          </h2>
          <p className="text-white/80 text-xs sm:text-sm mt-2 font-normal">
            Find emoji by keywords
          </p>
        </header>

        <div className="px-4 sm:px-8 pb-16 relative">
          <div className="max-w-xl mx-auto -translate-y-1/2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Placeholder"
              className="w-full bg-white rounded-md px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-md border-0 outline-none focus:ring-2 focus:ring-[#157a8a]/40 transition-all"
            />
          </div>

          <div className="max-w-xl mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredEmojis.map((card: EmojiCardItem) => (
              <div
                key={card.id}
                className="bg-white rounded-md p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col items-center justify-between min-h-45"
              >
                <div className="text-4xl leading-none select-none mb-3">
                  {card.emoji}
                </div>

                <div className="text-base font-bold text-zinc-900 mb-1">
                  {card.title}
                </div>

                <p className="text-[11px] leading-relaxed text-zinc-400 max-w-45 line-clamp-2">
                  {card.keywords}
                </p>
              </div>
            ))}
          </div>

          {filteredEmojis.length === 0 && (
            <div className="text-center py-10 text-xs text-zinc-500 font-mono">
              Ничего не найдено по запросу «{query}»
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
