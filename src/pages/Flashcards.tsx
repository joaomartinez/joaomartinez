import { useState, useCallback, useMemo } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { Word } from '../types';

type Filter = 'all' | 'review' | 'custom';

function FlipCard({ word, isFlipped, onClick }: { word: Word; isFlipped: boolean; onClick: () => void }) {
  const displayGerman = word.article ? `${word.article} ${word.german}` : word.german;

  return (
    <div className="flip-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-card-front">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {word.category === 'noun' ? 'Substantivo' :
             word.category === 'verb' ? 'Verbo' :
             word.category === 'adjective' ? 'Adjetivo' :
             word.category === 'adverb' ? 'Advérbio' : 'Outro'}
          </div>
          <div className="text-4xl font-extrabold text-[#3C3C3C] text-center">{displayGerman}</div>
          {word.article && (
            <div className="mt-2 text-sm text-gray-400">clique para ver a tradução</div>
          )}
          {!word.article && (
            <div className="mt-2 text-sm text-gray-400">clique para ver a tradução</div>
          )}
        </div>
        {/* Back */}
        <div className="flip-card-back">
          <div className="w-full text-center space-y-3">
            <div className="text-3xl font-extrabold text-[#3C3C3C]">{word.portuguese}</div>
            <div className="text-sm text-gray-500 italic">{word.english}</div>
            {word.example && (
              <div className="mt-4 bg-white rounded-xl p-3 text-left">
                <div className="text-sm font-semibold text-gray-700">Exemplo:</div>
                <div className="text-sm text-[#3C3C3C] mt-1">{word.example}</div>
                {word.exampleTranslation && (
                  <div className="text-xs text-gray-500 mt-1 italic">{word.exampleTranslation}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Flashcards() {
  const { allWords, updateProgress } = useVocabulary();
  const [filter, setFilter] = useState<Filter>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);

  const filteredWords = useMemo(() => {
    let pool = allWords;
    if (filter === 'review') pool = allWords.filter((w) => w.nextReview <= Date.now());
    if (filter === 'custom') pool = allWords.filter((w) => w.isCustom);
    return [...pool].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const currentWord: Word | undefined = filteredWords[currentIndex];
  const total = filteredWords.length;

  const goNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(total, 1));
    }, 150);
  }, [total]);

  const goPrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % Math.max(total, 1));
    }, 150);
  }, [total]);

  const handleKnown = () => {
    if (!currentWord) return;
    updateProgress(currentWord.id, true);
    setKnownCount((c) => c + 1);
    goNext();
  };

  const handleUnknown = () => {
    if (!currentWord) return;
    updateProgress(currentWord.id, false);
    setUnknownCount((c) => c + 1);
    goNext();
  };

  const filterLabels: { value: Filter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'review', label: 'Para Revisar' },
    { value: 'custom', label: 'Minhas Palavras' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">📚 Flashcards</h1>
        <div className="text-sm text-gray-500 font-semibold">
          {currentIndex + 1} / {total || 0}
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {filterLabels.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => { setFilter(value); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              filter === value
                ? 'bg-[#58CC02] text-white border-[#46A302]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#58CC02]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Session stats */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#58CC02] font-bold">✓ {knownCount}</span>
          <span className="text-gray-400">sei</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#FF4B4B] font-bold">✗ {unknownCount}</span>
          <span className="text-gray-400">não sei</span>
        </div>
      </div>

      {/* Progress bar */}
      {total > 0 && (
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      )}

      {/* Card */}
      {!currentWord ? (
        <div className="card text-center py-12">
          <div className="text-4xl mb-4">🎉</div>
          <div className="text-xl font-bold text-gray-700">Nenhuma palavra nessa categoria!</div>
          <div className="text-gray-500 mt-2">Tente outro filtro.</div>
        </div>
      ) : (
        <>
          <FlipCard word={currentWord} isFlipped={isFlipped} onClick={() => setIsFlipped((f) => !f)} />

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button onClick={goPrev} className="btn-secondary px-4 py-2 text-sm">
              ← Anterior
            </button>
            <button onClick={() => setIsFlipped((f) => !f)} className="text-sm text-gray-500 underline">
              {isFlipped ? 'Ver alemão' : 'Ver tradução'}
            </button>
            <button onClick={goNext} className="btn-secondary px-4 py-2 text-sm">
              Próxima →
            </button>
          </div>

          {/* Known / Unknown */}
          <div className="flex gap-4">
            <button
              onClick={handleUnknown}
              className="flex-1 py-3 rounded-xl font-bold text-white bg-[#FF4B4B] border-b-4 border-[#CC0000] active:border-b-0 active:border-t-4 transition-all"
            >
              ✗ Não sei
            </button>
            <button
              onClick={handleKnown}
              className="flex-1 py-3 rounded-xl font-bold text-white bg-[#58CC02] border-b-4 border-[#46A302] active:border-b-0 active:border-t-4 transition-all"
            >
              ✓ Sei!
            </button>
          </div>
        </>
      )}
    </div>
  );
}
