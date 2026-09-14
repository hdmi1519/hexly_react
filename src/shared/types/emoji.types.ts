export interface BaseEmoji {
  title: string;
  emoji: string;
  keywords: string;
}

export interface EmojiCardItem extends BaseEmoji {
  id: string;
}
