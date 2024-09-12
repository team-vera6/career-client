import { typedDelete } from '..';

export const deleteHighlights = async (id: number) => {
  const response = await typedDelete(`/highlights/${id}`);
  return response;
};

export const deleteLowlights = async (id: number) => {
  const response = await typedDelete(`/lowlights/${id}`);
  return response;
};
