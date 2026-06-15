import { useState, useMemo } from 'react';
import { grammarExercises } from '../data/grammar';
import { GrammarExercise } from '../types';

type GrammarType = 'article' | 'pronoun' | 'preposition';

const tabs: { value: GrammarType; label: string }[] = [
  { value: 'article', label: '🗂️ Artigos' },
  { value: 'pronoun', label: '👤 Pronomes' },
  { value: 'preposition', label: '📍 Preposições' },
];

function QuestionCard({
  exercise,
  onAnswer,
  answered,
  selected,
}: {
  exercise: GrammarExercise;
  onAnswer: (opt: string) => void;
  answered: boolean;
  selected: string | null;
}) {
  // Split question on ___ and render blank visually
  const parts = exercise.question.split('___');

  return (
    <div className="space-y-4">
      {/* Case label */}
      {exercise.caseLabel && (
        <div className="inline-block bg-[#1CB0F6] text-white px-3 py-1 rounded-full text-xs font-bold">
          {exercise.caseLabel}
        </div>
      )}

      {/* Question */}
      <div className="card py-8 text-center">
        <div className="text-xl font-bold text-[#3C3C3C] flex items-center justify-center flex-wrap gap-1">
          {parts[0] && <span>{parts[0]}</span>}
          <span className="inline-block min-w-[60px] border-b-4 border-[#1CB0F6] text-[#1CB0F6] font-extrabold px-2">
            {selected ?? '___'}
          </span>
          {parts[1] && <span>{parts[1]}</span>}
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {exercise.options.map((opt) => {
          let cls =
            'py-4 px-4 rounded-xl font-bold border-2 transition-all duration-200 text-center ';
          if (!answered) {
            cls += 'bg-white border-gray-200 text-[#3C3C3C] hover:border-[#1CB0F6] hover:bg-blue-50';
          } else if (opt === exercise.answer) {
            cls += 'bg-[#f0fce0] border-[#58CC02] text-[#58CC02]';
          } else if (opt === selected) {
            cls += 'bg-red-50 border-[#FF4B4B] text-[#FF4B4B]';
          } else {
            cls += 'bg-white border-gray-200 text-gray-400 opacity-60';
          }
          return (
            <button key={opt} className={cls} onClick={() => onAnswer(opt)}>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={`rounded-2xl p-4 bounce-in ${
            selected === exercise.answer
              ? 'bg-[#f0fce0] border border-[#58CC02]'
              : 'bg-red-50 border border-[#FF4B4B]'
          }`}
        >
          <div
            className={`font-bold mb-2 ${
              selected === exercise.answer ? 'text-[#58CC02]' : 'text-[#FF4B4B]'
            }`}
          >
            {selected === exercise.answer ? '🎉 Correto!' : `😅 Incorreto! Resposta: ${exercise.answer}`}
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Explicação:</span> {exercise.explanation}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Grammar() {
  const [activeTab, setActiveTab] = useState<GrammarType>('article');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const filtered = useMemo(
    () => grammarExercises.filter((e) => e.type === activeTab),
    [activeTab]
  );

  const shuffled = useMemo(
    () => [...filtered].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTab]
  );

  const currentExercise: GrammarExercise | undefined =
    shuffled[exerciseIndex % Math.max(shuffled.length, 1)];

  const handleAnswer = (opt: string) => {
    if (selected !== null || !currentExercise) return;
    setSelected(opt);
    setTotal((t) => t + 1);
    if (opt === currentExercise.answer) setScore((s) => s + 1);
  };

  const nextExercise = () => {
    setSelected(null);
    setExerciseIndex((i) => i + 1);
  };

  const changeTab = (tab: GrammarType) => {
    setActiveTab(tab);
    setExerciseIndex(0);
    setSelected(null);
    setScore(0);
    setTotal(0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-[#3C3C3C]">📝 Gramática</h1>
        <div className="bg-[#58CC02] text-white px-3 py-1 rounded-full text-sm font-bold">
          {score} / {total}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => changeTab(value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              activeTab === value
                ? 'bg-[#58CC02] text-white border-[#46A302]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#58CC02]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="text-sm text-gray-500">
        Exercício {(exerciseIndex % Math.max(shuffled.length, 1)) + 1} de {shuffled.length}
      </div>

      {currentExercise ? (
        <QuestionCard
          exercise={currentExercise}
          onAnswer={handleAnswer}
          answered={selected !== null}
          selected={selected}
        />
      ) : (
        <div className="card text-center py-12 text-gray-500">Nenhum exercício disponível.</div>
      )}

      {selected !== null && (
        <button onClick={nextExercise} className="btn-primary w-full">
          Próximo Exercício →
        </button>
      )}

      {/* Reference card */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
        <h3 className="font-bold text-yellow-800 mb-3">📋 Referência Rápida</h3>
        {activeTab === 'article' && (
          <div className="text-sm text-yellow-700 space-y-1">
            <div className="grid grid-cols-5 gap-1 font-semibold text-xs border-b border-yellow-300 pb-1 mb-1">
              <span>Caso</span><span>Masc.</span><span>Fem.</span><span>Neutro</span><span>Plural</span>
            </div>
            {[
              ['Nominativ', 'der', 'die', 'das', 'die'],
              ['Akkusativ', 'den', 'die', 'das', 'die'],
              ['Dativ', 'dem', 'der', 'dem', 'den'],
              ['Genitiv', 'des', 'der', 'des', 'der'],
            ].map(([c, ...arts]) => (
              <div key={c} className="grid grid-cols-5 gap-1 text-xs">
                <span className="font-semibold">{c}</span>
                {arts.map((a, i) => <span key={i} className="font-mono">{a}</span>)}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'pronoun' && (
          <div className="text-sm text-yellow-700 space-y-1">
            <div className="grid grid-cols-4 gap-1 font-semibold text-xs border-b border-yellow-300 pb-1 mb-1">
              <span>Pronome</span><span>Nominativ</span><span>Akkusativ</span><span>Dativ</span>
            </div>
            {[
              ['eu', 'ich', 'mich', 'mir'],
              ['você', 'du', 'dich', 'dir'],
              ['ele', 'er', 'ihn', 'ihm'],
              ['ela', 'sie', 'sie', 'ihr'],
              ['nós', 'wir', 'uns', 'uns'],
              ['vocês', 'ihr', 'euch', 'euch'],
              ['eles/elas', 'sie', 'sie', 'ihnen'],
            ].map(([pt, ...de]) => (
              <div key={pt} className="grid grid-cols-4 gap-1 text-xs">
                <span className="font-semibold">{pt}</span>
                {de.map((d, i) => <span key={i} className="font-mono">{d}</span>)}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'preposition' && (
          <div className="text-sm text-yellow-700 space-y-2">
            <div>
              <span className="font-bold">Sempre Akkusativ:</span>
              <span className="font-mono ml-2">für, durch, gegen, ohne, um, bis, entlang</span>
            </div>
            <div>
              <span className="font-bold">Sempre Dativ:</span>
              <span className="font-mono ml-2">mit, nach, bei, seit, von, zu, aus, gegenüber</span>
            </div>
            <div>
              <span className="font-bold">Dois casos (Wechselpräpositionen):</span>
              <span className="font-mono ml-2">an, auf, in, über, unter, vor, hinter, neben, zwischen</span>
            </div>
            <div className="text-xs italic">
              Com Wechselpräpositionen: Dativ = localização (wo?), Akkusativ = movimento (wohin?)
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
