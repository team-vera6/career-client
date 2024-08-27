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

export interface AllMemos {
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
  const response = await typedGet<AllMemos>('/memos/page', {
    params: { id, size },
  });

  return response;
};
