import { useEffect, useState } from 'react';
import { fetchCharacters } from './api';
import CatalogFilters from './CatalogFilters';
import CharacterCard from './CharacterCard';
import type { Character } from './types';

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetchCharacters(page, search, status);
        setCharacters(response.results);
        setHasNextPage(response.info.next !== null);
      } catch {
        setCharacters([]);
        setHasNextPage(false);
        setError('No characters found or an error occurred while loading data.');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [page, search, status]);

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  return (
    <section>
      <CatalogFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-600">Current page: {page}</p>

        <div className="flex gap-3">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Prev
          </button>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasNextPage}
            className="rounded-xl bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {loading && <p className="text-lg font-medium">Loading...</p>}

      {!loading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && characters.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-600">
          No results found.
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </section>
  );
}
