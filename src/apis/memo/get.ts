import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export const getMemos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<Memo>('/memos', {
    params: { year, month, week },
  });

  return response;
};

interface Memo {
  memos: {
    id: number;
    content: string;
    isMarked: boolean;
  }[];
}
