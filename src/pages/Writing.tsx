import { useState, useCallback, useMemo, useRef } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { Word } from '../types';

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function checkAnswer(input: string, word: Word): boolean {
  const inp = normalize(input);
  const german = normalize(word.german);
  const withArticle = word.article
    ? normalize(`${word.article} ${word.german}`)
    : german;

  // Accept: exact german word, german with article, or just the word ignoring article
  return inp === german || inp === withArticle;
}

export default function Writing() {
  const { allWords } = useVocabulary();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const shuffled = useMemo(
    () => [...allWords].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questionIndex]
  );

  const currentWord: Word | undefined = shuffled[0];

  const handleCheck = useCallback(() => {
    if (!currentWord || result !== null) return;
    const isCorrect = checkAnswer(input, currentWord);
    setResult(isCorrect ? 'correct' : 'wrong');
    setTotal((t) => t + 1);
    if (isCorrect) setScore((s) => s + 1);
  }, [currentWord, input, result]);

  const handleNext = useCallback(() => {
    setInput('');
    setResult(null);
    setQuestionIndex((i) => i + 1);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (result === null) handleCheck();
      else handleNext();
    }
  };

  const correctAnswer = currentWord
    ? currentWord.article
      ? `${currentWord.article} ${currentWord.german}`
      : currentWord.german
    : '';

  if (!currentWord) {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4">📚</div>
        <div className="text-xl font-bold text-gray-700">Nenhuma palavra disponível!</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">✍️ Exercício de Escrita</h1>
        <div className="bg-[#58CC02] text-white px-3 py-1 rounded-full text-sm font-bold">
          {score} / {total}
        </div>
      </div>

      {/* Question */}
      <div className="card text-center py-8">
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Como se escreve em alemão:
        </div>
        <div className="text-3xl font-extrabold text-[#3C3C3C] mb-2">{currentWord.portuguese}</div>
        <div className="text-gray-400 italic text-sm mb-1">{currentWord.english}</div>
        <div className="text-xs text-gray-400 mt-2">
          Categoria: {currentWord.category === 'noun' ? 'Substantivo (inclua o artigo!)' :
            currentWord.category === 'verb' ? 'Verbo' :
            currentWord.category === 'adjective' ? 'Adjetivo' : currentWord.category}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={result !== null}
          placeholder={currentWord.category === 'noun' ? 'ex: der Mann' : 'Digite em alemão...'}
          className={`w-full px-4 py-4 text-xl font-bold rounded-xl border-2 outline-none transition-all ${
            result === 'correct'
              ? 'border-[#58CC02] bg-[#f0fce0] text-[#58CC02]'
              : result === 'wrong'
              ? 'border-[#FF4B4B] bg-red-50 text-[#FF4B4B]'
              : 'border-gray-200 bg-white text-[#3C3C3C] focus:border-[#1CB0F6]'
          }`}
          autoFocus
        />

        {result === null ? (
          <button
            onClick={handleCheck}
            disabled={!input.trim()}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verificar
          </button>
        ) : (
          <button onClick={handleNext} className="btn-primary w-full">
            Próxima →
          </button>
        )}
      </div>

      {/* Feedback */}
      {result !== null && (
        <div
          className={`rounded-2xl p-4 ${
            result === 'correct'
              ? 'bg-[#f0fce0] border border-[#58CC02]'
              : 'bg-red-50 border border-[#FF4B4B]'
          }`}
        >
          <div
            className={`font-bold text-lg mb-1 ${
              result === 'correct' ? 'text-[#58CC02]' : 'text-[#FF4B4B]'
            }`}
          >
            {result === 'correct' ? '🎉 Correto!' : '😅 Incorreto!'}
          </div>
          {result === 'wrong' && (
            <div className="text-sm text-gray-700 mb-2">
              Resposta correta: <strong className="text-[#3C3C3C]">{correctAnswer}</strong>
            </div>
          )}
          {currentWord.example && (
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Exemplo:</span> {currentWord.example}
              {currentWord.exampleTranslation && (
                <div className="text-xs text-gray-500 italic mt-1">{currentWord.exampleTranslation}</div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="text-center text-xs text-gray-400">
        Pressione Enter para verificar ou avançar
      </div>
    </div>
  );
}
