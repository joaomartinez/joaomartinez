import { useState, useCallback, useMemo, useEffect } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { useSpeech } from '../hooks/useSpeech';
import { Word } from '../types';

function getOptions(correct: Word, allWords: Word[]): string[] {
  const others = allWords
    .filter((w) => w.id !== correct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((w) => w.portuguese);
  const opts = [...others, correct.portuguese].sort(() => Math.random() - 0.5);
  return opts;
}

export default function Listening() {
  const { allWords } = useVocabulary();
  const { speak, isSpeaking, isSupported } = useSpeech();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const shuffled = useMemo(
    () => [...allWords].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questionIndex]
  );

  const currentWord: Word | undefined = shuffled[0];

  const options = useMemo(() => {
    if (!currentWord) return [];
    return getOptions(currentWord, allWords);
  }, [currentWord, allWords]);

  // Auto-play when word changes
  useEffect(() => {
    if (currentWord && isSupported) {
      const timer = setTimeout(() => {
        const text = currentWord.article
          ? `${currentWord.article} ${currentWord.german}`
          : currentWord.german;
        speak(text);
      }, 500);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord?.id, isSupported]);

  const handleSpeak = useCallback(() => {
    if (!currentWord) return;
    const text = currentWord.article
      ? `${currentWord.article} ${currentWord.german}`
      : currentWord.german;
    speak(text);
  }, [currentWord, speak]);

  const handleSelect = useCallback(
    (opt: string) => {
      if (selected !== null || !currentWord) return;
      setSelected(opt);
      setTotal((t) => t + 1);
      if (opt === currentWord.portuguese) setScore((s) => s + 1);
    },
    [selected, currentWord]
  );

  const nextQuestion = useCallback(() => {
    setSelected(null);
    setQuestionIndex((i) => i + 1);
  }, []);

  if (!currentWord) {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4">📚</div>
        <div className="text-xl font-bold text-gray-700">Nenhuma palavra disponível!</div>
      </div>
    );
  }

  const correctAnswer = currentWord.portuguese;
  const displayGerman = currentWord.article
    ? `${currentWord.article} ${currentWord.german}`
    : currentWord.german;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">🎧 Exercício de Audição</h1>
        <div className="bg-[#58CC02] text-white px-3 py-1 rounded-full text-sm font-bold">
          {score} / {total}
        </div>
      </div>

      {!isSupported && (
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-3 text-sm text-yellow-700">
          ⚠️ Seu navegador não suporta síntese de voz. Use Chrome ou Edge para melhor experiência.
        </div>
      )}

      {/* Speaker card */}
      <div className="card flex flex-col items-center py-10 gap-6">
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Ouça e selecione a tradução correta
        </div>

        {/* Big play button */}
        <button
          onClick={handleSpeak}
          disabled={isSpeaking || !isSupported}
          className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl shadow-lg transition-all
            ${isSpeaking
              ? 'bg-[#1CB0F6] scale-95 shadow-md'
              : 'bg-[#1CB0F6] hover:bg-[#009fdf] hover:scale-105 active:scale-95'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {isSpeaking ? '🔊' : '🔊'}
        </button>

        <div className="text-sm text-gray-400">
          {isSpeaking ? 'Reproduzindo...' : 'Clique para ouvir novamente'}
        </div>

        {/* Show answer after selection */}
        {selected !== null && (
          <div className="text-center bounce-in">
            <div className="text-2xl font-extrabold text-[#3C3C3C]">{displayGerman}</div>
            {currentWord.example && (
              <div className="text-sm text-gray-500 mt-1 italic">{currentWord.example}</div>
            )}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => {
          let cls =
            'w-full py-4 px-6 rounded-xl font-bold text-left border-2 transition-all duration-200 ';
          if (selected === null) {
            cls += 'bg-white border-gray-200 text-[#3C3C3C] hover:border-[#CE82FF] hover:bg-purple-50';
          } else if (opt === correctAnswer) {
            cls += 'bg-[#f0fce0] border-[#58CC02] text-[#58CC02]';
          } else if (opt === selected) {
            cls += 'bg-red-50 border-[#FF4B4B] text-[#FF4B4B]';
          } else {
            cls += 'bg-white border-gray-200 text-gray-400 opacity-60';
          }
          return (
            <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
              {opt}
              {selected !== null && opt === correctAnswer && <span className="float-right">✓</span>}
              {selected !== null && opt === selected && opt !== correctAnswer && <span className="float-right">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {selected !== null && (
        <div
          className={`rounded-2xl p-4 ${
            selected === correctAnswer
              ? 'bg-[#f0fce0] border border-[#58CC02]'
              : 'bg-red-50 border border-[#FF4B4B]'
          }`}
        >
          <div className={`font-bold mb-1 ${selected === correctAnswer ? 'text-[#58CC02]' : 'text-[#FF4B4B]'}`}>
            {selected === correctAnswer ? '🎉 Correto!' : '😅 Incorreto!'}
          </div>
          {selected !== correctAnswer && (
            <div className="text-sm text-gray-700">
              A tradução correta é: <strong>{correctAnswer}</strong>
            </div>
          )}
          <button onClick={nextQuestion} className="btn-primary mt-3 w-full">
            Próxima Pergunta →
          </button>
        </div>
      )}
    </div>
  );
}
