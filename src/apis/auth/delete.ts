import { typedDelete } from '..';

export const deleteUser = async () => {
  const response = await typedDelete('/auth/delete');
  return response;
};
