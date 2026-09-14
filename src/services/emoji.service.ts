import { apiClient } from '@shared/utils/api.instance';
import type { APIResponse, EmojiCardItem } from '@shared/types';

export const emojiService = {
  async getEmojis(query: string = ''): Promise<EmojiCardItem[]> {
    const { data } = await apiClient.get<APIResponse<EmojiCardItem[]>>('api/emojis', {
      params: { q: query },
    });

    if (!data.success || !data.response) {
      throw new Error(data.error || 'Failed to retrieve data from the server');
    }

    return data.response;
  },
};
