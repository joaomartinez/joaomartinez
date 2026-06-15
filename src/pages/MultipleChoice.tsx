import { useState, useCallback, useMemo } from 'react';
import { useVocabulary } from '../hooks/useVocabulary';
import { Word } from '../types';

function getOptions(correct: Word, allWords: Word[]): string[] {
  const others = allWords
    .filter((w) => w.id !== correct.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((w) => (w.article ? `${w.article} ${w.german}` : w.german));
  const correctText = correct.article ? `${correct.article} ${correct.german}` : correct.german;
  const opts = [...others, correctText].sort(() => Math.random() - 0.5);
  return opts;
}

export default function MultipleChoice() {
  const { allWords } = useVocabulary();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

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

  const correctText = currentWord
    ? currentWord.article
      ? `${currentWord.article} ${currentWord.german}`
      : currentWord.german
    : '';

  const handleSelect = useCallback(
    (opt: string) => {
      if (selected !== null) return;
      setSelected(opt);
      setTotal((t) => t + 1);
      if (opt === correctText) {
        setScore((s) => s + 1);
      }
    },
    [selected, correctText]
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">🎯 Múltipla Escolha</h1>
        <div className="bg-[#58CC02] text-white px-3 py-1 rounded-full text-sm font-bold">
          {score} / {total}
        </div>
      </div>

      {/* Question card */}
      <div className="card text-center py-8">
        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Como se diz em alemão:
        </div>
        <div className="text-3xl font-extrabold text-[#3C3C3C] mb-2">{currentWord.portuguese}</div>
        <div className="text-gray-400 italic text-sm">{currentWord.english}</div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => {
          let cls =
            'w-full py-4 px-6 rounded-xl font-bold text-left border-2 transition-all duration-200 ';
          if (selected === null) {
            cls += 'bg-white border-gray-200 text-[#3C3C3C] hover:border-[#1CB0F6] hover:bg-blue-50';
          } else if (opt === correctText) {
            cls += 'bg-[#f0fce0] border-[#58CC02] text-[#58CC02] bounce-in';
          } else if (opt === selected) {
            cls += 'bg-red-50 border-[#FF4B4B] text-[#FF4B4B] shake';
          } else {
            cls += 'bg-white border-gray-200 text-gray-400 opacity-60';
          }
          return (
            <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
              {opt}
              {selected !== null && opt === correctText && (
                <span className="float-right">✓</span>
              )}
              {selected !== null && opt === selected && opt !== correctText && (
                <span className="float-right">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback and Next */}
      {selected !== null && (
        <div className={`rounded-2xl p-4 ${selected === correctText ? 'bg-[#f0fce0] border border-[#58CC02]' : 'bg-red-50 border border-[#FF4B4B]'}`}>
          <div className={`font-bold mb-1 ${selected === correctText ? 'text-[#58CC02]' : 'text-[#FF4B4B]'}`}>
            {selected === correctText ? '🎉 Correto!' : '😅 Incorreto!'}
          </div>
          {selected !== correctText && (
            <div className="text-sm text-gray-700">
              A resposta correta é: <strong>{correctText}</strong>
            </div>
          )}
          {currentWord.example && (
            <div className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Exemplo:</span> {currentWord.example}
              {currentWord.exampleTranslation && (
                <div className="text-xs text-gray-500 italic">{currentWord.exampleTranslation}</div>
              )}
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
