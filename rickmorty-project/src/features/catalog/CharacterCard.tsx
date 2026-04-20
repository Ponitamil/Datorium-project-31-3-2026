import type { Character } from './types';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={character.image}
        alt={character.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold">{character.name}</h3>

        <div className="mt-3 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-800">Status:</span>{' '}
            {character.status}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Species:</span>{' '}
            {character.species}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Gender:</span>{' '}
            {character.gender}
          </p>
        </div>
      </div>
    </article>
  );
}
