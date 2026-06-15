import { useState } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { Word } from '../types';

type FilterType = 'all' | 'noun' | 'verb' | 'adjective' | 'custom';

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'noun', label: 'Substantivos' },
  { value: 'verb', label: 'Verbos' },
  { value: 'adjective', label: 'Adjetivos' },
  { value: 'custom', label: '⭐ Minhas Palavras' },
];

const categoryBadge: Record<string, { label: string; color: string }> = {
  noun: { label: 'Substantivo', color: 'bg-blue-100 text-blue-700' },
  verb: { label: 'Verbo', color: 'bg-green-100 text-green-700' },
  adjective: { label: 'Adjetivo', color: 'bg-purple-100 text-purple-700' },
  adverb: { label: 'Advérbio', color: 'bg-orange-100 text-orange-700' },
  other: { label: 'Outro', color: 'bg-gray-100 text-gray-600' },
};

function WordCard({ word, onDelete }: { word: Word; onDelete?: () => void }) {
  const displayGerman = word.article ? `${word.article} ${word.german}` : word.german;
  const badge = categoryBadge[word.category] ?? categoryBadge.other;
  const levelColors = ['bg-gray-200', 'bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-lime-400', 'bg-[#58CC02]'];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-extrabold text-[#3C3C3C] truncate">{displayGerman}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${badge.color}`}>
              {badge.label}
            </span>
            {word.isCustom && (
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-yellow-100 text-yellow-700">
                ⭐ Minha
              </span>
            )}
          </div>
          <div className="text-[#3C3C3C] font-semibold mt-1">{word.portuguese}</div>
          {word.english && (
            <div className="text-sm text-gray-400 italic">{word.english}</div>
          )}
          {word.example && (
            <div className="text-xs text-gray-500 mt-1 italic">"{word.example}"</div>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          {/* Level indicator */}
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < word.level ? levelColors[word.level] : 'bg-gray-200'}`}
              />
            ))}
          </div>
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-xs text-[#FF4B4B] hover:bg-red-50 px-2 py-1 rounded-lg transition-colors font-semibold"
            >
              Excluir
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VocabularyList() {
  const { allWords, deleteWord } = useVocabulary();
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  const filtered = allWords
    .filter((w) => {
      if (filter === 'custom') return w.isCustom;
      if (filter === 'noun') return w.category === 'noun';
      if (filter === 'verb') return w.category === 'verb';
      if (filter === 'adjective') return w.category === 'adjective';
      return true;
    })
    .filter((w) => {
      if (!search.trim()) return true;
      const s = search.toLowerCase();
      return (
        w.german.toLowerCase().includes(s) ||
        w.portuguese.toLowerCase().includes(s) ||
        w.english.toLowerCase().includes(s)
      );
    })
    .sort((a, b) => a.german.localeCompare(b.german));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">📖 Vocabulário</h1>
        <div className="text-sm text-gray-500 font-semibold">{filtered.length} palavras</div>
      </div>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Pesquisar palavras..."
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1CB0F6] outline-none transition-all bg-white text-[#3C3C3C]"
      />

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${
              filter === value
                ? 'bg-[#58CC02] text-white border-[#46A302]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#58CC02]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Word list */}
      {filtered.length === 0 ? (
        <div className="card text-center py-12 text-gray-500">
          <div className="text-4xl mb-3">🔍</div>
          <div className="font-semibold">Nenhuma palavra encontrada</div>
          {filter === 'custom' && (
            <div className="text-sm mt-2">
              Você ainda não adicionou palavras personalizadas.{' '}
              <a href="#/add-word" className="text-[#1CB0F6] underline">
                Adicionar agora
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((word: Word) => (
            <WordCard
              key={word.id}
              word={word}
              onDelete={word.isCustom ? () => deleteWord(word.id) : undefined}
            />
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-xs text-gray-500">
        <div className="font-semibold mb-2 text-gray-600">Nível de aprendizado:</div>
        <div className="flex flex-wrap gap-2">
          {['Novo', 'Nível 1', 'Nível 2', 'Nível 3', 'Nível 4', 'Dominado'].map((l, i) => (
            <div key={l} className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded-full ${['bg-gray-200','bg-red-300','bg-orange-300','bg-yellow-300','bg-lime-400','bg-[#58CC02]'][i]}`} />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
