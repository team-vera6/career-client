import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export const getMemos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<GetMemoResponse>('/memos', {
    params: { year, month, week },
  });

  return response;
};

export const getAllMemos = async ({
  id,
  size,
}: {
  id?: number;
  size?: number;
}) => {
  const response = await typedGet<AllMemos>('/memos/page', {
    params: { id, size },
  });

  return response;
};

interface GetMemoResponse {
  memos: Memo[];
}

export interface Memo {
  id: number;
  content: string;
  isMarked: boolean;
}

export interface AllMemos {
  contents: {
    weekNumber: CurrentWeek;
    memos: Memo[];
  }[];
  nextCursor: number;
}
