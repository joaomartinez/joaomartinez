import { useNavigate } from 'react-router-dom';
import { useVocabulary } from '../hooks/useVocabulary';

const activities = [
  { icon: '📚', title: 'Flashcards', desc: 'Revise palavras com cartões', path: '/flashcards', color: '#1CB0F6' },
  { icon: '🎯', title: 'Múltipla Escolha', desc: 'Escolha a tradução correta', path: '/multiple-choice', color: '#58CC02' },
  { icon: '✍️', title: 'Escrita', desc: 'Digite a palavra em alemão', path: '/writing', color: '#FF9600' },
  { icon: '🎧', title: 'Audição', desc: 'Ouça e identifique a palavra', path: '/listening', color: '#CE82FF' },
  { icon: '📝', title: 'Gramática', desc: 'Artigos, pronomes e preposições', path: '/grammar', color: '#FF4B4B' },
  { icon: '📖', title: 'Vocabulário', desc: 'Veja todas as palavras salvas', path: '/vocabulary', color: '#FFD900' },
];

export default function Home() {
  const navigate = useNavigate();
  const { allWords, wordsKnown, wordsDueForReview } = useVocabulary();

  const totalWords = allWords.length;
  const progressPercent = totalWords > 0 ? Math.round((wordsKnown / totalWords) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h1 className="text-4xl font-extrabold text-[#3C3C3C] mb-1">Deutsch Lernen 🇩🇪</h1>
        <p className="text-gray-500 text-lg">Aprenda alemão do jeito certo, Nível B1</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
          <div className="text-3xl font-extrabold text-[#58CC02]">{wordsKnown}</div>
          <div className="text-sm text-gray-500 mt-1">Palavras conhecidas</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
          <div className="text-3xl font-extrabold text-[#1CB0F6]">{totalWords}</div>
          <div className="text-sm text-gray-500 mt-1">Total de palavras</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 text-center">
          <div className="text-3xl font-extrabold text-[#FF4B4B]">{wordsDueForReview}</div>
          <div className="text-sm text-gray-500 mt-1">Para revisar</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-600">Progresso geral</span>
          <span className="text-sm font-bold text-[#58CC02]">{progressPercent}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Activity cards */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-3">Atividades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {activities.map((act) => (
            <button
              key={act.path}
              onClick={() => navigate(act.path)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-left hover:shadow-md hover:border-gray-300 transition-all duration-200 active:scale-95"
            >
              <div className="text-3xl mb-2">{act.icon}</div>
              <div className="font-bold text-[#3C3C3C] text-sm">{act.title}</div>
              <div className="text-xs text-gray-500 mt-1">{act.desc}</div>
              <div
                className="mt-3 h-1 rounded-full w-8"
                style={{ backgroundColor: act.color }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Add word button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => navigate('/add-word')}
          className="btn-primary flex items-center gap-2"
        >
          ➕ Adicionar Palavra
        </button>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <h3 className="font-bold text-blue-700 mb-2">💡 Dica do dia</h3>
        <p className="text-blue-600 text-sm">
          Em alemão, todos os substantivos são escritos com letra maiúscula! Ex.: <strong>die Arbeit</strong>, <strong>der Freund</strong>, <strong>das Buch</strong>.
        </p>
      </div>
    </div>
  );
}
