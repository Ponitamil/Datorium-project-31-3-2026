import axios from 'axios';
import type { CharactersResponse } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (
  page: number,
  name: string,
  status: string
): Promise<CharactersResponse> => {
  const params: Record<string, string | number> = { page };

  if (name.trim()) {
    params.name = name.trim();
  }

  if (status !== 'all') {
    params.status = status;
  }

  const response = await axios.get<CharactersResponse>(BASE_URL, { params });
  return response.data;
};
