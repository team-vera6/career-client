import { CurrentWeek } from '@/types/currentWeek';
import { Memo } from '@/types/memo';

import { typedGet } from '..';

interface GetMemoResponse {
  memos: Memo[];
}

export const getMemos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<GetMemoResponse>('/memos', {
    params: { year, month, week },
  });

  return response;
};

export interface AllMemosResponse {
  contents: {
    weekNumber: CurrentWeek;
    memos: Memo[];
  }[];
  nextCursor: number;
}

export const getAllMemos = async ({
  id,
  size,
}: {
  id?: number;
  size?: number;
}) => {
  const response = await typedGet<AllMemosResponse>('/memos/page', {
    params: { id, size },
  });

  return response;
};
