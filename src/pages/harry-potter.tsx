import { useState } from 'react';
import { HP_CHARACTERS } from '@shared/data/hp';
import type { HPCharacter } from '@shared/types';

const HOUSES = [
  { value: 'all', label: 'Choose one' },
  { value: 'Gryffindor', label: 'Gryffindor' },
  { value: 'Slytherin', label: 'Slytherin' },
  { value: 'Hufflepuff', label: 'Hufflepuff' },
  { value: 'Ravenclaw', label: 'Ravenclaw' },
];

export function HarryPotterPage() {
  const [nameQuery, setNameQuery] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('all');

  const filteredCharacters = HP_CHARACTERS.filter((char: HPCharacter) => {
    const matchesName = char.name
      .toLowerCase()
      .includes(nameQuery.toLowerCase().trim());
    const matchesHouse =
      selectedHouse === 'all' || char.house === selectedHouse;

    return matchesName && matchesHouse;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Harry Potter
          </h1>
        </div>
      </div>

      <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#f7f8fa] text-zinc-900 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
          <header className="mb-8 sm:mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Harry Potter
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1.5 font-normal">
              View all characters from the Harry Potter universe
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-xl">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-zinc-500">
                Name
              </label>
              <input
                type="text"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
                placeholder="Hermione"
                className="w-full bg-white rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 border border-zinc-200 shadow-xs outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-zinc-500">
                School
              </label>
              <select
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
                className="select select-bordered w-full bg-white text-zinc-800 border-zinc-200 focus:border-zinc-400 font-normal text-xs sm:text-sm h-auto min-h-0 py-2.5 px-3.5 shadow-xs"
              >
                {HOUSES.map((h) => (
                  <option key={h.value} value={h.value}>
                    {h.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCharacters.map((char: HPCharacter) => (
              <div
                key={char.id}
                className="bg-white rounded-lg overflow-hidden border border-zinc-200/80 shadow-xs flex flex-col"
              >
                <div className="h-56 sm:h-64 w-full bg-zinc-900 overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-sm font-bold text-zinc-900">
                    {char.name}
                  </h3>

                  <div className="space-y-0.5 text-[11px] text-zinc-500 leading-normal">
                    <p>
                      <span className="text-zinc-500">Actor:</span>{' '}
                      <span className="text-zinc-700">{char.actor}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Gender:</span>{' '}
                      <span className="text-zinc-700">{char.gender}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">House:</span>{' '}
                      <span className="text-zinc-700">{char.house || '—'}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Wand core:</span>{' '}
                      <span className="text-zinc-700">
                        {char.wandCore || '—'}
                      </span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Alive:</span>{' '}
                      <span className="text-zinc-700">
                        {char.alive ? 'yes' : 'no'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="text-center py-16 text-xs text-zinc-400 font-mono">
              Персонажи не найдены
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
