import { useAtomValue } from 'jotai';

import {
  highLightListAtom,
  initialHighLightListAtom,
  initialLowLightListAtom,
  lowLightListAtom,
} from '@/app/review/stores';
import { ReviewListItem } from '@/app/review/types';

export const useReviewsApi = () => {
  const initialHighlightList = useAtomValue(initialHighLightListAtom);
  const initialLowlightList = useAtomValue(initialLowLightListAtom);

  const newHighlightList = useAtomValue(highLightListAtom);
  const newLowlightList = useAtomValue(lowLightListAtom);

  const getIdsList = (list: ReviewListItem[]) => {
    return list.map((el) => el.id);
  };

  // 비교 배열엔 없으나 새로운 배열에서 생긴 id
  const getNewIds = (
    list1: (string | number)[],
    list2: (string | number)[],
  ) => {
    const differentIdList = list1.filter((id) => !list2.includes(id));

    return differentIdList;
  };

  // 초기 배열, 새로운 배열에서 동일한 id
  const getPutIds = (
    list1: (string | number)[],
    list2: (string | number)[],
  ) => {
    const commonIdList = list1.filter((id) => list2.includes(id));

    return commonIdList;
  };

  const initialHighlightIds = getIdsList(initialHighlightList);
  const initialLowlightIds = getIdsList(initialLowlightList);
  const newHighlightIds = getIdsList(newHighlightList);
  const newlLowlightIds = getIdsList(newLowlightList);

  // POST 초기 배열엔 없으나 새로운 배열에 생긴 id
  const postHightlightIdList = getNewIds(newHighlightIds, initialHighlightIds);
  const postLowlightIdList = getNewIds(newlLowlightIds, initialLowlightIds);

  // PUT 초기 배열과 새로운 배열에 동일하게 있는 id
  const putHightlightIdList = getPutIds(initialHighlightIds, newHighlightIds);
  const putLowlightIdList = getPutIds(initialLowlightIds, newlLowlightIds);

  // DELETE 초기 배열엔 있으나 새로운 배열에는 없는 id
  const deleteHightlightIds = getNewIds(
    initialHighlightIds,
    newHighlightIds,
  ) as number[];
  const deleteLowlightIds = getNewIds(
    initialLowlightIds,
    newlLowlightIds,
  ) as number[];

  const postHighlights = newHighlightList.filter((el) =>
    postHightlightIdList.includes(el.id),
  );
  const postLowlights = newLowlightList.filter((el) =>
    postLowlightIdList.includes(el.id),
  );

  const putHighlights = newHighlightList.filter((el) =>
    putHightlightIdList.includes(el.id),
  );
  const putLowlights = newLowlightList.filter((el) =>
    putLowlightIdList.includes(el.id),
  );

  return {
    postHighlights,
    postLowlights,
    putHighlights,
    putLowlights,
    deleteHightlightIds,
    deleteLowlightIds,
  };
};
