import { typedPut } from '..';

interface Request {
  content: string;
  projectId: number | null;
}

export const editHighlight = async (id: string | number, body: Request) => {
  const response = await typedPut(`/highlights/${id}`, body);
  return response;
};

export const editLowlight = async (id: string | number, body: Request) => {
  const response = await typedPut(`/lowlights/${id}`, body);
  return response;
};
